import React, { Component } from 'react';
export default class Comment extends Component {

  render() {
    return (
      <p key={this.props.key}>{this.props.text}</p>
    );
  }
}
