'use strict';

import React, { Component } from 'react';

import NavLink from '../../component/NavLink';


export default class Message extends Component {
    render() {
        let navLinks = this.props.list.map(function(item) {
            return (
                <li key={ item.id }><NavLink {...item} /></li>
            );
        });

        return (
            <section className="box-flex">
                <ul>
                    { navLinks }
                </ul>
            </section>
        );
    }
}
