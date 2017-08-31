import React, { Component } from 'react';
import { IndexLink } from 'react-router'
import './App.css';

import NavLink from './NavLink'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="children">
            { this.props.children }
        </div>
        <ul className = "tab">
          <li className = "tab-item">
            <IndexLink to="/" activeClassName="tab-active">Home</IndexLink>
          </li>
          <li className = "tab-item">
            <NavLink linkName="Message" url="/message"></NavLink>
          </li>
        </ul>

      </div>
    );
  }
}

export default App;
