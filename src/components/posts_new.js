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
        {
          //connect the name of <Field/> to our error fonction's properties
        }
        {field.meta.error}
      </div>
    )

  }
  onSubmit(values) {
    //this === component
    console.log(values);
  }

  render() {
    //handleSubmit is a proporty that will be passing to
    //component on beheave as redux-form
    const {handleSubmit}=this.props;

    return(

        //redux-form handle the states, values and validations of our form
        //It not handle something like posting the data to backend serce and save it

        //onSubmit will run in the beginning when the <form> is run
        //when we submit the form,handleSubmit take the function,onSubmit, we defined.
        //and if the validation id pass and every thing ok
        //it will pass the value to the function we define outside the component

        //we define this.onSubmit.bind(this) because
        //we use this.onSubmit as a callback function
        //it will be exacute in different context outside the component
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
    errors.categories = 'Enter some categories';
  }
  if (!values.content){
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
