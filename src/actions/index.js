import Firebase from 'firebase';
import constants from '../constants';
import MessageService from '../services/MessageService';
const { firebaseConfig, action } = constants;
import Moment from 'moment';

Firebase.initializeApp(firebaseConfig);
const galleryPieces = Firebase.database().ref('galleryPieces');
const profileInformation = Firebase.database().ref('profileInformation');


function getDataSuccess(data) {
  return {
    type: action.GET_DATA_SUCCESS,
    data: data
  };
}


function receiveMessage(messageFromFirebase) {
  return {
    type: action.RECEIVE_MESSAGE,
    message: messageFromFirebase
  };
}


export function watchFirebaseContactCreatorRef() {
  return function (dispatch) {
    contactCreator.on('child_added', data => {
      const newMessage = Object.assign({}, data.val(), {
        id: data.getKey(),
        formattedTime: new Moment(data.val().date).format('dddd, MMM Do YYY')
      });
      dispatch(receiveMessage(newMessage));
    });
  };
}

export function uploadContent(_title, _media, _dateMade, _category, _description, _dimensions, _imgFile, _forSale, _price) {
  let storageRef = Firebase.storage().ref(_category + '/' + _title);
  let uploadTask = storageRef.put(_imgFile);
  return () => {
    uploadTask.on(Firebase.storage.TaskEvent.STATE_CHANGED,
      function(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
        case Firebase.storage.TaskState.PAUSED:
          break;
        case Firebase.storage.TaskState.RUNNING:
          break;
        }
      }, function(error) {
        switch (error.code) {
        case 'storage/unauthorized':
          break;
        case 'storage/canceled':
          break;
        case 'storage/unknown':
          break;
        }
      }, function() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          let downloadUrl = downloadURL;
          let postKey= galleryPieces.child(_category).push().key;
          let updates = {};
          let contentData = {
            title: _title,
            media: _media,
            dateMade: _dateMade,
            category: _category,
            description: _description,
            dimensions: _dimensions,
            srcFile: downloadUrl,
            forSale: _forSale,
            price: _price,
            id: postKey
          };
          updates[postKey] = contentData;
          console.log(updates);
          galleryPieces.child(_category).update(updates);
        });
      });
  };
}
function receivePortfolioContent(contentFromFirebase){
  return {
    type: action.RECEIVE_PORTFOLIO_CONTENT,
    content: contentFromFirebase,
  };
}
export function watchFirebaseGalleryRef() {
  return function(dispatch) {
    galleryPieces.on('child_added', data => {
      const newContent = Object.assign({}, data.val(),
        {
          category: data.getKey()
        }
      );
      dispatch(receivePortfolioContent(newContent));
    });
  };
}

export function uploadProfile(_displayName, _imgFile, _firstName, _lastName, _email, _greeting, _about, _websites) {
  let storageRef = Firebase.storage().ref('profilepictures' + _imgFile);
  let uploadTask = storageRef.put(_imgFile);
  return () => {
    uploadTask.on(Firebase.storage.TaskEvent.STATE_CHANGED,
      function(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('progress', progress);
        switch (snapshot.state) {
        case Firebase.storage.TaskState.PAUSED:
          break;
        case Firebase.storage.TaskState.RUNNING:
          break;
        }
      }, function(error) {
        switch (error.code) {
        case 'storage/unauthorized':
          break;
        case 'storage/canceled':
          break;
        case 'storage/unknown':
          break;
        }
      }, function() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('the proof', downloadURL);
          let downloadUrl = downloadURL;
          let postKey = profileInformation.push().key;
          let updates = {};
          let profileData = {
            displayName: _displayName,
            srcFile: downloadUrl,
            firstName: _firstName,
            lastName: _lastName,
            email: _email,
            greeting: _greeting,
            about: _about,
            websites: _websites,
            id: postKey
          };
          updates[postKey] = profileData;
          profileInformation.update(updates);
        });
      });
  };
}
function recieveProfileInfo(profileFromFirebase) {
  return {
    type: action.RECEIVE_PROFILE,
    profile: profileFromFirebase
  };
}

export function watchFirebaseProfileRef() {
  return function(dispatch) {
    profileInformation.on('child_added', data => {
      const newProfile = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(recieveProfileInfo(newProfile));
    });
  };
}




function selectCategory(categoryContent){
  return {
    type: action.SELECT_CATEGORY,
    content: categoryContent
  };
}
export function selectCategoryToView(categoryContent) {
  let newContent;
  return function(dispatch) {
    Object.keys(categoryContent).map(data => {
      newContent = Object.assign({}, categoryContent[data], {
        id: categoryContent[data].id
      });

      console.log('index.jsx newContent', newContent);
      dispatch(selectCategory(newContent));
      // console.log('newContent', newContent)
    });
  };
}
export const selectImage = (id, title, description, dateMade, srcFile, forSale) => ({
  type: action.SELECT_IMAGE,
  id,
  title,
  description,
  dateMade,
  srcFile,
  forSale
});
export const returnToGallery = () => ({
  type: action.RETURN_TO_GALLERY
});
export const returnToCarousel = () => ({
  type: action.RETURN_TO_CAROUSEL
});