import React, { Component } from 'react';

import 'fonts.css';
import 'reset.css';
import Tracker from 'pages/Tracker/';
import { AppContainer } from 'App.styles.js';


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Tracker />
      </AppContainer>
    );
  }
}

export default App;
