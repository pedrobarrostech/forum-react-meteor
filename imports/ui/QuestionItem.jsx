import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class QuestionItem extends Component {

  handleLike(event) {
    event.preventDefault();
    this.props.handleLike(this.props.question._id);
  }

  handleSolve(event) {
    event.preventDefault();
    this.props.handleSolve(this.props.question._id);
  }

  renderSolveButton(){
    if(this.props.question.solvedAt != null){
      return (
        <div>
          Solved
        </div>
      )
    }
    return (
      <a href="#" className="btn btn-link" onClick={this.handleSolve.bind(this)}>
        <i className="material-icons">done</i>
      </a>
    )
  }

  render() {
    return (
      <li className="list-group-item">
        <Link to={"/" + this.props.question._id}>
          {this.props.question.text}
        </Link>
        <div className="actions">
          {this.props.question.likes || 0}
          <Link to="#" className="btn btn-link" onClick={this.handleLike.bind(this)}>
            <i className="material-icons">thumb_up</i>
          </Link>
          {this.renderSolveButton()}
        </div>
      </li>
    );
  }
}

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired,
};
