import React, { Component } from 'react';
import glamorous from 'glamorous';
import tokens from '../../tokens';

const PrettyCheckboxInput = glamorous.input({
  border: '1px solid #DDD',
  borderRadius: `${tokens.space}px`,
  color: '#333',
  display: 'inline-block',
  fontFamily: tokens.font.family.primary,
  fontSize: tokens.font.size.small,
  padding: `${tokens.space/2}px`,
  position: 'relative',
  width: '100%',
  textIndent: `${tokens.space*2}px`,
  ':focus ': {
    outline: `${tokens.focus.outline}`,
  }
});

const Container = glamorous.div({
  width: '100%',
  padding: `${tokens.space/2}px`,
  position: 'relative',
  display: 'inline-block',
  '::before': {
    // eslint-disable-next-line
    content: '\"\"',
    width: `${tokens.space}px`,
    height: `${tokens.space}px`,
    position: 'absolute',
    left: `${tokens.space+4}px`,
    top: `${tokens.space+5}px`,
    borderRadius: '50%',
    background: "#DDD",
  },
});

export default class extends Component {
  render() {
    const {value, placeholder, onKeyPress, onChange } = this.props;
    return (
      <Container>
        <PrettyCheckboxInput
          value={value}
          placeholder={placeholder}
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
      </Container>
    );
  }
}
