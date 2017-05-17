import React,{Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostNew extends Component {

  renderField(field){

    //field.meta.touched nest to touched
    const { meta : { touched , error } } = field;
    const className = `form-group ${ touched && error ? 'has-danger' : ''}` ;
    return (
      <div className={className}>
        <label>{field.label111}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className = 'text-help'>
          {touched ? error : ''}
        </div>
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
