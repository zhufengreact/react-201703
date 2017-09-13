import React, { Component } from 'react';

class Gopher extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(this.props);
    //     this.onStart = this.props.onStart.bind(this, false);
    // }

    render() {
        return (
            <div>
                {
                    this.props.status && this.props.info.show &&
                    (this.props.info.alive ? <img src={require('../assets/2.png')} onClick={this.props.onHitGopher(this.props.indexNum)}/> : <img src={require('../assets/1.png')}/>)
                }
            </div>
        );
    }
}

export default Gopher;