import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Content = ({ imageData, onReturnToCarousel}) => {

  const wrapperStyles = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    position: 'relative',
    top: '-55px',
    left: '-270px',
    paddingLeft:'32px',
    width: '130%',
    height: '100%',
    backgroundColor:'white'
  };

  const imageWrapperStyles = {
    paddingRight: '10px',
    marginTop: '50px',
    maxHeight: '1000px',
    height: 'auto',
    width: 'auto\9',
    display: 'inline-flex',
    alignItem: 'center',
    justifyContent: 'space-evenly',
    top: '-10px'
  };

  const imageStyles= {
    position: 'absolute',
    transform: 'translate(-50% -50%)',
    maxWidth: '65%',
    maxHeight: '75%'
  };

  const artWorkInformationStyles ={
    display: 'fixed',
    alignItems: 'center',
    paddingLeft: '19%',
    paddingTop: '20%',
    maxWidth: '100%',
    margin: '10%'
  };

  const titleStyles = {
    display: 'grid',
    gridTemplateColumns:'1fr',
    fontFamily: 'Athena',
    fontSize: '25px',
    color: '#7F7F7F',
    textAlign: 'center',
    paddingTop: '10px',
  };
  const infomationStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    textAlign: 'center'
  };

  return ((imageData.shown
    ? <div style={wrapperStyles} onClick={() => onReturnToCarousel()}>

      <div style={imageWrapperStyles}>
        <img style={imageStyles} src={imageData.srcFile}/>
      </div>

      <div style={artWorkInformationStyles}>
        <div style={titleStyles}>
          {imageData.title}
          <button onClick={() =>console.log(imageData.id)}>Image ID</button>
          <br/>
          <sup><em>{imageData.dateMade}</em></sup>
        </div>
        <div style={infomationStyles}>
          <br/>
          <p>{imageData.description}</p>
          <p>{imageData.id}</p>
        </div>
      </div>
    </div>
    : null));
};

Content.propTypes = {
  onReturnToCarousel: PropTypes.func,
  imageData: PropTypes.object
};

const mapStateToProps = state => {
  return {imageData: state.selectedContent};
};

export default connect(mapStateToProps)(Content);
