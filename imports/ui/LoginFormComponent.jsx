import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const propTypes = {
  handleSubmit: PropTypes.func
};

class LoginFormComponent extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.passwordInput).value.trim();

    Meteor.loginWithPassword(email, password, function(err) {
      if (err) {
        alert('Login failed!!!');
      }
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="well">
            <h2>Login</h2>
            <div className="form-group">
              <form className="login" onSubmit={this.handleSubmit.bind(this)} >
                <input
                  className="form-control"
                  type="text"
                  ref="emailInput"
                  placeholder="email@example.com"
                />
                <input
                  className="form-control"
                  type="password"
                  ref="passwordInput"
                  placeholder="********"
                />
                <button type="submit" className="btn">Login</button>
              </form>
              <br />
              <Link to="/signup">Create an account</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginFormComponent.propTypes = propTypes;

export default LoginFormComponent;
