import React from 'react';
import CommentRow from './CommentRow';
import EditRow from './EditRow';
import './ListStyle';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            'data': props.data,
            'curr': {
                id: '',
                content: '',
                bgColor: ''
            },
            'del': false
        };
        this.deleteRow = this.deleteRow.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.getId = this.getId.bind(this);
        this.add = this.add.bind(this);
    }

    add() {
        this.setState({
            'data': this.state.data,
            'curr': {
                id: '',
                content: '',
                bgColor: ''
            },
            'del': false
        });
    }

    deleteRow(e) {
        const id = e.target.value;
        const newData = this.state.data.filter((item) => item.id !== Number(id));
        this.setState({
            'data': newData,
            'curr': {
                id: '',
                content: '',
                bgColor: ''
            },
            'del': false
        });
    }

    edit(e) {
        const id = e.target.value;
        const newData = this.state.data.find((item) => item.id === Number(id));
        this.setState({'data': this.state.data, 'curr': newData});
    }

    save(obj, e) {
        const item = obj;
        if (item.id && item.content) {
            this.state.data.forEach((val) => {
                if (val.id === item.id) {
                    val.content = item.content;
                    val.bgColor = item.bgColor;
                }
            });
        } else if (!item.id && item.content) {
            item.id = this.getId(this.state.data);
            this.state.data.push(item);
        }
        this.setState({
            'data': this.state.data,
            'curr': {
                id: '',
                content: '',
                bgColor: ''
            },
            'del': false
        });
    }

    getId(obj) {
        let max = 0;
        obj.forEach((ind) => {
            if (ind.id > max) {
                max = ind.id;
            }
        });

        return max + 1;
    }

    render() {
        let deleteRow = this.deleteRow;
        let edit = this.edit;
        let save = this.save;
        const currData = this.state.curr;
        const del = this.state.del;
        let add = this.add;
        const items = this.state.data.map(function (row, index) {
            return <CommentRow row={row} key={index} deleteRow={deleteRow} editRow={edit}/>;
        });

        return (<ul className="ul_st">
            {items}
            <EditRow curr={currData} save={save} del={del}/>
            <button onClick={add}>新增</button>
        </ul>);
    }
}

export default List;