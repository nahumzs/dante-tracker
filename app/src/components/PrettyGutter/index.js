import React, { Component } from 'react';
import glamorous from 'glamorous';
import tokens from '../../tokens';

const PrettyGutter = glamorous.div({
  padding: `${tokens.space}`,
  display: 'block',
});

export default class extends Component {
  render() {
    return (
      <PrettyGutter {...this.props}>
        { this.props.children }
      </PrettyGutter>
    )
  }
}
