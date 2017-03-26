import React, {Component} from 'react'
import {Link} from 'react-router'


import './App.css'

class LinkList extends Component{
  render(){
    const { title, content } = this.props,
          url = `/info/${title}/${content}`
    return(
      <li>
        <Link to={url}>{ title }</Link>
      </li>
    )
  }
}



export default LinkList
