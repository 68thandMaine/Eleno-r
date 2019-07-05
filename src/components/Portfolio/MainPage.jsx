import React from 'react';
import { connect } from 'react-redux';
import { returnToGallery } from '../../actions';
import PropTypes from 'prop-types';
// Components
import SideNav from './SideNav';
import Home from './Home';
import AboutMe from './AboutMe';
import GalleryControl from '../../views/GalleryControl';
import ContactForm from './ContactForm';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewOnPage: 'ContactForm'
    };
    this.handleChangingViewToHome = this.handleChangingViewToHome.bind(this),
    this.handleChangingViewToBio = this.handleChangingViewToBio.bind(this),
    this.handleChangingViewToGallery = this.handleChangingViewToGallery.bind(this),
    this.handleChangingviewToContactForm = this.handleChangingviewToContactForm.bind(this);
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
            ContactForm: <ContactForm />
          }[this.state.viewOnPage]}
        </div>
        <Modal />
      </div>
    );

  }
}

MainPage.propTypes = {
  gallery: PropTypes.object,
  dispatch: PropTypes.func,
};

export default connect()(MainPage);
