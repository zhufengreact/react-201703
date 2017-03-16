import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import './indexStyle';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {'data': [
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
        ]};

    }

    render() {
        return (<div  className="container">
            <List data={this.state.data}/>
        </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
