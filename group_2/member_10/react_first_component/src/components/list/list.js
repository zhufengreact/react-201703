import React, { Component } from 'react';
import './list.less';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.data.id,
			content: props.data.content,
			bgColor: props.data.bgColor,
			colors: props.colors,
			editing: false
		};
		
		this.onEdit = () => {
			this.setState({editing: true});
		};
		
		this.setColor = (e) => {
			this.setState({bgColor: e.target.value});
		};
		
		this.onSave = () => {
			this.setState({editing: false});
		};
		
		this.setContent = (e) => {
			this.setState({content: e.target.value});
		};
	}
	
    render() {
        return (
			<li className='list-item'>
				<div style={{background: this.state.bgColor}}>
					{
						this.state.editing ? 
						<div>
							<input type='text' value={this.state.content} onChange={this.setContent}/>
							<select value={this.state.bgColor} onChange={this.setColor}>
								{this.state.colors.map((color) => <option value={color}>{color}</option>)}
							</select>
							<button onClick={this.onSave}>Save</button>
						</div>	
						: 
						<div>
							<span>{this.state.content}</span>
							<button onClick={this.onEdit}>Edit</button>
						</div>
					}	
				</div>
			</li>
		)
    }
}

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: props.info,
			colors: props.colors
		};
		
		this.addItem = () => {
//			let defConfig = {
//				id: 1,
//				content: 'zhufeng',
//				bgColor: 'red'
//			};
//			let newArray = this.state.listData.slice(0);
//			this.setState({listData: newArray.push(defConfig)});
		};
	}
	
    render() {
		const listItems = this.state.listData.map((itemData) => <ListItem data={itemData} colors={this.state.colors}/>);
		
        return (
			<div><ul className='list-ul'>{listItems}</ul><button className='add-item' onClick={this.addItem}>Add</button></div>
		)
    }
}