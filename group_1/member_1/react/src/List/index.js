import React,{Component} from 'react';
import Item from '../Item';

export default class List extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let {data=[]} = this.props;
        return <div>
            {
                data.map((item,index)=>{
                    return <Item {...item} key={`item-${index}`}/>
                })
            }
        </div>
    }
}