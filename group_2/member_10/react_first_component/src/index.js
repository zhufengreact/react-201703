import { render } from 'react-dom';
import React, { Component } from 'react';
import List from './components/list/list';

const dummyData = [
    {
        id: 1,
        content: 'zhufeng',
        bgColor: 'red'
    },
    {
        id: 2,
        content: 'react',
        bgColor: "blue"
    },
    {
        id: 3,
        content: 'component',
        bgColor: 'green'
    }
];

const colors = ['red', 'green', 'blue'];

render(
    <List info={dummyData} colors={colors}/>,
	document.getElementById('list')
);