import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {uploadProfile} from '../../../actions';
import './Styles/CreatorForm.css';

function CreatorForm(props) {
  let _displayName = null;
  let _firstName = null;
  let _lastName = null;
  let _email = null;
  let _greeting = null;
  let _about = null;
  let _imageFile = null;
  let _websites = null;
   
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
    <div className='creatorFormWrapper'>
      <div className='headerWrapper'>
        <div className='headerBanner'>
          <p className='titleStyles'> Create New </p>
          <p className='titleStyles'>Profile</p>
        </div>
        <div className='profilePicWrapper'>
          <img
            className='profilePicStyles'
            src="https://www.lempertz.com/uploads/tx_lempertzproject/Lempertz-1003-53-Photographie-Man-Ray-Untitled-Rayographs-a.jpg"/>
        </div>
      </div>
      <div className='formWrapperStyles'>
        <form onSubmit={handleProfileSubmission}>
          <div className='form_GeneralInfoWrapper'> 
            <div className='form_TitleHeaders'>General info:
            </div>
            <div className='formContentWrapper'>
              <div className='inputWrapper'>
                <div className='labelStyles'>First name</div>
                <input
                  type='text'
                  id='firstName'
                  ref={(input) => {_firstName = input;}}/>
              </div>
              <div className='inputWrapper'>
                <div className='labelStyles'>Last name</div>
                <input
                  type='text'
                  id='lastName'
                  ref={(input) => {
                    _lastName = input;
                  }}/>
              </div>
            </div>
            <div className='formContentWrapper'>
              <div className ='inputWrapper'>
                <div className='labelStyles'>Email</div>
                <input
                  type='text'
                  id='email'
                  ref={(input) => {_email = input;}}/>
              </div>
              <div className='inputWrapper'>
                <div className='labelStyles'>List a website</div>
                <input
                  type='text'
                  id='websites'
                  ref={(input) => {
                    _websites = input;
                  }}/>
              </div>
            </div>
          </div>
          <div className='form_ProfileContentWrapper'>
            <div className='form_TitleHeaders'>Profile Content:</div>

            <div className='formContentWrapper'>
              <div className='inputWrapper'>
                <div className='labelStyles'>Display Name</div>
                <input
                  type='text'
                  id='displayName'
                  ref={(input) => {
                    _displayName = input;
                  }}/>
              </div
              > <div className='inputWrapper'>
                <div className='labelStyles'>Profile Avatar</div>
                <input
                  type='file'
                  id='imageFile'
                  ref={(input) => {
                    _imageFile = input;
                  }}/>
              </div>
            </div>
          </div>
          <div className='containerProfileContent'>
            <div className='containerProfileContent_Left'>
              <div className='formContentWrapper'>
                <div className='labelStyles'>Write a greeting or quick hello</div>
                <input
                  type='text'
                  id='greeting'
                  ref={(input) => {
                    _greeting = input;
                  }}/>
              </div>
            </div>         
            <div className='containerProfileContent_Right'>
              <div className='formContentWrapper'>
                <div className='labelStyles'>What are you about? Tell the people who you are!</div>
                <textarea
                  type='text'
                  id='about'
                  ref={(textarea) => {
                    _about = textarea;
                  }}/>
              </div>
            </div>
          </div>
          <div className='buttonWrapper'>
            <button className= 'creatorFormButton' type='submit'>Create Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}

CreatorForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(CreatorForm);
