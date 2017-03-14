import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
import List from './List';

class App extends Component{

    render(){
        const data = [
            {
                id: 1,
                content: 'zhufeng',
                bgColor: 'red'
            },
            {
                id: 2,
                content: 'react',
                bgColor: "blue"
            },
            {
                id: 3,
                content: 'component',
                bgColor: 'green'
            }
        ];

        return <List data={data}/>
    }
}

render(<App/>,document.getElementById('app'));
