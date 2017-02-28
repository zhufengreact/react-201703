/**
 * Created by dujingya on 17/2/27.
 */
import React,{Component} from 'react';
import ReactDOM,{render} from "react-dom";

class MyComponent extends Component{
    render(){
        return <h1>hello world</h1>
    }
}

render(
    <MyComponent/>,
    document.getElementById("app")
)