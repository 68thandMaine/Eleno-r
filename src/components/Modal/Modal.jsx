import React from 'react';

// Stylesheet
import './Modal.css';

const modal = (props) => {
  return (
    <div className='modal-wrapper'>
      <div className='modal-header'>
        <h3>Modal Header</h3>
        <span className='close-modal-btn' onClick={props.close}>x</span>
      </div>
      <div className='modal-body'>
        <p>{props.children}</p>
      </div>
      <div className = 'modal-footer'>
        <button className='btn-cancel' onClick={props.close}>Close</button>
      </div>
    </div>
  );
};

export default modal;