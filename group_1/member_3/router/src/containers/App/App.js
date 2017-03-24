'use strict';

import React, { Component } from 'react';

import NavLink from '../../component/NavLink';

export default class App extends Component {
    render() {

        const navLinks = this.props.list.map(function(item) {
                return (
                    <NavLink key={item.id} {...item} />
                );
            }),
            setChildrenData = (name, id) => {
                if (name === 'Message') {
                    return {
                        list: this.props.articles
                    };
                }

                if (name === 'Article') {
                    return this.props.articles.filter(function(item) {
                        return id === '' + item.id
                    })[0];
                }

                return {};
            };

        return (
            <main className="content box">
                { this.props.children && React.cloneElement(this.props.children, setChildrenData(this.props.children.type.name, this.props.params.id)) }
                <footer>
                    { navLinks }
                </footer>
            </main>
        );
    }
}

App.defaultProps = {
    list: [
        {
            id: 1,
            title: '首页',
            linkAddr: '/'
        },
        {
            id: 2,
            title: '消息',
            linkAddr: 'message'
        }
    ],
    articles: [
        {
            id: 1,
            title: 'zhufeng',
            linkAddr: 'article/1',
            content: 'zhufeng react'
        },
        {
            id: 2,
            title: 'react',
            linkAddr: 'article/2',
            content: 'npm install react --save'
        },
        {
            id: 3,
            title: 'react-router',
            linkAddr: 'article/3',
            content: 'npm install react-router@3.0.0 --save'
        }
    ]
}
