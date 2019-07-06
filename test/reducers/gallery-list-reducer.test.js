import galleryListReducer from './../../src/reducers/gallery-list-reducer';

describe('galleryListReducer', () => {

    it('Should return default state if no action type is recognized', () => {
    expect(galleryListReducer({}, {
              type: null})).toEqual({});
      });
    
} )