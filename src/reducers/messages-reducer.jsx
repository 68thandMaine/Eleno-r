import * as types from '../constants/ActionTypes';


const messagesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
  case types.RECEIVE_MESSAGE: {
    newState = Object.assign({}, state);
    newState[action.message.id] = action.message;
    return newState;
  }
  default:
    return state;
  }
};

export default messagesReducer;
