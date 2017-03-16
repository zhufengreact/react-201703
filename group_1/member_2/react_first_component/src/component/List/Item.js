import React, { Component } from 'react';
import ItemUtil from './ItemUtil';

export default class Item extends Component {
    update = (e) =>{
        e.preventDefault();
        let currentId = this.props.data.id;
        let content = e.target.value;
        ItemUtil.updateContent(currentId, content);
    }
    editToggle = (e) =>{
        e.preventDefault();
        ItemUtil.handleEdit(this.props.data.id);
        ItemUtil.eventEmit();
    }
    updateColor = (e) => {
        e.preventDefault();
        let currentId = this.props.data.id;
        let color = e.target.value;
        ItemUtil.handleColor(currentId, color);
        ItemUtil.eventEmit();
    }
    deleteItem = (e) => {
        e.preventDefault();
        let currentId = this.props.data.id;
        ItemUtil.handleDelete(currentId);
        ItemUtil.eventEmit();
    }
    render () {
        let data = this.props.data;
        let bgColor = data.bgColor;
        let editable = data.edit ? "保存" : "编辑";
        console.log(this.props.data, '----------')
        return (
            <li className={bgColor}>
                <Edit data={data} editable={data.edit} editId = {data.id} currentColor={data.bgColor} currentContent={data.content} updateColor={this.updateColor} updateContent={this.update}/>
                <div>
                    <button onClick={this.editToggle}>{editable}</button>
                    <button style={{right:0}} onClick={this.deleteItem}>删除</button>
                </div>
            </li>
        );
    }
}

class Edit extends Component {
    render() {
        let props = this.props;
        let data = props.data;
        let editable = props.editable;
        const content = editable ? <EditForm editId="props.editId" currentContent={data.content} currentColor={data.bgColor} updateColor={props.updateColor} updateContent={props.updateContent} /> : <span>{data.content}</span>
        return (
            <div>
                {content}
            </div>
        )
    }
}

class EditForm extends Component{
    render() {
        let props = this.props;
        return (
            <div>
                <input type="text" defaultValue={props.currentContent} onChange={props.updateContent} />
                <select defaultValue={props.currentColor} onChange={props.updateColor}>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                </select>
            </div>
        )
    }
}



