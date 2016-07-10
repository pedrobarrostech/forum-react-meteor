import React, { Component } from 'react';
import Header from './HeaderComponent.jsx';

// App component - represents the whole app
export default class AppPage extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
