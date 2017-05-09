import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

//when we think about make network request inside our action creator
//we need to install axios to make actual request
//and install react-promise to handle the asynchronous nature of the request itself
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      //If the URL is "/posts/new" then only shows up {PostsNew}
      //If the URL is "/" that will show up {PostsNew} and {PostsIndex}
        <Switch>
          <Route path="/posts/new" component={PostsNew}/>
          <Route path="/" component={PostsIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
