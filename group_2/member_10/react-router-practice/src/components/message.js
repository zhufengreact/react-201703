import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const message = this.props.location.state.message;
        return <div><h1>{message.title}</h1>{message.content}</div>
    }
}

export default Message;