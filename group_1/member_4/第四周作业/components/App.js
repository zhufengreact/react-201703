'use strict'
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import './AppStyle.css'

export default class App extends Component {
    render() {
        return ( <div className="content">
                    <article>
                        {this.props.children}
                    </article>
                    <footer>
                        <ul>
                            <li><IndexLink to="/first" activeStyle={{color: 'red'}}>首页</IndexLink></li>
                            <li><Link to="/message" activeStyle={{color: 'red'}}>消息</Link></li>
                        </ul>
                    </footer>
                </div>
        );
    }
}