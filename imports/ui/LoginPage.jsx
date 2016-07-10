import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';
import LoginForm from './LoginFormComponent';

class LoginPage extends Component {

  componentDidMount() {
    if (this.props.user) {
      browserHistory.push('/');
    }
  }

  componentDidUpdate() {
    if (this.props.user) {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <LoginForm />
    );
  }
}

export default createContainer(({ params, location }) => {
  return {
    user: Meteor.user(),
  };
}, LoginPage);
