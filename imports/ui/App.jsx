import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Header from './Header.jsx';

// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
