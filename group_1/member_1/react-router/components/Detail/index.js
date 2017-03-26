import React,{Component} from 'react';

let data = [
    {
        title: 'zhufeng',
        content: 'zhufeng react'
    },
    {
        title: 'react',
        content: 'npm install react --save-dev'
    },
    {
        title: 'react-router',
        content: 'npm install react-router@3.0.0 --save-dev'
    }
];

export default class Detail extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.params.title}</h1>
                <p>
                    {
                        data.find(item => item.title === this.props.params.title).content
                    }
                </p>
            </div>
        )
    }
}