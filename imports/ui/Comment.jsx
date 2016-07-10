import React, { Component } from 'react';
export default class Comment extends Component {

  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}
