import React, {Component} from 'React'

import style  from './list.less'

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  render() { 
   
    let data = this.props
    let colorOptions = this._generateColorOptions()
    let liClasses = this._computeListItemClasses()

    return (
      <li className={liClasses} onClick={this.operateListItem.bind(this)}>
        <div className="item-inner">
          <span className="ctn">{data.content}</span>
          <span className="edit-box">
            <input type="text" value={data.content} className='input' onChange={this.setListCtn.bind(this)}/>
            <select name="colors"  value={data.color} onChange={this.setListBgColor.bind(this)}>{colorOptions}</select>
          </span>
          <span className="btn btn-edit">{this.state.isEditing ? '保存' : '编辑'}</span>  
          <span className="btn btn-del">删除</span>
        </div>
      </li>
    )
  }

  
  operateListItem (e) {
    let el = e.target
    if (el.classList.contains('btn-edit')) {
      this.setState((prevState, props) => {
        return {
          isEditing: !prevState.isEditing
        }
      })
    }

    if (el.classList.contains('btn-del')) {
      this.props.onDelMe(this.props.listIndex)
    }
  }

  setListCtn(e) {
    let value = e.target.value
    let listIndex = this.props.listIndex
    this.props.onColorChange({
      index: listIndex,
      type: 'content',
      value: value
    })
  }

  setListBgColor(e) {
    let value = e.target.value
    let listIndex = this.props.listIndex
    this.props.onColorChange({
      index: listIndex,
      type: 'bgColor',
      value: value
    })
  }

  _generateColorOptions () {
    let avilableColors =  ['red', 'blue', 'green']
    let options = avilableColors.map(function(color,index) {
      return <option value={color} key={index}>{color}</option>
    })
    return options
  }

  _computeListItemClasses () {
   return this.state.isEditing ? 'list-item is-editing ' + this.props.color : 'list-item ' + this.props.color
  }
}

export default class Lists extends Component{
  constructor() {
    super()
  }


  render() {
    let listDatas = this.props.data
    let listItems = listDatas.map((data, index) => {
      /* key ,react 渲染标致使用
      Keys Must Only Be Unique Among Siblings
      */
      return (<ListItem 
         content={data.content} 
         color={data.bgColor}
         listIndex={index}
         onColorChange={this.onColorChange.bind(this)}
         onContentChange={this.onContentChange.bind(this)}
         onDelMe={this.onDeleteListItem.bind(this)}
         key={index}
       />)
    })
    return (
      <ul className="m-lists">
        {listItems}
      </ul>
    )
  }

  onColorChange(playload) {
    this.props.onChangeList(playload)
  }
  
  onContentChange (playload) {
    this.props.onChangeList(playload)
  }

  onDeleteListItem (listIndex) {
    this.props.ondelListItem(listIndex)
  }
}

