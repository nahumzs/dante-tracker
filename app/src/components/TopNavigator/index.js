import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './TopNavigator.style.css';

export default class TopNavigator extends Component {
  render() {
    return (
      <div className="dante-top-navigator__container">
        <NavLink
          className="dante-top-navigator__link"
          tabIndex="0"
          key={1}
          exact
          to="/"
          activeClassName="dante-top-navigator__link--active"
        >
          ⏱ Tracker
        </NavLink>
        <NavLink
          className="dante-top-navigator__link"
          tabIndex="0" key={2}
          to="/logs"
          activeClassName="dante-top-navigator__link--active"
        >
          ⚡️ Logs
        </NavLink>
      </div>
    )


  }
}
