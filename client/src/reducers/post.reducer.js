import {
  POST_LOADING,
  GET_POSTS,
  GET_POST,
  CLEAR_POSTS,
  CLEAR_POST,
  SET_CURRENT_POST_TYPE
} from '../actions/actionTypes';
const initialState = {
  post: null,
  posts: null,
  type: null,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case CLEAR_POST:
      return {
        ...state,
        post: null
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: {}
      };
    case SET_CURRENT_POST_TYPE:
      return {
        ...state,
        type: payload
      };

    default:
      return state;
  }
};
