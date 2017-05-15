import React,{Component} from 'react';
//reduxRorm is some kinds of connect between our Component
//and the redux store with the key "from"
import {Field, reduxFrom} from 'redux-from';

class PostNew extends Component {
  render() {
    return(
      <form>
        <Field
          name="title"
          component={}
        />
      </form>
    );
  }
}

//connect PostNew to the redux reducer store
//redusFrom will merge all states of each form
//into a single piese form store
//the important thing is to make sure the string we assign
//to the key form is unique
//to prevent merge with other component's form
export default reduxFrom({
  form: 'PostNewForm'
})(PostNew);
