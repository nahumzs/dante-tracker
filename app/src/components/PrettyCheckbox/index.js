import React, { Component } from 'react';
import glamorous from 'glamorous';
import tokens from '../../tokens';

const PrettyCheckboxContainer = glamorous.div(
  {
    display: 'inline-block',
    padding: `${tokens.space/2}px`,
    position: 'relative',
    margin: `${tokens.space/2}px`,
    borderRadius: `${tokens.space}px`,
  },
  ({ checked = false }) => ({
    'border': checked ? '1px solid #F60' : '1px solid #DDD'
  }),
);

const checkbox = {
  // eslint-disable-next-line
  content: '\"\"',
  width: `${tokens.space}px`,
  height: `${tokens.space}px`,
  position: 'absolute',
  left: `${tokens.space}px`,
  top: `${tokens.space}px`,
  borderRadius: '50%',
}

const checkboxChecked = { background: '#F60', ...checkbox };
const checkboxUnChecked = { background: '#DDD', ...checkbox };

const PrettyCheckbox = glamorous.input(
  {
    opacity: 1,
    height: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    pointerEvents: 'none',
    ':focus ': {
      outline: `${tokens.focus.outline}`,
    }
  },
  ({ checked = false }) => ({
		'::before': checked ? checkboxChecked : checkboxUnChecked
  })
);

const PrettyLabel = glamorous.label({
  fontSize: tokens.font.size.small,
  fontFamily: tokens.font.family.primary,
  display: 'block',
  color: '#333',
  cursor: 'pointer',
  position: 'relative',
  textIndent: `${tokens.space*2}px`,
});

export default class extends Component {
  onClickCheckbox = event => {
    this.props.onClick(event);
  }

  onKeyDownCheckbox = event => {
    this.props.onKeyPress(event);
  }

  render() {
    const {id, label, checked} = this.props;
    return (
      <PrettyCheckboxContainer checked={checked}>
        <PrettyCheckbox type="checkbox" onKeyDown={this.onKeyDownCheckbox} value={label} checked={checked} id={id} onClick={this.onClickCheckbox} />
        <PrettyLabel htmlFor={id}> { label }</PrettyLabel>
      </PrettyCheckboxContainer>
    )
  }
}
