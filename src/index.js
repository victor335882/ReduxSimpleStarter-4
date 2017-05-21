import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//when we think about make network request inside our action creator
//we need to install axios to make actual request
//and install react-promise to handle the asynchronous nature of the request itself
import ReduxPromise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>

        <Switch>
        {
          //if we put "/posts/:id" at first
          //"/posts/new" will link to {PostsShow}
          //just the same with "/posts/:id"
        }

          <Route path="/ReduxSimpleStarter-4/posts/new" component={PostsNew}/>
          <Route path="/ReduxSimpleStarter-4/posts/:id" component={PostsShow}/>
          <Route path="/ReduxSimpleStarter-4/" component={PostsIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
