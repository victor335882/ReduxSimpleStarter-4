import _ from 'lodash';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render () {
     return (
      <div>
        <h3>Post</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}
//whenever we want to update the application state from
//reducer, we need to use mapStateToPosts
function mapStateToProps(state) {
  return {posts:state.posts};
}

//if we didn't set mapStateToProps, we need write the form as below
//export default connect(null, {fetchPosts})(PostsIndex);
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
