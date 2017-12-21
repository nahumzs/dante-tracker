import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'

import 'fonts.css';
import 'reset.css';
import Tracker from 'pages/Tracker/';
import Logs from 'pages/Logs/';
import { AppContainer } from 'App.styles.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <NavLink exact to="/">Tracker</NavLink>
          <NavLink to="/logs">Logs</NavLink>
          <Route exact path="/" component={Tracker}/>
          <Route exact path="/index.html" component={Tracker}/>
          <Route exact path="/logs" component={Logs}/>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;
