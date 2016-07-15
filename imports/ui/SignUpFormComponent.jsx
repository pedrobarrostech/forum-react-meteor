import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const propTypes = {
  handleSubmit: PropTypes.func
};

class SignUpFormComponent extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();
    const name = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.passwordInput).value.trim();
    const profile = {
      name
    };

    Accounts.createUser({
      email,
      password,
      profile
    }, function(err) {
      console.log("Registrei");
    })

  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="well">
            <div className="form-group">
              <h2>Create an account</h2>
              <form className="login" onSubmit={this.handleSubmit.bind(this)} >
                <input
                  className="form-control"
                  type="text"
                  ref="emailInput"
                  placeholder="email@example.com"
                  required
                />
                <input
                  className="form-control"
                  type="text"
                  ref="nameInput"
                  placeholder="Your Name"
                  required
                />
                <input
                  className="form-control"
                  type="password"
                  ref="passwordInput"
                  placeholder="*************"
                  required
                />
                <button type="submit" className="btn">Register</button>
              </form>
              <br />
              <Link to="/login">Already have an account?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUpFormComponent.propTypes = propTypes;

export default SignUpFormComponent;
