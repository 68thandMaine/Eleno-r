import React from 'react';
import SideNav from './SideNav';
import Home from './Home';
import AboutMe from './AboutMe';
import GalleryControl from './GalleryControl';
import Contact from './Contact';
import { connect } from 'react-redux';
import { returnToGallery } from '../../actions';
import PropTypes from 'prop-types';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewOnPage: 'Home'
    };
    this.handleChangingViewToHome = this.handleChangingViewToHome.bind(this),
    this.handleChangingViewToBio = this.handleChangingViewToBio.bind(this),
    this.handleChangingViewToGallery = this.handleChangingViewToGallery.bind(this),
    this.handleChangingviewToContact = this.handleChangingviewToContact.bind(this);
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
  handleChangingviewToContact() {
    this.setState({ viewOnPage: 'Contact' });
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
            onViewContact={this.handleChangingviewToContact} />
        </div>
        <div style={contentStyles}>
          {{
            Home: <Home />,
            Bio: <AboutMe />,
            Gallery: <GalleryControl galleryByCategory={this.props.gallery}/>,
            Contact: <Contact />
          }[this.state.viewOnPage]}
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
