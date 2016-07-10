import React, { Component } from 'react';

export default class CommentComponent extends Component {
  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}
