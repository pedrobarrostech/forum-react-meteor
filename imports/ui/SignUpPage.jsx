import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class SignUpPage extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call("questions.comment", this.props.question._id, text);
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  render() {
    if (this.props.loading) {
      return (<div>Carregando...</div>);
    }
    return (
      <div>
        <div className="container">
          <h4>Login</h4>

          <div className="form-group">
            <form className="new-comment" onSubmit={this.handleSubmit.bind(this)} >
              <input
                className="form-control"
                type="text"
                ref="emailInput"
                placeholder="Login"
              />

              <input
                className="form-control"
                type="password"
                ref="passwordInput"
                placeholder="********"
              />
              <button className="btn btn-default" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
