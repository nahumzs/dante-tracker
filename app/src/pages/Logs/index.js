import React, { Component } from 'react';
import TrackerSources from 'sources/trackers';
import TrackersList from 'components/TrackersList';

import {
  PageContainer,
} from 'pages/Logs/Logs.styles.js';

export default class Logs extends Component {
  state = {
    trackers: null,
  }


  componentDidMount() {
    TrackerSources.getAll().then(({ payload }) => {
      this.setState({ trackers: payload });
    });
  }

  render() {
    return (
      <PageContainer>
        <TrackersList trackers={this.state.trackers} />
      </PageContainer>
    )
  }
}
