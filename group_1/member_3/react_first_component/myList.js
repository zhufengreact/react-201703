'use strict';

import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

let oApp = document.getElementById('app');

class MyList extends Component {
    constructor(props) {
		super(props);

        this.state = {
            list: this.props.list
        }
    }

    deleteItem = (index) => {
        this.setState({
            list: this.state.list.filter((item) => {
                return item.id !== index;
            })
        });
    }

    addItem = () => {
        let lastItem = this.state.list.filter((item, index) => {
            return index === this.state.list.length -1;
        })[0];
        this.state.list.push({
            id: lastItem.id + 1
        });
        this.setState({
            list: this.state.list
        });
    }

    render() {
        let items = this.state.list.map((item, i) => {
            return (
                <MyListItem key={item.id} {...item} deleteItem={this.deleteItem}/>
            )
        })

        return (
            <div>
                <ul>
                    {items}
                </ul>
                <button onClick={this.addItem}>新建</button>
            </div>
        )
    }
}

class MyListItem extends Component {
    constructor(props) {
		super(props);

        this.state = {
            editStatus: !this.props.content || false,
            content: this.props.content || '',
            bgColor: this.props.bgColor || 'red'
        }
	}

    editItem = () => {
        this.setState({
            editStatus: true
        });
    }

    saveItem = () => {
        this.setState({
            editStatus: false,
            content: findDOMNode(this.refs.input).value,
            bgColor: findDOMNode(this.refs.select).value
        });
    }

    handlerDelete = () => {
        this.props.deleteItem(this.props.id);
    }

    render() {
        let styles = {
                backgroundColor: this.state.bgColor,
                textAlign: 'center',
                listStyleType: 'none',
                padding: '4px 0'
            },
            btnStyles = {
                float: 'right'
            };

        return (
            <li style={styles}>
                {this.state.editStatus
                    ? (
                        <span>
                            <input type="text" ref="input" defaultValue={this.state.content} />
                            <select ref="select">
                                <option>red</option>
                                <option>blue</option>
                                <option>green</option>
                            </select>
                        </span>
                      )
                    : this.state.content
                }
                <button type="button" style={btnStyles} onClick={this.handlerDelete}>删除</button>
                <button type="button" style={btnStyles} onClick={this.state.editStatus ? this.saveItem : this.editItem}>{this.state.editStatus ? "保存" : "编辑"}</button>
            </li>
        );
    }
}

MyList.defaultProps = {
    list: [
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
}

ReactDOM.render(
    <MyList />,
    oApp
)
