import React from 'react';
import './../../styles.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadMessage } from '../../actions/messageActions';
import SuccessMessage from './Message';

function Contact(props) {
  let _firstName =null;
  let _lastName =null;
  let _email = null;
  let _subject = null;
  let _message = null;

  const wrapperStyles ={
    display: 'block',
    alignItems: 'center',
    position: 'relative',
    height: 'auto',
    width: '100%',
    top: '-12%',
    marginRight: '20%',
  };
  const headingStyles = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: '10px'
  };
  const titleStyle = {
    fontFamily: 'danielBold',
    fontSize: '40px',
    display: 'inline-block',
    marginBottom: '0'
  };
  const subTitleStyles = {
    display: 'inline-block',
    bottom: '20px'
  };
  const formWrapper = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxHeight: 'auto',
  };
  const formStyles = {
    display: 'inline-flex',
    width: '500px',
    flexDirection: 'column',
    flexWrap: 'nowrap'
  };
  const labelStyles ={
    marginTop: '2%',
    float:'none',
    display: 'inline-block',
    fontWeight:'bold',
    fontFamily: 'Montserrat, sans-serif'
  };

  const inputTagStyles = {
    background: 'rgba(0,0,0,0.08)',
    borderRadius: 'unset',
    boxSizing: 'border-box',
    color: 'rgba(0,0,0,0.70)',
    lineHeight: '1.235',
    fontSize: '22px',
    padding: '12px 12px'
  };
  const buttonStyles={
    backgroundColor: '#000000',
    border: 'none',
    borderRadius: 'unset',
    boxSizing: 'border-box',
    color: '#ffffff',
    height: '30px',
    width: '100px',
    marginTop: '2%',
  };

  function resetForm() {
    _firstName.value = '',
    _lastName.value = '',
    _email.value = '',
    _subject.value = '',
    _message.value = '';
  }

  async function handleContactingCreator(event){  
    event.preventDefault();
    const statusCode = await uploadMessage(_firstName.value, _lastName.value, _email.value, _subject.value, _message.value);
    (statusCode === 204) ? props.showModal('success') : props.showModal('failure');
    resetForm();
  }

  return (
    <div style={wrapperStyles}>
      <div style={headingStyles}>
        <p style={titleStyle}>
          Contact</p>
        <p style={subTitleStyles}>For all inquiries large or small - please use the form below.</p>
      </div>
      <div style={formWrapper}>
        <form style={formStyles} onSubmit={handleContactingCreator}>

          <label style={labelStyles}>First name<span className='required'>(required)</span></label>
          <input
            style={inputTagStyles}
            type='text'
            id='firstName'
            ref={(input) => {
              _firstName = input;
            }}/>

          <label style={labelStyles}>Last name<span className='required'>(required)</span></label>
          <input
            style={inputTagStyles}
            type='text'
            id='lastName'
            ref={(input) => {
              _lastName = input;
            }}/>


          <label  style={labelStyles}>Email<span className='required'>(required)</span></label>
          <input
            style={inputTagStyles}
            type='text'
            id='email'
            ref={(input) => {
              _email = input;
            }}/>


          <label style={labelStyles}>Subject</label>
          <input
            style={inputTagStyles}
            type='text'
            id='subject'
            ref={(input) => {
              _subject = input;
            }}/>


          <label  style={labelStyles}>Message</label>
          <textarea
            type='text'
            id='message'
            ref={(textarea) => {
              _message = textarea;
            }}/>

          <button type='submit' style={buttonStyles}>Submit</button>
          <SuccessMessage />
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
