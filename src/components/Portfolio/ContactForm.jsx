import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadMessage } from '../../actions/messageActions';
// Stylesheets
import './../../styles.css';
import './Styles/ContactForm.css';


function Contact(props) {
  let _firstName =null;
  let _lastName =null;
  let _email = null;
  let _subject = null;
  let _message = null;



  function resetForm() {
    _firstName.value = '',
    _lastName.value = '',
    _email.value = '',
    _subject.value = '',
    _message.value = '';
  }

  // function validateFormFields() {
  //   (_firstName.value == null || '') ? 
  // }

  async function handleContactFormSubmission(event){  
    event.preventDefault();
    // validateFormFields();
    const statusCode = await uploadMessage(_firstName.value, _lastName.value, _email.value, _subject.value, _message.value);
    (statusCode === 204) ? props.showModal('Your message has been successfully sent. Thanks for reaching out!') : props.showModal('Something went, please try again later.');
    resetForm();
  }

  return (
    <div className='contactForm_Wrapper'>
      <div className='contactForm_Header'>
        <p className='contactForm_Title' data-cy='viewName'>
          Contact</p>
        <p className='contactForm_Subtitle'>For all inquiries large or small - please use the form below.</p>
      </div>
      <div className='contactForm_FormWrapper'>
        <form className='contactForm_Style' onSubmit={handleContactFormSubmission}>

          <label className='contactForm_Label' data-cy='firstName_Label'>First name<span className='required'>(required)</span></label>
          <input
            data-cy='firstName_Input'
            className='contactForm_Input'
            type='text'
            id='firstName'
            ref={(input) => {
              _firstName = input;
            }}/>

          <label className='contactForm_Label' data-cy='lastName_Label'>Last name<span className='required'>(required)</span></label>
          <input
            data-cy='lastName_Input'
            className='contactForm_Input'
            type='text'
            id='lastName'
            ref={(input) => {
              _lastName = input;
            }}/>


          <label  className='contactForm_Label' data-cy='email_Label'>Email<span className='required'>(required)</span></label>
          <input
            data-cy='email_Input'
            className='contactForm_Input'
            type='text'
            id='email'
            ref={(input) => {
              _email = input;
            }}/>


          <label className='contactForm_Label' data-cy='subject_Label'>Subject<span className='required'>(required)</span></label>
          <input
            data-cy='subject_Input'
            className='contactForm_Input'
            type='text'
            id='subject'
            ref={(input) => {
              _subject = input;
            }}/>


          <label  className='contactForm_Label' data-cy='message_Label'>Message<span className='required'>(required)</span></label>
          <textarea
            data-cy='message_input'
            type='text'
            id='message'
            ref={(textarea) => {
              _message = textarea;
            }}/>

          <button type='submit' className='contactForm_Button' data-cy='btn-submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

Contact.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.func,
};

export default connect()(Contact);
