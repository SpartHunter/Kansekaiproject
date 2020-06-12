import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/** Redux Initialisation imports **/
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from "./reducers";

/** Redux Initialisation state**/
const initialState = {};
const middleware = thunk;

// Redux devTools config:
// to active redux devtools add configReduxDevTool
// constante to store like this "const store = createStore(rootReducer, initialState, compose(applyMiddleware(middleware), configReduxDevTool));"
//const configReduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, initialState, compose(applyMiddleware(middleware)));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
