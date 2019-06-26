import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';




const CategoryContentCarousel = ({ categoryContent, onSelectImage, onReturnToGallery}) => {
  const carouselWrapperStyles ={
    marginLeft: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    maxWidth: '100%',
    height: '60%'
  };

  const carouselImageStyles={
    width: 'auto',
    height: '68%',
    maxWidth: '100%'
  };

  const buttonStyles = {
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: 'unset',
    boxSizing: 'border-box',
    color: '#ffffff',
    height: '30px',
    width: '500px',
    marginTop: '5%',
  };
  const value = (categoryContent ?
    (
      <div style={carouselWrapperStyles}>
        <Carousel autoPlay={true} showThumbs={false} >
          {Object.keys(categoryContent).map((content) =>
            <div key={categoryContent[content].id} onClick={()=>{
              onSelectImage(categoryContent[content].title, categoryContent[content].description, categoryContent[content].dateMade, categoryContent[content].srcFile, categoryContent[content].forSale);
            }} >
              <img style={carouselImageStyles} src={categoryContent[content].srcFile} />
            </div>
          )}
        </Carousel>
        <div >
          <button style={buttonStyles} onClick={() =>{onReturnToGallery();}}>Return to Gallery</button>
        </div>
      </div>
    ) : null);
  return value;
};



CategoryContentCarousel.propTypes = {
  categoryContent: PropTypes.object,
  onSelectImage: PropTypes.func,
  onReturnToGallery: PropTypes.func
};

export default connect()(CategoryContentCarousel);
