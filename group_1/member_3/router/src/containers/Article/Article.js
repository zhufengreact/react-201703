'use strict';

import React, { Component } from 'react';

import ArticleItem from '../../component/ArticleItem';

export default class Article extends Component {
    render() {
        return (
            <ArticleItem {...this.props} />
        );
    }
}
