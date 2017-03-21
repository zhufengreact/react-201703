import React, {Component} from 'react';
import NavLink from './NavLink';
export default class Message extends  Component {
    constructor(){
        super();
        this.state = {
            mess: [
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
    };
    render() {
        const list = this.state.mess.map(function(item,index){
            const path = `/content/${item.title}/${item.content}`;
            return (
                <li key={index} content={item.content}><NavLink url={path} linkName={item.title} /></li>
            )
        })
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
};
