'use strict'

import React from 'react';

export default class ArticleItem extends React.Component {
    constructor(props) {
		super(props);
	}

    render() {
        return (
            <article className="box-flex">
                <h1>{ this.props.title }</h1>
                <section>{ this.props.content }</section>
            </article>
        );
    }
}
