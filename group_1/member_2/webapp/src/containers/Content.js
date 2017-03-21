import React, {Component} from 'react';
import Message from "./Message";
console.log(Message);
export default class Content extends Component{
    render() {
        return (
            <div>
                <h1>{this.props.params.title}</h1>
                <p>{this.props.params.content}</p>
            </div>
        )
    }
}

