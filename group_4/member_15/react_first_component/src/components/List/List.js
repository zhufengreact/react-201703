import React, {Component, Children} from "react"

import ListHandler from './ListHandler'
import ListProfile from './ListProfile'

import './list.css'


const data = [
  {
    id: 1,
    content: 'zhufeng',
    bgColor: 'red'
  },
  {
    id: 2,
    content: 'react',
    bgColor: 'blue'
  },
  {
    id: 3,
    content: 'component',
    bgColor: 'green'
  }
]


class List extends Component {
  constructor(){
      super();
      this.state = {
        data
      }

  }

  update = (id, content, bgColor) => {

    let data = this.state.data.map((item) => {
      if(item.id === id){
        item.content = content;
        item.bgColor = bgColor;
      }
      return item;
    })
    this.setState({
      data
    })
  }

  del = (id) => {
    console.log(id);
    let data = this.state.data.filter((item) => {
      if(item.id !== id){
        console.log(item);
        return item;
      }
    })

    this.setState({
      data
    })
  }

  add = () => {
    let data = this.state.data.map(item => item);
    data.push({
      id: id ++,
      content: '',
      bgColor: 'blue',
      type: 'edit'
    })
    this.setState({
      data
    })
  }

  render(){

      let list = this.state.data.map((item,index) => {
          return <ListProfile id={item.id} bgColor={item.bgColor} content={item.content} type={item.type} update = {this.update} del ={this.del}/>
      });

    return (
      <ul>
        {list}
      </ul>
    )
  }
}


export default List
