import React,{Component} from 'react';

export default class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {content,bgColor} = this.props;
        console.log(this.props);
        //            <div style={{backgroundColor:data.bgColor}}>{data.content}</div>

        return (<div style={{backgroundColor:bgColor}}>{content}</div>)
    }
}