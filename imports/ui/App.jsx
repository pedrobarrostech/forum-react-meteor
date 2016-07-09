import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Questions } from '../api/questions.js';


import Question from './Question.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// App component - represents the whole app
export default class App extends Component {

  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Questions.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderQuestions() {
    return this.props.questions.map((question) => (
      <Question key={question._id} question={question} />
    ));
  }

  render() {
    return (
      <div>
        <Header />

        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br/><br/>
            <h1 className="header center orange-text">Questions?</h1>

            <div className="container">
              <div className="well">
                <div className="form-group">
                  <form className="new-question" onSubmit={this.handleSubmit.bind(this)} >
                    <input
                      className="form-control"
                      type="text"
                      ref="textInput"
                      placeholder="Adicione uma pergunta"
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="row center">
              <ul>
                {this.renderQuestions()}
              </ul>
            </div>
            <div className="row center">
              <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
            </div>
            <br/><br/>
          </div>
        </div>
        <Footer />
      </div>

    );
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    questions: Questions.find({}).fetch(),
  };
}, App);
