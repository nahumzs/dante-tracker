import React from 'react';
import glamorous from 'glamorous';
import tokens from '../../tokens';

// this should be Tokens
const red = "#D92726";
const yellow = "#FDAF17";
const green = "#61A465";
const purple = "#5161BB"

const backgroundToast = {
  warning: () => 'yellow',
  success: () => ({
    background: green,
  }),
  error: () => ({
    background: red,
  }),
  info: () => ({
    background: purple,
  }),
}

const customStyles = {
  warning: {
    background: yellow,
  },
  success: {
    background: green,
  },
  error: {
    background: red,
  },
  info: {
    background: purple,
  },
};

const Node = props => <div {...props} />
const PrettyToastGlamorous = glamorous(
  Node,
  {rootEl: 'div'}
)

const MyGlamorousComponent = PrettyToastGlamorous(({color, type}) => {
  return ({
    position: 'sticky',
    color, // haven't add tokens for colors
    background: customStyles[type].background,
    fontFamily: tokens.font.family.primary,
    fontSize: tokens.font.size.default,
    padding: `${tokens.space}px ${tokens.space * 2}px`,
    width: '100%',
    display: 'inline-block',
    borderRadius: `${tokens.space/2}px`,
    textAlign: 'center',
  });
});

export default MyGlamorousComponent;
