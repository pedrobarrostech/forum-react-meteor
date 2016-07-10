import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

export default class HeaderComponent extends Component {
  handleLogout(event) {
    event.preventDefault();
    Accounts.logout();
  }

  renderLogout() {
    if (this.props.user) {
      return (
        <a href="#" className="right white-text" onClick={this.handleLogout.bind(this)}>Logout</a>
      );
    }
    return (
      <Link to="/login" className="right white-text">Login</Link>
    );
  }

  render() {
    return (
      <nav className="purple darken-2" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo center">Forum</a>
          {this.renderLogout()}
        </div>
      </nav>
    );
  }
}

export default createContainer(
  ({ params, location }) => {
    return {
      user: Meteor.user(),
    };
  }, HeaderComponent);
