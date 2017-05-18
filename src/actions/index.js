import axios from 'axios';

export const FETCH_POSTS = 'fecth_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'

const API_KEY = `?key=victor335882`;
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type:FETCH_POSTS,
    payload:request
  };
}

//add callback function
export function createPost(values, callback) {
  //automatically call the callback function after we post the data to the server
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback());

  return {
    type:CREATE_POST,
    payload: request
  }
}
