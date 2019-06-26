import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import MainPage from './Portfolio/MainPage';
import Admin from './Admin/Admin';
import APIControl from './Admin/Search/APIControl';
import NotFound from './ErrorPages/NotFound';
import * as actions from './../actions';
import PropTypes from 'prop-types';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
    const {watchFirebaseGalleryRef, watchFirebaseContactCreatorRef, watchFirebaseProfileRef } = actions;
    this.dispatch(watchFirebaseContactCreatorRef());
    this.dispatch(watchFirebaseGalleryRef());
    this.dispatch(watchFirebaseProfileRef());
  }




  render(){
    const wrapperStyles= {
    // border: 'solid 3px green',
      display: 'block',
    // padding: '0 5.5% 0 0',
    };
    const pageStyles= {
      display: 'inline-block',
      height: '100%',
      width: '100%',
      marginTop: '20px'
    };
    return (
      <div style={wrapperStyles}>
        <div style={pageStyles}>
          <Switch>
            <Route exact path ='/' component={MainPage} />
            <Route path ='/Admin' render={(props)=><Admin currentRouterPath={props.location.pathname} />} />
            <Route path ='/Eleno-r' component ={APIControl} />
            <Route path ='*' component={NotFound} />
          </Switch> 
        </div>
      </div>
    );
  }
}

App.propTypes = {
  gallery: PropTypes.object,
  dispatch: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    masterProfile: state.Profile,
    gallery: state.galleryByCategory
  };
};

export default withRouter(connect(mapStateToProps)(App));
