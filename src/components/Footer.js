import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            © 2017 Viktoria Sh.
            <a className="grey-text text-lighten-4 right" href="#!">Home</a>
            </div>
          </div>
        </footer>
    )
  }
}
