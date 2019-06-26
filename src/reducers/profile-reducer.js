import * as types from '../constants/ActionTypes';

const profileReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
  case types.RECEIVE_PROFILE: {
    newState = Object.assign({}, action.profile);
    return newState;
  }
  default:
    return state;
  }
};

export default profileReducer;
