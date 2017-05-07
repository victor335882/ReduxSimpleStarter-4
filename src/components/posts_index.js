import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  //here we don't have event to trigger the action
  //if this component is called,
  //we want to reach out our api
  //and immediately fetch our post, fetchPosts.

  //so we use react life cycle methods,
  //it's a function in react component class
  //which will be automatically called by react

  //The componentDidMount() method of child components
  //is invoked before that of parent components.
  componentDidMount() {
    this.props.fetchPosts();
  }

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
