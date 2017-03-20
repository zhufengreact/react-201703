import React, { Component, Children } from "react";
import "./index.less";
import List from "../../components/List";

const data = [
    {
        id: 1,
        content: 'zhufeng',
        bgColor: 'red'
    },
    {
        id: 2,
        content: 'react',
        bgColor: "blue"
    },
    {
        id: 3,
        content: 'component',
        bgColor: 'green'
    }
]

let id = 4;

export default class App extends Component {
  
  constructor(){
    super();
    this.state = { 
      data
    }
  }

  update = (id,content,bgColor) =>{
    let data = this.state.data.map( item => {
      if (item.id === id) {
        item.content = content,
        item.bgColor = bgColor
      }
      return item;
    });
    this.setState({
      data
    });
  }

  del = (id) => {
    let data = this.state.data.filter( item => {
      if (item.id !== id) {
        return item;
      }
    });
    this.setState({
      data
    });
  }

  add = () => {
    let data = this.state.data.map( item => item);
    data.push({
      id: id ++,
      content: '',
      bgColor: 'red',
      type: 'edit'
    });
    this.setState({
      data
    });
  }

  render (){
    let lists = this.state.data.map( (item) => {
      return <List type={item.type} key={item.id} bgColor={item.bgColor} content={item.content} id={item.id} update={this.update} del={this.del}/>
    });
    return (
      <div>
        <ul>{lists}</ul>
        <button onClick={this.add}>新增</button>
      </div>
    );
  } 
}

