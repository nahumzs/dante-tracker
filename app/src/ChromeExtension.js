/*global chrome */
import React, { Component } from 'react';

const host = `ChromeExtension.js`;

export default class ChromeExtension extends Component {
  state = {
    message: '💅 getting ready to connect',
  }

  componentDidMount() {
    // how to communicate popup && Background
    // https://stackoverflow.com/questions/13546778/how-to-communicate-between-popup-js-and-background-js-in-chrome-extension
    if (chrome && chrome.extension) {
      const port = chrome.extension.connect({
        name: "Sample Communication"
      });

      port.postMessage(`from: ${host} ⚡️ to background`);

      port.onMessage.addListener(function(message) {
        console.log(`💁‍ ${host}:`, message);
        this.setState({ message });
      });

      return;
    }

    this.setState({ message: '🙅‍ connection with extension not available' });
  }

  render() {
    const App = this.props.app;
    return (
      <div>
        <App message={this.state.message} />
      </div>
    )
  }
}
