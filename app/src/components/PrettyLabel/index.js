import React, { Component } from 'react';
import glamorous from 'glamorous';
import tokens from '../../tokens';

const PrettyLabel = glamorous.label({
  fontSize: tokens.font.size.default,
  fontFamily: tokens.font.family.primary,
  color: '#333',
});

export default class extends Component {
  render() {
    return (
      <PrettyLabel>
        { this.props.children }
      </PrettyLabel>
    )
  }
}
