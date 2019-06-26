import React from 'react';
import './Styles/AboutMe.css';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const AboutMe = ({ profileData }) => {
  const wrapperStyles = {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'relative',
    right: '1%',
    width: '100%',
    marginLeft: '5%'
  };

  const imageWrapperStyles = {
    display: 'inline-block',
    width: '350px',
    position: 'relative',
    top: '51px'
  };
  const imageStyles = {
    width: '100%'
  };
  const headingWrapperStyles = {
    position: 'relative',
    flex: '0 5 auto',
    padding: '0 0 0 52',
    top: '-15px'
  };
  const headingStyles = {
    position: 'static',
    color: '#4C4C4C',
    top: '-1.8rem',
    textAlign: 'center'
  };
  const textStyles = {
    color: '#4C4C4C',
    lineHeight: '1.7em',
    verticalAlign: 'baseline'
  };

  return (
    <div className='wrapperStyles_AboutMe'>
      <div className='profilePicWrapper_AboutMe'>
        <img className='imageStyles_AboutMe' src={profileData.srcFile} alt=''/>
      </div>
      <div className='headingWrapperStyles_AboutMe'>
        <p className='headingStyles_AboutMe'>{profileData.firstName} {profileData.lastName}</p>
        <p className='headingStyles_AboutMe'>
          <em>{profileData.greeting}</em>
        </p>
        <p className='textStyles_AboutMe'>
          <span>{profileData.about}</span>
        </p>
      </div>
    </div>

  );
};

AboutMe.propTypes = {
  profileData: PropTypes.object
};

const mapStateToProps = state => {
  return {
    profileData: state.profile
  };
};

export default connect(mapStateToProps)(AboutMe);
