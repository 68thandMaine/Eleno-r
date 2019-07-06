import React from 'react';
import { connect } from 'react-redux';
import { returnToGallery } from '../../actions';
import PropTypes from 'prop-types';
// Components
import AboutMe from './AboutMe';
import ContactForm from './ContactForm';
import GalleryControl from '../../views/GalleryControl';
import Home from './Home';
import Message from './Message';
import Modal from '../Modal/Modal';
import SideNav from './SideNav';
// Stylesheet
import './Styles/MainPage.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewOnPage: 'ContactForm',
      showModal: false
    };
    this.handleChangingViewToHome = this.handleChangingViewToHome.bind(this),
    this.handleChangingViewToBio = this.handleChangingViewToBio.bind(this),
    this.handleChangingViewToGallery = this.handleChangingViewToGallery.bind(this),
    this.handleChangingviewToContactForm = this.handleChangingviewToContactForm.bind(this),
    this.handleShowingModal = this.handleShowingModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChangingViewToHome() {
    this.setState({ viewOnPage: 'Home' });
    this.props.dispatch(returnToGallery());
  }
  handleChangingViewToBio() {
    this.setState({ viewOnPage: 'Bio' });
    this.props.dispatch(returnToGallery());
  }
  handleChangingViewToGallery() {
    this.setState({ viewOnPage: 'Gallery' });
    this.props.dispatch(returnToGallery());
  }
  handleChangingviewToContactForm() {
    this.setState({ viewOnPage: 'ContactForm' });
    this.props.dispatch(returnToGallery());
  }
  handleShowingModal(message) {
    console.log('show that modal baby woo!', message);
    this.setState({ showModal: true });
  }
  closeModal(){
    this.handleChangingViewToHome();
    this.setState({showModal: false });
  }
  
  render() {

    return (
      <div>
        <div className={this.state.showModal ? 'containerStyles blur' : 'containerStyles'}>
          <div className='menuStyles'>
            <SideNav
              onViewHomePage={this.handleChangingViewToHome}
              onViewBio={this.handleChangingViewToBio}
              onViewGallery={this.handleChangingViewToGallery}
              onViewContactForm={this.handleChangingviewToContactForm} />
          </div>
          <div className='contentStyles'>
            {{
            Home: <Home />,
            // Bio: <AboutMe />,
            // Gallery: <GalleryControl galleryByCategory={this.props.gallery}/>,
              ContactForm: <ContactForm showModal={this.handleShowingModal} />
            }[this.state.viewOnPage]}
          </div>
        </div>
        { this.state.showModal ? <Modal close={this.closeModal}> <Message></Message> </Modal> : null }
      </div>
    );

  }
}

MainPage.propTypes = {
  gallery: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect()(MainPage);
