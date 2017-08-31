import React, { Component } from 'react'
import { Link } from 'react-router'

import './index.css'

export default class List extends Component {

  render(){
    const { title, content } = this.props;
    const url = `/detail/${encodeURIComponent(title)}/${encodeURIComponent(content)}`;
    return (
      <li>
        <Link to={url}>{title}</Link>
      </li>
    )
  }
}