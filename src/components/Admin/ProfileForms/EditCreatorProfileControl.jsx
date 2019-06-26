import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateProfile} from './../../../actions';
import EditCreatorProfile from './EditCreatorProfile';
import CurrentProfileInfo from './CurrentProfileInfo';
import './Styles/EditCreatorProfileControl.css';

class EditCreatorProfileControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
    
  }
  render() {
    return (
      <div className='mainContainer'>
        <EditCreatorProfile  currentRouterPath = {this.props.currentRouterPath} />
        <CurrentProfileInfo /> 
      </div>
    );
  }
}

EditCreatorProfileControl.propTyes = {
  currentRouterPath: PropTypes.string.isRequired,
}
export default EditCreatorProfileControl;