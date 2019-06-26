import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './Styles/CurrentProfileInfo.css';
import AboutMe from '../../Portfolio/AboutMe';
import Button from '../../Styles/Button';

class CurrentProfileInfo extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.deleteProfile = this.deleteProfile.bind(this);
  }
  
  deleteProfile() {
    console.log('deleteProfileHit id', this.props.currentProfile.id);
  }
  render() {
    return (
      <div className='currentProfileTitleWrapper'>
        <h1>Visible Profile Content</h1>
        <sup>This will display the content that is currently displayed OR any changes you make</sup>
        <div className='aboutMeWrapper'>
          <AboutMe />
        </div>
        <Button buttonText={'Delete Profile'} click={this.deleteProfile}/>
      </div>
    );
  }
}
CurrentProfileInfo.propTypes = {
  currentProfile: PropTypes.object,
};

const mapStateToProps = state=> {
  return {
    currentProfile: state.profile
  }
}

export default connect(mapStateToProps)(CurrentProfileInfo);