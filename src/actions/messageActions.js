import constants from '../constants';
import MessageService from '../services/MessageService';
const { firebaseConfig, action } = constants;
import Moment from 'moment';

export function uploadMessage(_firstName, _lastName, _email, _subject, _message){
  return () => MessageService.sendMessage({
    firstName: _firstName,
    lastName: _lastName,
    email: _email,
    subject: _subject,
    message: _message,
    createdAt: new Moment().format('ddd MMMM Do YYYY'),
    opened: false,
    replied: false
  }).then(res => {
    console.log('uploadMessage succesful response: ', res);
    
  }).catch(err => {
    // Add logic to handle error.
    console.log('UPLOADMESSAGE ERROR: ',err);
  });2;
}

function postDataSuccess(data) {
  return {
    type: action.POST_DATA_SUCCESS,
    data: data
  };
}