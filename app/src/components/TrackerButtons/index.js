import React, { Component } from 'react';
import glamorous from 'glamorous';
import tokens from '../../tokens';

const TrackerButtons = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const Button = glamorous.button({
  fontFamily: tokens.font.family.primary,
  fontSize: tokens.font.size.small,
  padding: `${tokens.space}px`,
  background: '#FBFBFB',
  border: '1px solid #DDD',
  borderLeft: '0',
  cursor: 'pointer',
  ':focus ': {
    outline: `${tokens.focus.outline}`,
  },  
  ':first-child': {
    borderLeft: '1px solid #DDD',
    borderTopLeftRadius: `${tokens.space/2}px`,
    borderBottomLeftRadius: `${tokens.space/2}px`
  },
  ':last-child': {
    borderTopRightRadius: `${tokens.space/2}px`,
    borderBottomRightRadius: `${tokens.space/2}px`
  },
  ':active': {
    background: '#F60',
    color: '#FFF'
  },
  '[data-reset]': {
    background: "#FFF",
    color: "#F60",
  },
  '[data-reset]:active': {
    background: "#F60",
    color: "#FFF",
  },
});

export default class extends Component {
  onTimeSelected(value) {
    return this.props.onTimeSelected(value)
  }

  render() {
    return (
      <TrackerButtons>
        <Button onClick={()=> { this.onTimeSelected(5) }}>5 min</Button>
        <Button onClick={()=> {this.onTimeSelected(15) }}>15 min</Button>
        <Button onClick={()=> {this.onTimeSelected(30) }}>30 min</Button>
        <Button onClick={()=> {this.onTimeSelected(60) }}>1 hr</Button>
        <Button onClick={()=> {this.onTimeSelected(240) }}>½ day</Button>
        <Button onClick={()=> {this.onTimeSelected(480) }}>1 day</Button>
        <Button data-reset='reset' onClick={()=> {this.onTimeSelected(-1) }}>Reset</Button>
      </TrackerButtons>
    )
  }
}
