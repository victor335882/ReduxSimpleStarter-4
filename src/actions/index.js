import axios from 'axios';

export const FETCH_POSTS = 'fecth_posts';

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
