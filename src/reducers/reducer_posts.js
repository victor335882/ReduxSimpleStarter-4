import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST,DELETE_POST} from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      //return a new state object without the id of action.payload
      //which we just delete
      //so we can delete the post from native server in the sametime
      return _.omit(state, action.payload);
    case FETCH_POST:
      return {...state, [action.payload.data.id]:action.payload.data};
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data,'id');
    default:
      return state;
  }
}
