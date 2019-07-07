import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uploadMessage } from '../../actions/messageActions';
// Stylesheets
import './../../styles.css';
import './Styles/ContactForm.css';


class ContactForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      invalidFirstNameInput: false,
      invalidLastNameInput: false,
      invalidEmailInput: false,
      invalidSubjectInput: false,
      invalidMessageInput: false,
      _firstName: '',
      _lastName : '',
      _email: '',
      _subject: '',
      _message: '',
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    
    this.handleContactFormSubmission = this.handleContactFormSubmission.bind(this);
    this.validateFormFields = this.validateFormFields.bind(this);
  }


  handleFirstNameChange(event) {
    this.setState({_firstName : event.target.value});
  }
  handleLastNameChange(event) {
    this.setState({_lastName : event.target.value});
  }
  handleEmailChange(event) {
    this.setState({_email : event.target.value});
  }
  handleSubjectChange(event){
    this.setState({_subject : event.target.value});
  }
  handleMessageChange(event) {
    this.setState({_message : event.target.value});
  }
  validateFormFields() {
    (this.state._firstName === '') ? this.setState({invalidFirstNameInput: true}) : this.setState({invalidFirstNameInput: false});
    (this.state._lastName === '') ? this.setState({invalidLastNameInput: true}) : this.setState({invalidLastNameInput: false});
    (this.state._email === '') ? this.setState({invalidEmailInput: true}) : this.setState({invalidEmailInput: false});
    (this.state._subject === '') ? this.setState({invalidSubjectInput: true}) : this.setState({invalidSubjectInput: false});
    (this.state._message === '') ? this.setState({invalidMessageInput: true}) : this.setState({invalidMessageInput: false});
    
    if (this.state._firstName != '' && this.state._lastName != '' && this.state._email != '' && this.state._subject != '' && this.state_message != '') {
      return true;
    }
  }

  async handleContactFormSubmission(event){  
    event.preventDefault();
    const validatedForm = this.validateFormFields();
    if (validatedForm) {
      const statusCode = await uploadMessage(this.state._firstName, this.state._lastName, this.state._email, this.state._subject, this.state._message);
      (statusCode === 204) ? this.props.showModal('Your message has been successfully sent. Thanks for reaching out!') : this.props.showModal('Something went, please try again later.');
      // resetForm();
    } 
  }
  render(){
    return (
      <div className='contactForm_Wrapper'>
        <div className='contactForm_Header'>
          <p className='contactForm_Title' data-cy='viewName'>
            Contact</p>
          <p className='contactForm_Subtitle'>For all inquiries large or small - please use the form below.</p>
        </div>
        <div className='contactForm_FormWrapper'>
          <form className='contactForm_Style' onSubmit={this.handleContactFormSubmission}>

            <label className='contactForm_Label' data-cy='firstName_Label'>First name<span className='required'>(required)</span></label>
            <input
              data-cy='firstName_Input'
              className={this.state.invalidFirstNameInput ? 'contactForm_Input required' : 'contactForm_Input'}
              type='text'
              id='firstName'
              value={this.state._firstName}
              onChange={this.handleFirstNameChange}
            />

            <label className='contactForm_Label' data-cy='lastName_Label'>Last name<span className='required'>(required)</span></label>
            <input
              data-cy='lastName_Input'
              className={this.state.invalidLastNameInput ? 'contactForm_Input required' : 'contactForm_Input'}
              type='text'
              id='lastName'
              value={this.state._lastName}
              onChange={this.handleLastNameChange}
            />


            <label  className='contactForm_Label' data-cy='email_Label'>Email<span className='required'>(required)</span></label>
            <input
              data-cy='email_Input'
              className={this.state.invalidEmailInput ? 'contactForm_Input required' : 'contactForm_Input'}
              type='text'
              id='email'
              value={this.state._email}
              onChange={this.handleEmailChange}
            />


            <label className='contactForm_Label' data-cy='subject_Label'>Subject<span className='required'>(required)</span></label>
            <input
              data-cy='subject_Input'
              className={this.state.invalidSubjectInput ? 'contactForm_Input required' : 'contactForm_Input'}
              type='text'
              id='subject'
              value={this.state._subject}
              onChange={this.handleSubjectChange}
            />


            <label  className='contactForm_Label' data-cy='message_Label'>Message<span className='required'>(required)</span></label>
            <textarea
              data-cy='message_Input'
              className={this.state.invalidMessageInput ? 'required' : ''}
              type='text'
              id='message'
              value={this.state._message}
              onChange={this.handleMessageChange}
            />

            <button type='submit' className='contactForm_Button' data-cy='btn-submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}


ContactForm.propTypes = {
  dispatch: PropTypes.func,
  showModal: PropTypes.func,
};

export default connect()(ContactForm);
