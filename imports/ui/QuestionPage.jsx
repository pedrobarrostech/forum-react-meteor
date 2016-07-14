import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Questions, QuestionComments } from '../api/questions';
import Loading from './LoadingComponent';
import Comment from './CommentComponent';

const propTypes = {
  question: PropTypes.object,
  renderComments: PropTypes.func,
  handleSubmit: PropTypes.func
};

const paramsContainer = ({ params }) => {
  const questionsSubscription = Meteor.subscribe("question", params.questionId);
  return {
    loading: !questionsSubscription.ready(),
    question: Questions.findOne({ _id: params.questionId }),
    comments: QuestionComments.find({ questionId: params.questionId },
      { sort: { createdAt: 1 } }).fetch()
  };
}

class QuestionPage extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call("questions.comment", this.props.question._id, text);
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderComments() {
    return this.props.comments.map((comment) => (
      <Comment
        key={comment._id}
        text={comment.text}
      />
    ));
  }

  render() {
    if (this.props.loading) {
      return (<Loading />);
    }
    return (
      <div>
        <div className="container">
          <h4>{this.props.question.text}</h4>
          <p>{moment(this.props.question.createdAt).fromNow()}</p>
          <br />
          <h5>Comments</h5>
          <div className="form-group">
            {this.renderComments()}
            <form className="new-comment" onSubmit={this.handleSubmit.bind(this)} >
              <input
                className="form-control"
                type="text"
                ref="textInput"
                placeholder="Adicione um comentário"
                required
              />
              <button className="btn-floating btn-large waves-effect waves-light red" type="submit">
                <i className="material-icons">add</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

QuestionPage.propTypes = propTypes;

export default createContainer(paramsContainer, QuestionPage);
