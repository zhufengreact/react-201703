import React, { Component } from 'react';
import './myList.less';

class EditableListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: props.data.content || '',
      bgColor: props.data.bgColor || props.colors[0],
      inEditMode: typeof(props.data.id) === 'undefined'
    };

    this.saveItem = this.saveItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  saveItem() {
    this.setState({
      inEditMode: false
    });
  }

  editItem() {
    this.setState({
      inEditMode: true
    });
  }

  onContentChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  onColorChange(e) {
    this.setState({
      bgColor: e.target.value
    });
  }

  render() {
    return (
      <li className="list-item" style={{backgroundColor: this.state.bgColor}}>
        <div>
          {
            this.state.inEditMode ? <input value={this.state.content} onChange={ this.onContentChange }/> : this.state.content
          }

          {
            this.state.inEditMode &&
            <select value={ this.state.bgColor } onChange={ this.onColorChange }>
              {
                this.props.colors.map((color) => <option key={ color } value={ color }>{color}</option>)
              }
            </select>
          }

          <button onClick={ () => this.props.onDeleteItem(this.props.data) }>删除</button>
          {
            this.state.inEditMode &&
            <button onClick={ this.saveItem } disabled={ this.state.content.trim() === '' } title={ (this.state.content.trim() === '') ? '请输入文本' : '' }>保存</button>
          }
          {
            !this.state.inEditMode &&
            <button onClick={ this.editItem }>编辑</button>
          }
        </div>
      </li>
    );
  }
}

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(item) {
    var newData = [ ...this.state.data ];
    newData.splice(newData.indexOf(item), 1);
    this.setState({
      data: newData
    });
  }

  addItem() {
    this.setState({
      data: [ ...this.state.data, {} ]
    });
  }

  render() {
    return (
      <div className="list-container">
        <ul className="list">
          {
            this.state.data.map((item, index) => <EditableListItem key={ index } data={ item } colors= { this.props.colors } onDeleteItem={ this.deleteItem }/> )
          }
        </ul>
        <button onClick={ this.addItem }>新建</button>
      </div>
    );
  }
}
