import {store} from './../index.jsx';
import * as bookActions from '../../actions/tasks.jsx';
export const FETCH_TASK = function(){
    console.log('working');
    store.dispatch(bookActions.fetchBooks());
}