import axios from "axios";
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
  } from './postTypes'

  export const fetchPosts = () => {
    return (dispatch :any) => {
      dispatch(fetchPostsRequest())
      axios
        .get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
        .then(response => {
          // response.data is the posts          
          const posts = response.data[0].table_menu_list
          dispatch(fetchPostsSuccess(posts))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchPostsFailure(error.message))
        })
    }
  }
  
  export const fetchPostsRequest = () => {
    return {
      type: FETCH_POSTS_REQUEST
    }
  }
  
  export const fetchPostsSuccess = (posts:any) => {
    return {
      type: FETCH_POSTS_SUCCESS,
      payload: posts
    }
  }
  
  export const fetchPostsFailure = (error:any) => {
    return {
      type: FETCH_POSTS_FAILURE,
      payload: error
    }
  }