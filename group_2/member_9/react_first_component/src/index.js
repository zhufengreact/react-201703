import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './myList';

const data = [
  {
    id: 1,
    content: 'zhufeng',
    bgColor: 'red'
  },
  {
    id: 2,
    content: 'react',
    bgColor: 'blue'
  },
  {
    id: 3,
    content: 'component',
    bgColor: 'green'
  }
];

const colors = [
  'red',
  'black',
  'gray',
  'blue',
  'white',
  'yellow'
];

render(
  <List data={ data } colors={ colors }/>,
  document.getElementById('app')
);
