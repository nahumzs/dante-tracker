import React, { Component } from 'react';
import glamorous from 'glamorous';
import PrettyLabel from '../PrettyLabel';
import tokens from '../../tokens';

const Row = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${tokens.space}px`,
});

const LabelContainer = glamorous.div({
  flexBasis: `${tokens.space*7}px`,
  textAlign: `right`,
  borderRight: `${tokens.gutter}px solid transparent`
});

const ContentContainer = glamorous.div({
  display: 'block',
  width: '100%',
})

export default class extends Component {
  render() {
    return (
      <Row>
        <LabelContainer>
          <PrettyLabel>{this.props.label}</PrettyLabel>
        </LabelContainer>
        <ContentContainer>
          { this.props.children }
        </ContentContainer>
      </Row>
    );
  }
}
