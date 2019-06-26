import React from 'react';
import Gallery from './Gallery';
import CategoryContentControl from './CategoryContentControl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { returnToGallery } from '../../actions';

class GalleryControl extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      CategoryContentCarouselVisibleOnPage: false
    };
    this.handleViewCategoryContent = this.handleViewCategoryContent.bind(this);
    this.handleReturningToGallery = this.handleReturningToGallery.bind(this);
  }

  handleViewCategoryContent(){
    this.setState({CategoryContentCarouselVisibleOnPage: true});
  }

  handleReturningToGallery(){
    this.props.dispatch(returnToGallery());
    this.setState({CategoryContentCarouselVisibleOnPage: false});
  }

  render(){

    const galleryControl={
      width: '100%'
    };

    let currentlyVisibleContent = null;
    if(this.state.CategoryContentCarouselVisibleOnPage){
      currentlyVisibleContent = <CategoryContentControl onReturnToGallery={this.handleReturningToGallery} categoryContent={this.props.categoryData} />;
    } else {
      currentlyVisibleContent = <Gallery galleryByCategory={this.props.galleryByCategory} onViewCategoryContent={this.handleViewCategoryContent} />;
    }
    return (
      <div style={galleryControl}>
        {currentlyVisibleContent}
      </div>
    );
  }
}

GalleryControl.propTypes = {
  dispatch: PropTypes.func,
  categories: PropTypes.object,
  categoryData: PropTypes.object,
  galleryByCategory: PropTypes.object
};

const mapStateToProps = state => {
  return {
    categoryData: state.categories
  };
};

export default connect(mapStateToProps)(GalleryControl);
