import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';

import { createContainer } from 'meteor/react-meteor-data';
import { Questions } from '../api/questions.js';
import QuestionItem from './QuestionItem.jsx';
import QuestionForm from './QuestionForm.jsx';
import Loading from './Loading.jsx';
import Footer from './Footer.jsx';

class QuestionsList extends Component {

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
      <Loading />
    )
  }

  renderList() {
    if (this.props.loading) {
      return this.renderLoading();
    }
    return (
      <div>
        <h5>Open Questions</h5>
        <table className="centered">
          <thead>
            <tr>
                <th data-field="id">Name</th>
                <th data-field="name">Likes</th>
                <th data-field="price">Solved?</th>
            </tr>
          </thead>
          <tbody>
          {this.renderQuestions()}
          </tbody>
        </table>

        <h5>Closed Questions</h5>
        <table className="centered">
          <thead>
            <tr>
                <th data-field="id">Name</th>
                <th data-field="name">Likes</th>
                <th data-field="price">Solved?</th>
            </tr>
          </thead>
          <tbody>
          {this.renderSolvedQuestions()}
          </tbody>
        </table>

      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <h1 className="header center orange-text">Questions?</h1>
            <QuestionForm placeholderName="Add a question ..."
              repository="questions.create" formName="new-question"/>
           {this.renderList()}
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
