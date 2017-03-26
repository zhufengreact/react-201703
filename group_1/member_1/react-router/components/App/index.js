import React,{Component} from 'react';
import {Link,IndexLink} from 'react-router';
import './index.css';

const style = {
    color:'red'
}

const navStyle = {

}

export default class App extends Component{
    render(){
        return <div>
            <div className="navStyle">
                <IndexLink to="/" activeStyle={style}>首页</IndexLink>
                <Link to="/msg" activeStyle={style}>消息</Link>
            </div>
            {
                this.props.children
            }
        </div>
    }
}