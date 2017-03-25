import React, { Component } from 'react'
import { Link } from 'react-router'

import './index.css'

export default class Detail extends Component {

  render(){
    const { title, content } = this.props.params;
    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    )
  }

}