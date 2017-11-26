import React from 'react';
import {IndexRoute, Route, Router, hashHistory} from 'react-router';
import App from './components/App.js';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';

export default(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path='/portfolio' component={Portfolio}/>
    <Route path='/contact' component={Contact}/>
  </Router>
);
