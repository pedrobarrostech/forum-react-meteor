import React, { Component } from 'react';
export default class Footer extends Component {

  render() {
    return (
      <footer className="page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Forum</h5>
                <p className="grey-text text-lighten-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec varius quam erat, tincidunt euismod nisl placerat nec.
                  In in ultrices ante, ut tempor est. Donec efficitur dolor in
                  felis sollicitudin, eu interdum odio venenatis.
                </p>


              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Menu</h5>
                <ul>
                  <li><a className="white-text" href="#!">Login</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="orange-text text-lighten-3" href="http://pedroaugust8.com">Pedro Barros</a>
            </div>
          </div>
      </footer>
    );
  }
}
