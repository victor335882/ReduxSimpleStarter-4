import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route} from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/posts_index';

//when we think about make network request inside our action creator
//we need to install axios to make actual request
//and install react-promise to handle the asynchronous nature of the request itself
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
       <Route path="/" component={PostsIndex}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
