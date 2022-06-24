import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import myFirstReducer from './store/reducer'
import mySaga from './store/sagas'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({myFirstReducer})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware) )
sagaMiddleware.run(mySaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);