import React, {Component} from 'react';

export default class Show extends Component {
    render(){

        return (<div style={{marginLeft:'10px'}}>
                <h1>{this.props.params.title}</h1>
                <h3>{this.props.params.content}</h3>
                </div>
        );
    }
}
