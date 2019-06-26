import React from 'react';
import SearchResults from './SearchResults';
import {connect} from 'react-redux';

class APIControl extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    };
  }


  render(){
    
    const wrapperStyles = {
      border: 'solid 1px black',
      display: 'block'
    };
    return (
      <div style={wrapperStyles}>
                Check it out! Here is a page where you can search for different images using the Library of Congress database, the FLICKR database, and the Artsy database. Images should be royalty free...though I am not sure. Good luck and do not do anything too illegal.
        <SearchResults />
      </div>
    );
  }

}

export default connect()(APIControl);