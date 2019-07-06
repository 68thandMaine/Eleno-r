import MessageService from '../services/MessageService';
import Moment from 'moment';

async function uploadMessage(_firstName, _lastName, _email, _subject, _message){
  try {
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
  } catch(err) {
    return err;
  }
}

export{uploadMessage};