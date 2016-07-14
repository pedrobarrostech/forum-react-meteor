import React, { Component, PropTypes } from 'react';
import Header from './HeaderComponent';

const propTypes = {
  children: PropTypes.object.isRequired
};

class AppPage extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

AppPage.propTypes = propTypes;

export default AppPage;
