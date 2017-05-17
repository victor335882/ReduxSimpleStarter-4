import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostNew extends Component {

  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label111}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {
          // if the user is touched the input then
          //shows the error message of validations
          //otherwise show the empty string
        }
        {field.meta.touched ? field.meta.error : ''}
      </div>
    )

  }
  onSubmit(values) {

    console.log(values);
  }

  render() {
    const {handleSubmit}=this.props;

    return(
      <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label111="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label111="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label111="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors ={};
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories){
    errors.categories = 'Enter some categories';
  }
  if (!values.content){
    errors.content = 'Enter some content please';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(PostNew);
