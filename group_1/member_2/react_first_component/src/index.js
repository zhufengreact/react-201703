import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import List from './component/List';

class App extends Component {

    render(){
        return (
            <List/>

        )
    }
}

render(<App/>, document.getElementById('app'));