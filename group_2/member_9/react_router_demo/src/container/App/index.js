import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import './index.less'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
            {this.props.children}
        </div>
        <ul className="nav">
          <li>
            <IndexLink to="/" activeClassName="active">首页</IndexLink>
          </li>
          <li>
            <Link to="/messages" activeClassName="active">消息</Link>
          </li>
        </ul>
      </div>
    );
  }
}
