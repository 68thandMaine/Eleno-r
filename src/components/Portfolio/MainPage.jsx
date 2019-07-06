import React from 'react';
import { connect } from 'react-redux';
import { returnToGallery } from '../../actions';
import PropTypes from 'prop-types';
// Components
import AboutMe from './AboutMe';
import ContactForm from './ContactForm';
import GalleryControl from '../../views/GalleryControl';
import Home from './Home';
import Modal from '../Modal/Modal';
import SideNav from './SideNav';

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
  handleShowingModal() {
    console.log('show that modal baby woo!');
    this.setState({ showModal: true });
  }
  render() {

    const containerStyles = {
      display: 'flex',
      flexDirection: 'row',
      width: 'auto'
    };
    const menuStyles = {
      position: 'fixed',
      alignSelf: 'flex',
      width: '50px',
      left: '5%',
      paddingRight: '25px'
    };
    const contentStyles = {
      display: 'flex',
      width: '75%',
      margin: '0 100px 0 200px',
      paddingLeft: '6%',
      paddingRight: '5%',
      position: 'relative',
      top: '63px',
    };

    return (
      <div style={containerStyles}>
        <div style={menuStyles}>
          <SideNav
            onViewHomePage={this.handleChangingViewToHome}
            onViewBio={this.handleChangingViewToBio}
            onViewGallery={this.handleChangingViewToGallery}
            onViewContactForm={this.handleChangingviewToContactForm} />
        </div>
        <div style={contentStyles}>
          {{
            Home: <Home />,
            Bio: <AboutMe />,
            Gallery: <GalleryControl galleryByCategory={this.props.gallery}/>,
            ContactForm: <ContactForm showModal={this.handleShowingModal} />
          }[this.state.viewOnPage]}
        <Modal />
        </div>
      </div>
    );

  }
}

MainPage.propTypes = {
  gallery: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect()(MainPage);
