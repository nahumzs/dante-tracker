import React, { Component } from 'react';
import { bool, oneOf } from 'prop-types';
import glamorous from 'glamorous';
import PrettyToastStyle from './PrettyToast.style';

export default class PrettyToast extends Component {
  static propTypes = {
    open: bool,
    type: oneOf(['warning', 'success', 'error', 'info']),
  }

  static defaultProps = {
    open: false,
    type: 'error',
    color: '#FFF',
  }

  expireShowTime = () => {
    setTimeout(() => this.props.onShowTimeExpire(), 2500);
  }

  render() {
    const { type, open, children } = this.props;
    if (!open) {
      return null;
    }

    this.expireShowTime();
    return (
      <PrettyToastStyle {...this.props}>
        {children}
      </PrettyToastStyle>
    )
  }
}
