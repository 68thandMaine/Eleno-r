import Api from './Api';

export default class MessageService {
  // Create a message
  static sendMessage(message) {
    return new Promise ( async (resolve, reject) => {
      try {
        const res =  await Api().post('/message', message);
        resolve(res.status);
      } catch (err) {
        reject(err);
      }
    });
  }
  
}