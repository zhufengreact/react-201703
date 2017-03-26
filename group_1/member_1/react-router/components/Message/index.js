import React,{Component} from 'react';
import {Link} from 'react-router';
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


export default class Message extends Component{
    render(){
        return <div>
            <h1>消息</h1>
            <ul>
                {
                    data.map((item, index) => {
                        return (
                            <li key={index}><Link to={`/msg/${item.title}`}>{item.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    }
}

//
//class Info extends React.Component{
//    render(){
//        return (
//            <div>
//                <ul>
//                    {
//                        data.map((item, index) => {
//                            return (
//                                <li key={index}><Link to={`/info/${item.title}`}>{item.title}</Link></li>
//                            )
//                        })
//                    }
//                </ul>
//            </div>
//        )
//    }
//}