import React from 'react';
import PropTypes from 'prop-types';
import FormOptions from './FormOptions';
import CreatorForm from './CreatorForm';
import NewContentForm from './NewContentForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class FormControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      viewOnPage: 'Options',
    };
    this.handleShowingProfileForm=this.handleShowingProfileForm.bind(this);
    this.handleShowingPortfolioForm=this.handleShowingPortfolioForm.bind(this);
  }

  handleShowingProfileForm(){
    this.setState({viewOnPage: 'Profile'});
  }
  handleShowingPortfolioForm(){
    this.setState({viewOnPage: 'Portfolio'});
  }



  render(){
    const wrapperStyles = {
      // border: 'solid 1px black',
      display: 'block',
      background: '#EDF0F0',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: 'auto',
      width: '100%'
    };
    const optionsStyles ={
      paddingTop: '3%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    };

    const formButtonStyles = {
      display: 'relative',
      border: '1px solid black',
      borderRadius: '50%',
      height: '160px',
      width: '160px',
    };
    const centeredStyles = {
      display: 'inline-block',
      textAlign: 'center',
      padding: '5px',
      position: 'relative',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };
    const formContainerStyles = {
      // border: 'solid 4px yellow',
      display: 'grid',
      padding: '40px, 20px, 20px, 45px',
      position: 'relative',
      justifyContent: 'center',
      height: '100%',
    };


    return (
      <div style={wrapperStyles}>
        <div style={optionsStyles}>
          <div style={formButtonStyles} onClick={()=>{this.handleShowingProfileForm();}}>
            <span style={centeredStyles}>Click me to edit / upload a profile content</span>
          </div>
          <div style={formButtonStyles}>
            <Link style={centeredStyles} to='Eleno-r'>Back to Admin</Link>
          </div>
          <div style={formButtonStyles} onClick={()=>{this.handleShowingPortfolioForm();}}>
            <span style={centeredStyles}>Click me to edit / upload a portfolio content</span>
          </div>
        </div>
        <div style={formContainerStyles}>
          {{
            Options: <FormOptions />,
            Profile: <CreatorForm onNewProfileUpload={this.props.onNewProfileUpload} />,
            Portfolio: <NewContentForm onNewContentUpload={this.props.onNewContentUpload} />,
          }[this.state.viewOnPage]}

        </div>
      </div>
    );

  }
}

FormControl.propTypes={
  onNewContentUpload: PropTypes.func,
  onNewProfileUpload: PropTypes.func,
};


export default connect()(FormControl);
