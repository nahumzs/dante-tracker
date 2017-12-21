import React, { Component } from 'react';
import glamorous from 'glamorous';
import tokens from '../../tokens';

const PrettyInput = glamorous.input({
  border: '1px solid #DDD',
  borderRadius: `${tokens.space}px`,
  color: '#666',
  fontFamily: tokens.font.family.primary,
  fontSize: tokens.font.size.default,
  lineHeight: '1.6',
  padding: `${tokens.space/2}px ${tokens.space}px`,
  width: '100%',
  ':focus ': {
    outline: `${tokens.focus.outline}`,
  }
});

export default class extends Component {
  render() {
    return <PrettyInput value={this.props.value} {...this.props} />
  }
}
