import React, {Component} from 'react'
import ReactDOM from 'React-dom'

import Lists from 'components/Lists'
import data from 'mock/list_items.js'

require('assets/less/zhufeng.less')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listDatas: data,

      showAddNewItemBox: false,
      newItem: {
        bgColor: '',
        content: ''
      }
    }
  }

  render () {
    let data = this.state.listDatas
    let newItem = this.state.newItem
    return (
      <div className="app">
        <Lists 
          data={data} 
          onChangeList={this.onChangeList.bind(this)}
          ondelListItem={this.delListItem.bind(this)}
        />
        <div className="add-list-box">
          <h3 className="title">添加新元素</h3>
          <div className="setting-box">
            <p>
              <span className="label">设置内容</span>
              <input type="text" value={newItem.content} onChange={this.setNewItemContent.bind(this)} placeholder="请输入内容"/></p>
            <p>
              <span className="label">设置背景色：</span>
              <select name="bgColorSelect" onChange={this.setNewItemBgColor.bind(this)} value={newItem.bgColor}>
                <option value="">选择背景色</option>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
              </select>
            </p>
            <p><span className="btn btn-add" onClick={this.addNewItem.bind(this)}>添加新内容</span></p>
          </div>
        </div>
      </div>
    )
  }

  onChangeList({index = 0, type = 'bgColor', value = 'red'}) {
    let data = this.state.listDatas
    data[index][type] = value
    this.setState({
      listDatas: data
    })
  }

  delListItem (itemIndex) {
    let data = this.state.listDatas
    data.splice(itemIndex,1)
    this.setState({
      listDatas: data
    })
  }
  setNewItemContent (e) {
    let value = e.target.value
    let newItem = this.state.newItem
    newItem.content = value
    this.setState({
      newItem
    })
  }

  setNewItemBgColor (e) {
    let  value = e.target.value
    let newItem = this.state.newItem
    newItem.bgColor = value
    this.setState({
      newItem: newItem
    })
  }
  addNewItem () {
    let newItem = this.state.newItem
    console.log(newItem.bgColor, newItem.content)
    if (newItem.value !== '' || newItem.bgColor !== '') {
      let data = this.state.listDatas
      newItem.id = data.length + 1
      data.push(newItem)
      this.setState({
        listDatas: data
      })
    } else {
      window.alert('请设置新内容的背景色和内容!')
   }
  }
}

ReactDOM.render( <App />, document.getElementById('app'))
