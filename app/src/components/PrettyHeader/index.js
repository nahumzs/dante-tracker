import React, { Component } from 'react';
import glamorous from 'glamorous';
import tokens from '../../tokens';

const PrettyHeader = glamorous.h1({
  fontSize: tokens.font.size.default,
  fontFamily: tokens.font.family.primary,
  color: '#111',
  textAlign: 'left',
  display: 'block',
  width: '100%',
});

export default class extends Component {
  render() {
    return (
      <PrettyHeader>
        { this.props.children }
      </PrettyHeader>
    )
  }
}
