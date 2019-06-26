import * as types from '../constants/ActionTypes';

const selectImageReducer = (state = {}, action) => {
  switch (action.type) {
  case types.SELECT_IMAGE:
    return Object.assign({}, {
      shown: true,
      id: action.id,
      title: action.title,
      description: action.description,
      dateMade: action.dateMade,
      srcFile: action.srcFile,
      forSale: action.forSale
    });
  case types.RETURN_TO_CAROUSEL:
    return Object.assign({}, {
      shown: false,
      title: '',
      description: '',
      dateMade: '',
      id: '',
      srcFile: '',
      forSale: ''
    });
  default:
    return state;
  }
};

export default selectImageReducer;
