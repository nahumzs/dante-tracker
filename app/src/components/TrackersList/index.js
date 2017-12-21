import React, { Component } from 'react';
import { Div } from 'glamorous';
import tokens from 'tokens';

export default class TrackersList extends Component {
  renderLoading() {
    return <Div
      width="100%"
      padding={`${tokens.space}px`}
      textAlign="center"
      display="block"
    >
      😸 Loading the list wait a second.
    </Div>;
  }

  renderTrackersList() {
    const { trackers } = this.props;
    return Object.keys(trackers).map(key => {
      return (
        <Div
          key={key}
          width="100%"
          display="flex"
          borderBottom="1px solid #DDD"
          padding={`${tokens.space*1.5}px ${tokens.space/2}px `}
        >
          {trackers[key].task}
        </Div>
      );
    });
  }

  render() {
    const { trackers } = this.props;
    console.log('trackers', trackers);
    return (
      <Div
        width="100%"
        display="block"
        paddingBottom={`${tokens.space*2}px`}
        fontFamily={tokens.font.family.primary}
      >
        { trackers ? this.renderTrackersList() : this.renderLoading() }
      </Div>
    )
  }
}
