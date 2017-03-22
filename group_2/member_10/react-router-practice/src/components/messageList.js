import React, { Component } from 'react';
import { Link  } from 'react-router';
import listStore from '../stores/listStore';

class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.list.map((item, index) => {
            const location = {
                pathname: `message/${item.title}`,
                state: {message: item}
            };
            return (
                <li key={index}>
                    <Link to={location}>{item.title}</Link>
                </li>
            )
        });
        return <ul>{listItems}</ul>
    }
}

MessageList.defaultProps = {
    list: listStore.getAll()
};

export default MessageList;