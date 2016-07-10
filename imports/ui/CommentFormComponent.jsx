import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Questions } from '../api/questions.js';

export default class CommentForm extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call("questions.comment", text);
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    return (
        <div className="form-group">
          <form className={this.props.formName}
              onSubmit={this.handleSubmit.bind(this)} >
            <input
              className="form-control"
              type="text"
              ref="textInput"
              placeholder={this.props.placeholderName}
            />
          </form>
        </div>
    );
  }
}
