import React, { Component } from 'react';
import { Link, IndexLink  } from 'react-router';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.children}</div>
                <ul className="main-menu">
                    <li><IndexLink  to="/" activeStyle={{color: 'red'}}>Index</IndexLink ></li>
                    <li><Link to="message" activeStyle={{color: 'red'}}>Message</Link></li>
                </ul>
            </div>
        )
    }
}