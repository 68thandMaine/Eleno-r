import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  return (
    <button className='buttonStyles' onClick={props.click} type={props.type}>{props.buttonText}</button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  click: PropTypes.func,
  type: PropTypes.string,
};

export default Button;