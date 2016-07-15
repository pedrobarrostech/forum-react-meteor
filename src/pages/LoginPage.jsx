import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';
import LoginForm from './LoginFormComponent';

const propTypes = {
  user: PropTypes.object
};

const params = () => ({
  user: Meteor.user()
});

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

LoginPage.propTypes = propTypes;

export default LoginPage;
export default createContainer(params, LoginPage);
