import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
const logger = createLogger();
import allReducers from '../reducers/index.jsx';
import * as bookActions from '../actions/tasks.jsx';
    
export let store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

