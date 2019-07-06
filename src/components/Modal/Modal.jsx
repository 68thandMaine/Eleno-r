import React from 'react';
import PropTypes from 'prop-types';
// Stylesheet
import './Modal.css';

const modal = (props) => {
  return (
    <div className='modal-wrapper'>
      <div className='modal-header'>
        <h3>Modal Header</h3>
      </div>
      <div className='modal-body'>
        <div>{props.children}</div>
      </div>
      <div className = 'modal-footer'>
        <button className='btn-cancel' onClick={props.close}>Close</button>
      </div>
    </div>
  );
};

modal.propTypes = {
  close: PropTypes.func.isRequired
}

export default modal;