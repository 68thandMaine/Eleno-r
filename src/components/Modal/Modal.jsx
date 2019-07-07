import React from 'react';
import PropTypes from 'prop-types';
// Stylesheet
import './Modal.css';

const modal = (props) => {
  return (
    <div className='modal-mask' data-cy='modal'>
      <div className='modal-wrapper'>
        <div className='modal-container'>
          <div className='modal-body'>
            <div>{props.children}</div>
            <button className='btn-cancel' onClick={props.close}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

modal.propTypes = {
  close: PropTypes.func.isRequired
};

export default modal;