import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateProfile} from './../../../actions';
import Button from '../../Styles/Button';
import './Styles/EditCreatorProfile.css';

function EditCreatorProfile(props){
  let _editDisplayName = null;  
  let _editFirstName = null;
  let _editLastName = null;
  let _editEmail = null;
  let _editWebsite = null;
  let _editGreeting = null;
  let _editProfilePicture = null;
  let _editBiography = null;

  function handleEditProfileSubmission(){
    console.log('CURRENT ROUTER PATH:', props.currentRouterPath);
    console.log('___________________________');
    console.log('PROFILE DATA')
  }


  return (
    <div className='editFormContainer'>
      <div className='editTitleWrapper'>
        <h5>Edit your profile</h5>
      </div>
      <form className='editForm' onSubmit={handleEditProfileSubmission}>
        <div className='inputWrapper'>
          <label htmlFor='editDisplayName'>Change your display name</label>
          <input type='text'
            id='editDisplayName'
            ref={(input) => {_editDisplayName = input;}}/>
        </div>
        <div className='inputWrapper'>
          <label htmlFor='editFirstName'>Change your first name</label>
          <input type='text'
            id='editFirstName'
            ref={(input) => {_editFirstName = input;}}/>
        </div>
        <div className='inputWrapper'>
          <label htmlFor='editLastName'>Change your last name</label>
          <input type='text'
            id='editLastName'
            ref={(input) => {_editLastName = input;}}/>       
        </div>
        <div className='inputWrapper'>
          <label htmlFor='editEmail'>Change your email</label>
          <input type='text'
            id='editEmail'
            ref={(input) => {_editEmail = input;}}/>
        </div>
        <div className='inputWrapper'>
          <label htmlFor='editWebsite'>Change your websites</label>
          <input type='text'
            id='editWebsite'
            ref={(input) => {_editWebsite = input;}}/>
        </div>
        <div className='inputWrapper'>
          <label htmlFor='editGreeting'>Change your greeting</label>
          <input type='text'
            id='editGreeting'
            ref={(input) => {_editGreeting = input;}}/>
        </div>
        <div className='inputWrapper'>
          <input type='file'
            id='editProfilePicture'
            ref={(input) => {_editProfilePicture = input;}}/>
          <label htmlFor='editProfilePicture'>Change your profile picture</label>
        </div>
        <div className='inputWrapper'>
          <label htmlFor='editBio'>Change your biography</label>
          <textarea type='textarea'
            id='editBiography'
            ref={(textarea) => {_editBiography = textarea;}}/>        
        </div>
        <div className='inputWrapper'>
          <Button buttonText='update your profile' type='submit'/>
        </div>      
      </form>
    </div>
  
  );
  
}

EditCreatorProfile.propTypes = {
  currentRouterPath: PropTypes.string.isRequired,
}

export default EditCreatorProfile;
