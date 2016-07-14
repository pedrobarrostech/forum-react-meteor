import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

const propTypes = {
  handleLogout: PropTypes.func,
  renderLogout: PropTypes.func,
  user: PropTypes.object
};

const params = () => ({
  user: Meteor.user()
});

class HeaderComponent extends Component {
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

HeaderComponent.propTypes = propTypes;

export default HeaderComponent;
export default createContainer(params, HeaderComponent);
