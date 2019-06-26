import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import './styles.css';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>, document.getElementById('react-app-root'));
};

render(App);

/*eslint-disable */
if (module.hot) {
    module
        .hot
        .accept('./components/App', () => {
            render(App)
        })
}/*eslint-enable */
