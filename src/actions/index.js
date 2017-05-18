import axios from 'axios';

export const FETCH_POSTS = 'fecth_posts';
export const CREATE_POST = 'create_post';
//the example from http://reduxblog.herokuapp.com/
const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
//self define key
const API_KEY = `?key=victor335882`;
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type:FETCH_POSTS,
    payload:request
  };
}

export function createPost(values) {
  //provide the url in first argument and
  //the second is the object or data we want to
  //save to the api
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

  return {
    type:CREATE_POST,
    payload: request
  }
}
