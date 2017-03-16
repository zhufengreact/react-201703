import React from 'react';
import './CommentRowStyle';

class CommentRow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const item = this.props.row;
        const {deleteRow, editRow} = this.props;

        const styles = {
            backgroundColor: item.bgColor
        };

        return (<li className="row" style={styles}>
            {item.content}
            <button onClick={editRow} value={item.id}>编辑</button>
            <button onClick={deleteRow} value={item.id}>删除</button>
        </li>);
    }
}

export default CommentRow;
