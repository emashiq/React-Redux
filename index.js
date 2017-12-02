import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import allReducers from './src/reducers/index.jsx';
import App from './src/app.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);
import * as bookActions from './src/actions/tasks.jsx';
store.dispatch(bookActions.fetchBooks());
ReactDOM.render(
    
    <Provider store={store}>
           <Router>
                <App />
            </Router>
    </Provider>
   
    ,
    document.getElementById('root')
);
