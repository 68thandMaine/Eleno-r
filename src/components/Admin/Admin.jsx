import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdminSideNav from './AdminSideNav';
import LandingPage from './AdminLandingPage';
import Inbox from './Inbox/Inbox';
import ProfileFormControl from './ProfileForms/ProfileFormControl';
import ContentFormControl from './ContentForms/ContentFormControl';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewOnPage: 'ProfileControls'
    };
    this.handleChangingViewToProfileControls = this.handleChangingViewToProfileControls.bind(this),
    this.handleChangingViewToContentControls = this.handleChangingViewToContentControls.bind(this),
    this.handleChangingViewToInbox = this.handleChangingViewToInbox.bind(this);
  }
  handleChangingViewToProfileControls() {
    this.setState({viewOnPage: 'ProfileControls'});
  }
  handleChangingViewToInbox() {
    this.setState({viewOnPage: 'Inbox'});
  }
  handleChangingViewToContentControls() {
    this.setState({viewOnPage: 'ContentControls'});
  }
  render() {
    const wrapperStyles = {
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
      width: '90%',
      margin: '0 50px 0 250px',
      position: 'relative',
    };

    return (
      <div style={wrapperStyles}>
        <div style={menuStyles}>
          <AdminSideNav 
            onViewProfileControls = {this.handleChangingViewToProfileControls}
            onViewInbox = {this.handleChangingViewToInbox}
            onViewContentControls = {this.handleChangingViewToContentControls}
          /> 
        </div>
        <div style={contentStyles}>
          {{
            Landing: <LandingPage />,
            ProfileControls: <ProfileFormControl currentRouterPath={this.props.currentRouterPath} />,
            Inbox: <Inbox />,
            ContentControls: <ContentFormControl />,
          }[this.state.viewOnPage]}
        </div>
      </div>
    );
  }
}


Admin.propTypes = {
  currentRouterPath: PropTypes.string.isRequired
}

export default connect()(Admin);