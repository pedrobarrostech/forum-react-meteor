import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import SignUpForm from './SignUpFormComponent'

const propTypes = {
  user: PropTypes.object
};

const params = () => ({
  user: Meteor.user()
});

class SignUpPage extends Component {

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
      <SignUpForm />
    );
  }
}

SignUpPage.propTypes = propTypes;

export default SignUpPage;
export default createContainer(params, SignUpPage);
