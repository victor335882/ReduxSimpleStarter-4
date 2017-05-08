import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    //it will show two console.log value on browser
    //first is componentDidMount()
    //second is mapStateToProps(state)
    console.log(this.props.posts);
     return (
      <div>
        Posts Index
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
