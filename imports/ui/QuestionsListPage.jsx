import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Questions } from '../api/questions';
import QuestionItem from './QuestionItemComponent';
import QuestionForm from './QuestionFormComponent';
import Loading from './LoadingComponent';
import Footer from './FooterComponent';

const questionsSubscription = Meteor.subscribe('questions');
const propTypes = {
  user: PropTypes.object,
  solvedQuestions: PropTypes.array,
  openQuestions: PropTypes.array,
  handleLike: PropTypes.func,
  handleSolve: PropTypes.func,
  renderSolvedQuestions: PropTypes.func,
  renderQuestions: PropTypes.func,
  renderLoading: PropTypes.func,
  renderList: PropTypes.func
};

const params = () => ({
  user: Meteor.user(),
  openQuestions: Questions.find({ solvedAt: null }, { sort: { likes: -1 } }).fetch(),
  solvedQuestions: Questions.find({ solvedAt: { $ne: null } }, { sort: { likes: -1 } }).fetch(),
  users: Meteor.users.find().fetch(),
  loading: !questionsSubscription.ready()
});


class QuestionsListPage extends Component {
  componentDidMount() {
    if (!this.props.user) {
      browserHistory.push('/login');
    }
  }

  componentDidUpdate() {
    if (!this.props.user) {
      browserHistory.push('/login');
    }
  }

  handleLike(questionId) {
    Meteor.call('questions.like', questionId);
  }

  handleSolve(questionId) {
    Meteor.call('questions.solve', questionId);
  }

  renderSolvedQuestions() {
    return this.props.solvedQuestions.map((question) => (
      <QuestionItem
        key={question._id}
        question={question}
        handleLike={this.handleLike} handleSolve={this.handleSolve}
      />
    ));
  }

  renderQuestions() {
    return this.props.openQuestions.map((question) => (
      <QuestionItem
        user={this.props.users.find((user) => (user._id == question.userId))}
        key={question._id}
        question={question}
        handleLike={this.handleLike}
        handleSolve={this.handleSolve}
      />
    ));
  }

  renderSolvedQuestions() {
    return this.props.solvedQuestions.map((question) => (
      <QuestionItem
        user={this.props.users.find((user) => (user._id == question.userId))}
        key={question._id} question={question}
        handleLike={this.handleLike}
        handleSolve={this.handleSolve}
      />
    ));
  }

  renderLoading() {
    return (
      <Loading />
    );
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
            <QuestionForm
              placeholderName="Add a question ..."
              repository="questions.create"
              formName="new-question"
            />
           {this.renderList()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

QuestionsListPage.propTypes = propTypes;

export default QuestionsListPage;
export default createContainer(params, QuestionsListPage);
