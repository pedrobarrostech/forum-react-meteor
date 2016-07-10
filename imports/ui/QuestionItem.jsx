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
        <a className="btn disabled">
          <i className="material-icons">done</i>
        </a>
      )
    }
    return (
      <a href="#" className="btn" onClick={this.handleSolve.bind(this)}>
        <i className="material-icons">done</i>
      </a>
    )
  }

  render() {
    return (
        <tr>
          <td>
            <Link to={"/" + this.props.question._id}>
              {this.props.question.text}
            </Link>
          </td>
          <td>
            <Link to="#" className="btn" onClick={this.handleLike.bind(this)}>
              {this.props.question.likes || 0} <i className="material-icons">thumb_up</i>
            </Link>
          </td>
          <td>
            {this.renderSolveButton()}
          </td>
        </tr>
    );
  }
}

QuestionItem.propTypes = {
  question: PropTypes.object.isRequired,
};
