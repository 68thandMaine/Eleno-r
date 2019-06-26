import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import './../../styles.css';
import { Link } from 'react-router-dom';

function AdminSideNav(props) {

  const styles = {
    wrapperStyles: {
      width: '100%',
      padding: '50px 0 0',
      flex: '0 5 auto'
    },
    nameStyles: {
      float: 'left',
      top: '5%',
      display: 'block',
      maxWidth: '360px',
      textAlign: 'center',
      left: '-30px',
      lineHeight: '2rem',
      color: '#00000'
    },
    menuStyles: {
      bottom: '0',
      margin: '0',
      padding: '60px 0 25px',
      maxHeight: 'calc(100%-166px)'
    },
    linkStyles: {
      fontFamily: 'daniel',
      color: '#4C4C4C',
      fontSize: '26px',
      display: 'block',
      padding: '0 0 20px',
      ':hover': {
        transition: 'ease-in 2sec',
        color: '#820a0a',
        textShadow: '-1px 1px 69px #820a0a'
      }
    },
    elenor: {
      color: 'black'
    }
  };

  return (
    <div style={styles.wrapperStyles}>
      <div style={styles.nameStyles}>
        <h3>Welcome <em>Name Here</em></h3>
      </div>
      <ul style={styles.menuStyles}>
        <li key='1' style={styles.linkStyles} onClick={props.onViewProfileControls}>Profile Information</li>
        <li key='2' style={[styles.linkStyles]} onClick={props.onViewInbox}>Inbox</li>
        <li key='3' style={[styles.linkStyles]} onClick={props.onViewContentControls}>Content</li>
        <li key='4' style={[styles.linkStyles]}><Link style={styles.elenor} to='/Eleno-r'><span>Elenor</span></Link></li>
      </ul>
    </div>
  );
}


AdminSideNav.propTypes = {
  onViewProfileControls: PropTypes.func.isRequired,
  onViewInbox: PropTypes.func.isRequired,
  onViewContentControls: PropTypes.func.isRequired
};

export default Radium(AdminSideNav);