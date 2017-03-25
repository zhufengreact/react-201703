import React, { Component } from 'react'
import { Link, IndexLink, browserHistory } from 'react-router'

import NavLink from './NavLink'
import './index.css'


class App extends Component {

  render(){
    return (
      <div className="main">
        <div className="children">
          { this.props.children }
        </div>
        <ul className="tab">
          <li className="tab-item">
            <IndexLink to="/" activeClassName="tab-item-act" > 首页 </IndexLink>
          </li>
          <li className="tab-item">
            <NavLink url="/message" linkName="消息" />
          </li>
        </ul>
      </div>
    )
  }
}


export default App
