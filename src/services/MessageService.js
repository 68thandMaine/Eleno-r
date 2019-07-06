import Api from './Api';

export default class MessageService {
  // Create a message
  static sendMessage(message) {
    return new Promise ( async (resolve, reject) => {
      try {
        const res =  await Api().post('/message', message);
        console.log('sendMessage response', res);
        resolve(res.status);
      } catch (err) {
        reject(err);
      }
    });
  }
  
}