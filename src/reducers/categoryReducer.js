import * as types from '../constants/ActionTypes';

const categoryReducer = ( state = {}, action) => {
  switch(action.type) {
  case types.SELECT_CATEGORY: {
    return Object.assign({}, state, {
      [action.content.id]:{
        shown: true,
        title: action.content.title,
        description: action.content.description,
        id: action.content.id,
        srcFile: action.content.srcFile,
        category: action.content.category,
        dateMade: action.content.dateMade,
        forSale: action.content.forSale
      }
    });
  }
  case types.RETURN_TO_GALLERY: {
    return {};
  }
  default:
    return state;
  }
};

export default categoryReducer;
