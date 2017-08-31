import React, { Component } from 'react'
import { Link } from 'react-router'

import List from './List'
import './index.css'

const data = [
    {
        title: 'zhufeng',
        content: 'zhufeng react'
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

export default class Message extends Component {
  constructor(){
    super();
    this.state = { 
      data
    };
  }

  render(){
    const lists = this.state.data.map( (item,index) => {
      return <List title={item.title} key={index}  content={item.content} />
    });
    return (
      <div>
        <ul>
          {lists}
        </ul>
      </div>
    )
  }
}