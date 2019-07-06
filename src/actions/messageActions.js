
import MessageService from '../services/MessageService';
import Moment from 'moment';

async function uploadMessage(_firstName, _lastName, _email, _subject, _message){
  const statusCode = await MessageService.sendMessage({
    firstName: _firstName,
    lastName: _lastName,
    email: _email,
    subject: _subject,
    message: _message,
    createdAt: new Moment().format('ddd MMMM Do YYYY'),
    opened: false,
    replied: false
  });
  return statusCode;
}

function postDataSuccess(data) {
  return {
    type: action.POST_DATA_SUCCESS,
    data: data
  };
}

export{uploadMessage};