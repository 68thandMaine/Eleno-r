import React from 'react';
import PropTypes from 'prop-types';
import './Styles/ControlButtons.css';

function ControlButtons(props) {

  return (
    <div className='wrapperStyles'>
      <div className='linkStyles'>
        <button className="controlButtons" onClick={() => props.onCreateNewProfile()}>New Profile</button>
      </div>  
      <div className='linkStyles'>
        <button className='controlButtons' onClick={() => props.onEditProfile()}>Edit Profile</button>
      </div>
    </div>
  );

}

ControlButtons.propTypes = {
  onCreateNewProfile: PropTypes.func.isRequired,
  onEditProfile: PropTypes.func.isRequired
};

export default ControlButtons;