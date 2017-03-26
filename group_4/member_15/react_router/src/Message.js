import React, {Component} from 'react'
import {Link} from 'react-router'

import NavLink from './NavLink'
import LinkList from './LinkList'


const data = [
    {
      title: 'zhufeng',
      content:'zhufeng react'
    },
    {
      title: 'react',
      content: 'npm install react --save-dev'
    },
    {
      title: 'react-router',
      content: 'npm install react-router@3.0.0 --save-dev'
    }
]


class Message extends Component{
  constructor(){
    super()
    this.state = {
      data
    }
  }
  render(){
    const lists = this.state.data.map( (item,index) => {
      return   <LinkList key={index} title={item.title} content={item.content} />
    })
    return(
      <ul>
        { lists }
      </ul>
    )
  }
}



export default Message
