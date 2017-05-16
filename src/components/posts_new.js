import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostNew extends Component {
  //each attribite in <Field/> tage will be
  // pass in the variable field
  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label111}</label>
        <input
          className="form-control"
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
          label111="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label111="Categories"
          name="tags"
          component={this.renderField}
        />
        <Field
          label111="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

//Add a help function to validate the input of form
//whenever the user submit it
function validate(values) {
  //console.log(values)->{title:'afasd', categories:'afdf', content:'afdas'}
  const errors ={};

  //Validate the inputs from 'value'
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories){
    errors.cotegories = 'Enter some categories';
  }
  if (!values.categories){
    errors.content = 'Enter some content please';
  }
  
  //if errors is empty, the form is fine to submit
  //If error has *any* properties, redux form assumes form is invalid
  return errors;
}

//Passing our validate function to our ReduxForm as a action calles
//validate, it will be called automatically whenever the user submit the form
export default reduxForm({
  validate,
  form: 'PostNewForm'
})(PostNew);
