import { combineReducers } from 'redux';

//if we want to use redux from we need import this
//and add a key form equal to the value formReducer
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

//every thing we import as redux from will be store
//in form state
const rootReducer = combineReducers({
  posts:PostsReducer,
  form: formReducer
});

export default rootReducer;
