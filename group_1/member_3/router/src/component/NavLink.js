'use strict'

import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class NavLink extends React.Component {
    constructor(props) {
		super(props);
	}

    render() {
        let navLink = this.props.id === 1
            ? (<IndexLink to={ this.props.linkAddr } activeClassName="active" >{ this.props.title }</IndexLink>)
            : (<Link to={ this.props.linkAddr } activeClassName="active" >{ this.props.title }</Link>)

        return navLink;
    }
}
