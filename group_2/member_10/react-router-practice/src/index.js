import { render } from 'react-dom';
import React, { Component } from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import MyRouter from './components/myRouter';
import './styles/common.less'

render(
    <MyRouter/>,
    document.getElementById('app')
);