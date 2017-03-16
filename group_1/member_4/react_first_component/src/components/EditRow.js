import React from 'react';
import './CommentRowStyle';

class EditRow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            'curr': {
                content: props.curr.content || '',
                bgColor: props.curr.bgColor || 'red',
                id: props.curr.id || ''
            },
            'del': props.del
        };
        this.change = this.change.bind(this);
        this.changeOpt = this.changeOpt.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    change(e) {
        console.log(e);
        let val = e.target.value;
        this.state.curr.content = val;
        this.setState({'curr': this.props.curr, 'del': false});
    }

    changeOpt(e) {
        let val = e.target.value;
        this.state.curr.bgColor = val;
        this.setState({'curr': this.props.curr, 'del': false});
    }

    componentWillReceiveProps(nextProps) {
        console.log("有属性props改变");
        this.setState({'curr': nextProps.curr, 'del': nextProps.del});
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("props将要更新 ....");
        return true;
    }

    savew(obj, e) {
        this.props.save(obj, e);
    }

    deleteRow(e) {
        this.setState({'curr': this.state.curr, 'del': true});
    }

    render() {
        const styles = {
            backgroundColor: this.state.curr.bgColor
        };
        if (this.state.del) {
            return null;
        } else {
            return (<li className="row" style={styles}>
                <input type="text" className="li_in" value={this.state.curr.content} onChange={this.change}/>
                <select name="color" className="li_sel" onChange={this.changeOpt} value={this.state.curr.bgColor}>
                    <option selected={this.state.curr.bgColor === 'red'}>red</option>
                    <option selected={this.state.curr.bgColor === 'blue'}>blue</option>
                    <option selected={this.state.curr.bgColor === 'green'}>green</option>
                </select>
                <button onClick={this.deleteRow}>删除</button>
                <button onClick={this.savew.bind(this, this.state.curr)}>保存</button>
            </li>);
        }
    }
}

export default EditRow;