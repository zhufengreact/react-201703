import React, {Component} from 'react';
import {Link} from 'react-router';
export default class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'data': [
                {
                    title: 'zhufeng',
                    content: 'zhufeng react'
                },
                {
                    title: 'react',
                    content: 'npm install react --save-dev'
                },
                {
                    title: 'react-router',
                    content: 'npm install react-router@3.0.0 --save-dev'
                }
            ]
        }
    }

    render() {

        const items = this.state.data.map(function(item, index){
            return <li key={index}><Link to={`/show/${item.title}/${item.content}`} activeStyle={{color: 'red'}} >{item.title}</Link></li>;
        });

        return (<ul>
            {items}
            </ul>);
    }
}
