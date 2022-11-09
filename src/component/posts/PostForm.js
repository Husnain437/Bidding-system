import React from "react";
import { Field, reduxForm, touch } from "redux-form";
import { Container } from "@mui/material";
import UploadButton from "../uploadButton/UploadButton";
import Countdown from "../Countdown/Countdown";
import Imgupload from "../Imgupload";
import { Input } from 'antd';

const { TextArea } = Input;
class PostForm extends React.Component {
  state = {
    imgUrl: '',
    
  }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  uploading = (imgUrl) => {
    this.setState({ imgUrl })
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues, this.state.imgUrl);

  }

  render() {
    return (
      <div className="postcreate font-link  ">

        <Container>
          <div className="main">
            <div className="heading"><h1>Post your Product</h1></div>
            <hr />
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error"
            >
              <Field name="title" component={this.renderInput} label="Enter Title" />
              <hr />
              <Field
                
                name="description"
                component={this.renderInput}
                label="Enter Description"
              />
              {/* <TextArea rows={4}
              name="description"
              component={this.renderInput}
              label="Enter Description"/> */}
              <hr />
              <Field
                name="price"
                component={this.renderInput}
                label="Enter Starting Price"
              />
              <hr />

              {/* <UploadButton 
              name="image"
              component={this.renderInput}
              label="image"
            /> */}
              <Imgupload url={(imgUrl) => this.uploading(imgUrl)}
              />
              <hr />
              <Field
                name="location"
                component={this.renderInput}
                label="Location"
              />
              <hr />

              <button className="ui button primary">Submit</button>
            </form>

          </div>
        </Container>

      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  if (!formValues.price) {
    errors.price = 'You must enter starting Price';
  }
  if (!formValues.image) {
    errors.image = 'You must enter a description';
  }
  if (!formValues.location) {
    errors.location = 'You must enter Location';
  }
  return errors;
};

export default reduxForm({
  form: 'postEdit',
  validate
})(PostForm);

