import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class PostsShow extends Component {
  //automatically call the componentDidMount, once the component was render to the DOM
  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }
  render() {
    const {post} =this.props;
    //because the the PostsShow component will be render before
    //the componentDidMount do fetchPost()
    //so th posts[ownProps.match.params.id] is undefine in mapStateToProps
    //therefor the {post} here is undefine
    //So we need to prevent errors by this if statement
    if (!post){
      return <div>Loading...</div>;
    }
    //posts[this.props.match.params.id];
    //shows the post we want to show
    //this.props === ownProps
    return(
      <div>
        <h3>{post.title}</h3>
        <h6>Categories:{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

//use mapStateToPeops to select a pease of state like {posts}
//by convention, we use ownProps
//ownProps is the props object that is headed going to
//our class PostsShoe component
//and mapStateToProps will pass all {props} into ownProps
function mapStateToProps({posts}, ownProps){
  //return big list of {posts} in ownProps;
  //always return only single one component
  return {post:posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchPost})(PostsShow);
