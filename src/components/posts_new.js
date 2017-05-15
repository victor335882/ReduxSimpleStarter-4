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
          label111="Tags"
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

export default reduxForm({
  form: 'PostNewForm'
})(PostNew);
