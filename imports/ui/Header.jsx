import React, { Component } from 'react';
export default class Header extends Component {

  render() {
    return (
        <nav className="purple darken-2" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Forum</a></div>
        </nav>
    );
  }
}
