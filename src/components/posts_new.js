import React,{Component} from 'react';
//reduxRorm is some kinds of connect between our Component
//and the redux store with the key "from"
import {Field, reduxForm} from 'redux-form';

class PostNew extends Component {
  //the field contain some event handler to connect
  //renderTitleField with our field
  //...field.input contains :
  //onChange={field.input.onChange}
  //onFocus={field.input.onFocus}
  //onBlur={field.input.onBlur}
  renderTitleField(field){
    return (
      <div>
        <input
          type="text"
          {...field.input}
        />
      </div>
    )

  }

  render() {
    return(
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
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
export default reduxForm({
  form: 'PostNewForm'
})(PostNew);
