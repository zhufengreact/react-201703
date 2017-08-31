import React, { Component } from 'react'
import { Link } from 'react-router'

import './index.css'

export default class NavLink extends Component {
  render(){
    return <Link
      to={this.props.url}
      activeClassName="tab-item-act">
        {this.props.linkName}
      </Link>
  }
}
