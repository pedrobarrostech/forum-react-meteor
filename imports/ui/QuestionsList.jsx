import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';

import { createContainer } from 'meteor/react-meteor-data';
import { Questions } from '../api/questions.js';
import QuestionItem from './QuestionItem.jsx';
import Footer from './Footer.jsx';

class QuestionsList extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call("questions.create", text);
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  handleLike(questionId) {
    Meteor.call("questions.like", questionId);
  };

  handleSolve(questionId) {
    Meteor.call("questions.solve", questionId);
  };

  renderSolvedQuestions() {
    return this.props.solvedQuestions.map((question) => (
      <QuestionItem key={question._id} question={question} handleLike={this.handleLike} handleSolve={this.handleSolve} />
    ));
  };

  renderQuestions() {
    return this.props.openQuestions.map((question) => (
      <QuestionItem key={question._id} question={question} handleLike={this.handleLike} handleSolve={this.handleSolve} />
    ));
  }

  renderSolvedQuestions() {
    return this.props.solvedQuestions.map((question) => (
      <QuestionItem key={question._id} question={question} handleLike={this.handleLike} handleSolve={this.handleSolve} />
    ));
  }

  renderLoading() {
    return (
      <div>Carregando</div>
    )
  }

  renderList() {
    if (this.props.loading) {
      return this.renderLoading();
    }
    return (
      <div>
        <h3> Open Questions </h3>
        <ul className="list-group">
          {this.renderQuestions()}
        </ul>

        <h3> Closed Questions </h3>
        <ul className="list-group">
          {this.renderSolvedQuestions()}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
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
            { this.renderList()}

            <br/><br/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

QuestionsList.propTypes = {
  solvedQuestions: PropTypes.array.isRequired,
  openQuestions: PropTypes.array.isRequired

};


/*
export default class Container extends Component {
  render(){
    const questionsSubscriton = Meteor.subscribe("questions");
    data = {
      questions: Questions.find({},  {sort: {likes: -1 }}).fetch(),
      loading: !questionsSubscriton.ready()
    }

    return (
      <QuestionsList questions={data.questions} loading={data.loading} />
    )
  }
}


*/
export default createContainer(() => {
  const questionsSubscriton = Meteor.subscribe("questions");
  return {
    openQuestions: Questions.find({ solvedAt: null},  {sort: {likes: -1 }}).fetch(),
    solvedQuestions: Questions.find({},  {sort: {likes: -1 }}).fetch(),
    loading: !questionsSubscriton.ready()
  };
}, QuestionsList);
