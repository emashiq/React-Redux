import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import allReducers from './src/reducers/index.jsx';
import App from './src/app.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {store} from './src/store/index.jsx'
ReactDOM.render(
    
    <Provider store={store}>
           <Router>
                <App />
            </Router>
    </Provider>
   
    ,
    document.getElementById('root')
);
