import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  render () {
     return (
      <div>
        Posts Index
      </div>
    )
  }
}

//connect action with our components
//before trigger the action we need to set the
//default value null to prevent error
export default connect(null, {fetchPosts})(PostsIndex);
