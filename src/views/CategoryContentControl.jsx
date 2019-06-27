import React from 'react';
import Content from '../components/Portfolio/Content';
import PropTypes from 'prop-types';
import CategoryContentCarousel from '../components/Portfolio/CategoryContentCarousel';
import { connect } from 'react-redux';
import { returnToCarousel, selectImage} from '../actions';

class CategoryContentControl extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imageVisibleOnPage: false
    };
    this.handleSelectingImage = this.handleSelectingImage.bind(this);
    this.handleReturnToCarousel= this.handleReturnToCarousel.bind(this);
  }

  handleSelectingImage(title, description, dateMade, srcFile, forSale){
    this.props.dispatch(selectImage(title, description, dateMade, srcFile, forSale));
    this.setState({imageVisibleOnPage: true});
  }

  handleReturnToCarousel(){
    this.props.dispatch(returnToCarousel());
    this.setState({imageVisibleOnPage:false});
  }

  render() {
    let currentlyVisibleContent = null;
    if(this.state.imageVisibleOnPage) {
      currentlyVisibleContent= <Content
        onReturnToCarousel={this.handleReturnToCarousel} selctedImage = {this.props.selectedImage}/>;
    } else {
      currentlyVisibleContent = <CategoryContentCarousel onReturnToGallery={this.props.onReturnToGallery} categoryContent={this.props.categoryContent} onSelectImage = {this.handleSelectingImage} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

CategoryContentControl.propTypes = {
  categoryContent: PropTypes.object,
  selectedImage: PropTypes.object,
  dispatch: PropTypes.func,
  onReturnToCarousel: PropTypes.func,
  onReturnToGallery: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    selectedImage: state.selectedContent
  };
};

export default connect(mapStateToProps)(CategoryContentControl);
