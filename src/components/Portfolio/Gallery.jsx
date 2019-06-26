import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCategoryToView } from '../../actions';

const Gallery = ({ dispatch, galleryByCategory, onViewCategoryContent}) => {
  return(
    <div className='categoryListContainer'>

      {Object.keys(galleryByCategory).map(category => {
        let categoryContent = galleryByCategory[category];
        let projectId = Object.keys(galleryByCategory[category])[0];
        let firstObject = galleryByCategory[category][projectId];
        return( <div className='categoryContainer' key={category} onClick={() =>{
          dispatch(selectCategoryToView(categoryContent));
          onViewCategoryContent();
        }} >
          <div className='imageContainer'>
            <img src={firstObject.srcFile}></img>
            <div className='centered'>{category}</div>
          </div>
        </div>);
      })}
    </div>
  );
};


Gallery.proptypes = {
  galleryByCategory: PropTypes.object,
  onViewCategoryContent: PropTypes.func,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    galleryByCategory: state.galleryByCategory
  };
};

export default connect(mapStateToProps)(Gallery);
