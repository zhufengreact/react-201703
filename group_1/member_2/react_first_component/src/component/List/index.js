import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import ItemUtil from './ItemUtil';
import Item from './Item';
import "./index.css";

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = ItemUtil.getAllItems();
    }
    componentDidMount() {
        console.log('did mount')
        ItemUtil.addEventListener(()=>this.setState(ItemUtil.getAllItems()));
    }

    render() {
        const List = this.state.data.map(child => {
            return (
                <Item key={child.id} data={child} />
            )
        });
        return (
            <ul>
                {List}
            </ul>
        )
    }
}