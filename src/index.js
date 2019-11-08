import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from './store/reducers';
import thunkMiddleware from 'redux-thunk';

import App from './App';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
