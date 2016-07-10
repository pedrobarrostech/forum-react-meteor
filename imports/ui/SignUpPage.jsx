import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import SignUpForm from './SignUpFormComponent.jsx'

export default class SignUpPage extends Component {

  componentDidUpdate() {
    if (this.props.user) {
      browserHistory.push("/");
    }
  }
  componentDidMount() {
    if (this.props.user) {
      browserHistory.push("/");
    }
  }

  render() {
    return (
      <SignUpForm />
    );
  }
}

export default createContainer(
({ params, location }) => {
  return {
    user: Meteor.user(),
  };
}, SignUpPage);
