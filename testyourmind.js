import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Main from './pages/main.jsx';
import Test from './pages/test.jsx';
import Welcome from './pages/welcome.jsx';
import Result from './pages/result.jsx';
import About from './pages/about.jsx';
import Err from './pages/error.jsx';

class TestYourMind extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Welcome} />
        <Route path='/main' component={Main} />
        <Route path='/test' component={Test} />
        <Route path='/result' component={Result} />
        <Route path='/about' component={About} />
        <Route path='/*' component={Err} />
      </Router>
    );
  }
}



export default TestYourMind;
