import { combineReducers } from 'redux';
import galleryListReducer from './gallery-list-reducer';
import selectImageReducer from './selectImageReducer';
import categoryReducer from './categoryReducer';
import messagesReducer from './messages-reducer';
import profileReducer from './profile-reducer';


const rootReducer = combineReducers({
  galleryByCategory: galleryListReducer,
  selectedContent: selectImageReducer,
  categories: categoryReducer,
  messageList: messagesReducer,
  profile: profileReducer
});

export default rootReducer;
