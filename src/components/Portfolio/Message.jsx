import React from 'react';
import propTypes from 'prop-types';

const SuccessMessage = (props) => {

  return (
    <div>
      {props.modalMessage}
    </div>
  );
};

SuccessMessage.propTypes = {
  modalMessage: propTypes.string.isRequired,
}
export default SuccessMessage;