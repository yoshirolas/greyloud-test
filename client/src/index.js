import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import appReducer from './reducers/appReducer';
import './index.css';
import App from './containers/App';

import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter as Router, Route } from 'react-router-dom'


const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>, 
  document.getElementById('root')
);