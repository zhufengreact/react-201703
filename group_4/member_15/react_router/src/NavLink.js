import React, {Component} from 'react'
import { Link } from 'react-router'

import './App.css'


class NavLink extends Component{


  render(){
    return(
      <Link to={ this.props.url } activeClassName='tab-active' >{ this.props.linkName }</Link>
    )
  }
}



export default NavLink
