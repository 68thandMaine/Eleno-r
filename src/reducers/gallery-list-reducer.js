import * as types from '../constants/ActionTypes';
import constants from './../constants';
const { initialState} = constants;



const galleryListReducer = (state = initialState.galleryByCategory, action) => {

  let newState;
  switch (action.type) {
  case types.RECEIVE_PORTFOLIO_CONTENT:{
    newState = Object.assign({}, state);
    newState[action.content.category] = action.content;
    return newState;}
  }
  return state;
};

export default galleryListReducer;
