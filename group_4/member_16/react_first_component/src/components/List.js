import React, { Component, Children } from "react";
import "./List.css";
export default class List extends Component {
  constructor(){
    super();
    this.state = { 
      _type:'编辑',
      display0:'inline',
      display1:'none',
      inputName:'',
      selectColor:'red',
    }
  }
  componentWillMount(){
    console.log(this.props);
    let { type } = this.props;
    let _type;
    if ( type === 'edit' ) {
      this.changeType();
    } 

  }
  changeType = (e) => {
    let _type;
    let display0;
    let display1;
    let inputName;
    let selectColor;
    if ( this.state._type === '编辑' ){
      _type = '保存';
      display0 = 'none';
      display1 = 'inline';
      inputName = this.props.content;
      selectColor = this.props.bgColor;
    } else {
      _type = '编辑';
      display0 = 'inline';
      display1 = 'none';
      this.props.update(this.props.id,this.state.inputName,this.state.selectColor);
    }

    this.setState({
      _type,
      display0,
      display1,
      inputName,
      selectColor,
    });

  }

  changeColor = (e) => {
    this.setState({
      selectColor: e.target.value
    });
  }

  changeName = (e) => {
    this.setState({
      inputName: e.target.value
    });
  }

  del = (e) => {
    this.props.del(this.props.id);
  }

  render (){
    let { content, bgColor ,type } = this.props;
    let { display1, display0, inputName, selectColor } = this.state;
    return (
      <li className="li" style={{backgroundColor:bgColor}}>
        <span style={{display:display0}}>&nbsp; {content}</span>
        <input style={{display:display1}} value={inputName} type="text" onChange={this.changeName} />
        <select style={{display:display1}} value={selectColor} onChange={this.changeColor}><option value="red">red</option><option value="blue">blue</option><option value="green">green</option></select>
        <div className="button">
          <button onClick={this.changeType}>{this.state._type}</button>
          <button onClick={this.del}>删除</button>
        </div>
      </li>
    )
  } 
}

List.defaultProps = {
  content: '',
  bgColor: 'red',
  type:'save'
}