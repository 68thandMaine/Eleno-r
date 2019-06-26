import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreatorForm from './CreatorForm';
import ControlButtons from './ControlButtons';
import EditCreatorProfileControl from './EditCreatorProfileControl';

class ProfileFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewOnPage: 'ControlButtons'
    }
    this.handleShowingNewProfileForm = this.handleShowingNewProfileForm.bind(this);
    this.handleShowingEditProfileForm = this.handleShowingEditProfileForm.bind(this);
  }
  handleShowingNewProfileForm(){
    this.setState({viewOnPage: 'NewProfile'})
  }
  handleShowingEditProfileForm(){
    this.setState({viewOnPage: 'EditProfile'})
  }

  render() {
    const wrapperStyles = {
      height: '100%',
      width: '100%',
      display: 'flex',
    };
    const linkStyles = {
      margin: '0',
      padding: '0',
      width: '120%'
    };

    return (
      <div style={wrapperStyles}>
        <div style={linkStyles}>
          {{
            ControlButtons: <ControlButtons onCreateNewProfile={this.handleShowingNewProfileForm} onEditProfile={this.handleShowingEditProfileForm} />,
            NewProfile: <CreatorForm />,
            EditProfile: <EditCreatorProfileControl currentRouterPath={this.props.currentRouterPath} />
          }[this.state.viewOnPage]}
        </div>
      </div>
    )
  }
}

ProfileFormControl.propTypes = {
  currentRouterPath: PropTypes.string.isRequired,
}

export default connect()(ProfileFormControl);