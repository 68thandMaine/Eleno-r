import Api from './Api';

export default class MessageService {
  // Create a message
  static sendMessage(message) {
    return Api().post('/message', message);
  }
  
}