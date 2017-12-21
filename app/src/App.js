import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import 'fonts.css';
import 'reset.css';
import ChromeExtension from 'ChromeExtension';
import Tracker from 'pages/Tracker/';
import Logs from 'pages/Logs/';
import TopNavigator from 'components/TopNavigator';
import { AppContainer } from 'App.styles.js';

class App extends Component {
  render() {
    console.log('App', this.props.message);
    return (
      <BrowserRouter>
        <AppContainer>
          <TopNavigator />
          <Route exact path="/" component={Tracker}/>
          <Route exact path="/index.html" component={Tracker}/>
          <Route exact path="/logs" component={Logs}/>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

class AppChromeExtension extends Component {
  render() {
    return (
      <ChromeExtension app={App}>
        <App />
      </ChromeExtension>
    )
  }
}

export default AppChromeExtension;
