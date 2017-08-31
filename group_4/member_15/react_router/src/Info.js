import React, { Component } from 'react';
import './App.css';


class Info extends Component {
  render() {
    const { title, content } = this.props.params;
    return (
      <div className="info">
        <h1>{title}</h1>
        <article>
          {content}
        </article>
      </div>
    );
  }
}

export default Info;
