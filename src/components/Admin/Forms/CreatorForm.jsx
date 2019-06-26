import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {uploadProfile} from './../../../actions';

function CreatorForm(props) {
  let _displayName = null;
  let _firstName = null;
  let _lastName = null;
  let _email = null;
  let _greeting = null;
  let _about = null;
  let _imageFile = null;
  let _websites = null;

  const wrapperStyles = {
    backgroundColor: '#EDF0F0',
    position: 'relative',
    display: 'block',
    maxHeight: '100%',
    maxWidth: '100%',
    padding: '10px 45px 20px 45px ',
  };
  const titleStyles = {
    fontFamily: 'FoxCat',
    fontSize: '52px',
    position: 'relative',
    display: 'inline-block',
    marginBottom: '5px',
    color: 'black'
  };

  const formWrapperStyles = {
    // border: 'dashed red 1px',
    padding: '5px 10px 0px 10px',
    backgroundColor: 'white',
    height: '900px',
    width: 'auto',
    display: 'block',
  };

  const profilePicWrapperStyles = {
    display: 'grid',
    height: '25%',
    boxSizing: 'border-box',
    justifyContent: 'center',
    margin: '2% 0 8% 0'
  };

  const profilePicStyles = {
    borderRadius: '50%',
    height: '160px',
    width: '160px',
    objectFit: 'fill',
    objectPosition: '50% 50%'
  };
  const formStyles = {
    position: 'relative',
    display: 'block',
    top: '-170px',
    padding: '60px',
    textAlign: 'center',
    left: '1.5%'
  };
  const form_GeneralInfoWrapper = {
    display: 'block'

  };
  const form_GeneralInfoTitle = {
    padding: '0px 10px 15px 0px',
    fontFamily: 'Athena',
    fontSize: '28px',
    marginBottom: '-5px',
    display: 'block'
  };
  const labelStyles={
    fontSize: '20px',
    marginTop: '10px',
    textAlign: 'left'
  };
  const buttonStyles = {
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: 'unset',
    boxSizing: 'border-box',
    color: '#ffffff',
    height: '30px',
    width: '100px',
    marginTop: '2%',
  };




  function handleProfileSubmission(event) {
    const {dispatch} = props;
    event.preventDefault();
    let file = document.querySelector('#imageFile');
    dispatch(uploadProfile(_displayName.value, file.files[0], _firstName.value, _lastName.value, _email.value, _greeting.value, _about.value, _websites.value));
    _displayName.value = '',
    _imageFile.value = '',
    _firstName.value = '',
    _lastName.value = '',
    _email.value = '',
    _greeting.value = '',
    _about.value = '',
    _websites.value = '';
  }

  return (
    <div style={wrapperStyles}>

      <p style={titleStyles}> Profile </p>

      <div style={formWrapperStyles}>
        <div style={profilePicWrapperStyles}>
          <img
            style={profilePicStyles}
            src="https://www.lempertz.com/uploads/tx_lempertzproject/Lempertz-1003-53-Photographie-Man-Ray-Untitled-Rayographs-a.jpg"/>
        </div>

        <form style={formStyles} onSubmit={handleProfileSubmission}>



          <div style={form_GeneralInfoWrapper}>
            <div style={form_GeneralInfoTitle}>General info</div>
            <div style={labelStyles}>Display Name</div>
            <input
              type='text'
              id='displayName'
              ref={(input) => {
                _displayName = input;
              }}/>
            <div style={labelStyles}>Profile Avatar</div>
            <input
              type='file'
              id='imageFile'
              ref={(input) => {
                _imageFile = input;
              }}/>
            <div style={labelStyles}>First name</div>
            <input
              type='text'
              id='firstName'
              ref={(input) => {_firstName = input;}}/>
            <div style={labelStyles}>Last name</div>
            <input
              type='text'
              id='lastName'
              ref={(input) => {_lastName = input;}}/>
            <div style={labelStyles}>List a website</div>
            <input
              type='text'
              id='websites'
              ref={(input) => {
                _websites = input;
              }}/>
          </div>
          <div>
            <div style={labelStyles}>Email</div>
            <input
              type='text'
              id='email'
              ref={(input) => {
                _email = input;
              }}/>
            <div style={labelStyles}>Write a greeting or quick hello</div>
            <input
              type='text'
              id='greeting'
              ref={(input) => {
                _greeting = input;
              }}/>
            <div style={labelStyles}>What are you about? Tell the people who you are!</div>
            <textarea
              type='text'
              id='about'
              ref={(textarea) => {
                _about = textarea;
              }}/>
          </div>
          <button style={buttonStyles} type='submit'>Create Profile</button>
        </form>
      </div>
    </div>
  );
}

CreatorForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(CreatorForm);
