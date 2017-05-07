import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//BrowserRouter interactive with the history of browser and design what to do
//Route is a react component we can use in anyother react components
//it's give the configuation that if the url like this then show me the component
import { BrowserRouter, Route} from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

class Hello extends React.Component {
  render() {return <div> Hello! </div>}
}
class GoodBye extends React.Component {
  render() {return <div>GoodBye</div>}
}

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        {
          //if user go to the Route of hello,
          // we show the component of Hello
        }
        <Route path="/hello" component={Hello}/>
        <Route path="/goodbye" component={GoodBye}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
