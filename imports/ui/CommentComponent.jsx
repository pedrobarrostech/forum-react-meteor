import React, { Component, PropTypes } from 'react';

const propTypes = {
  text: PropTypes.string.isRequired
};

class CommentComponent extends Component {
  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}

CommentComponent.propTypes = propTypes;

export default CommentComponent;
