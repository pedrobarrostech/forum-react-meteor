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

class FooterComponent extends Component {
  handleLogout(event) {
    event.preventDefault();
    Accounts.logout();
  }

  renderLogout() {
    if (this.props.user) {
      return (
        <a href="#" className="white-text" onClick={this.handleLogout.bind(this)}>Logout</a>
      );
    }
    return (
      <Link className="white-text" to="/login">Login</Link>
    );
  }

  render() {
    return (
      <footer className="page-footer orange">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Forum</h5>
              <p className="grey-text text-lighten-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec varius quam erat, tincidunt euismod nisl placerat nec.
                In in ultrices ante, ut tempor est. Donec efficitur dolor in
                felis sollicitudin, eu interdum odio venenatis.
              </p>


            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Menu</h5>
              <ul>
                <li>{this.renderLogout()}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by <a className="orange-text text-lighten-3" href="http://pedroaugust8.com">Pedro Barros</a>
          </div>
        </div>
      </footer>
    );
  }
}

FooterComponent.propTypes = propTypes;

export default FooterComponent;
export default createContainer(params, FooterComponent);
