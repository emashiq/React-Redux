import {
  FETCH_POSTS, FETCH_POSTS_SUCCESS
} from '../actions/tasks.jsx'

export default function (state =null, action) {
  let error;
  switch (action.type) {

    case FETCH_POSTS:// start fetching posts and set loading = true
      return action.payload.data;
    case FETCH_POSTS_SUCCESS:// return list of posts and make loading = false
      return  action.payload;
    default:
      return state;
  }
}