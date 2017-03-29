import React, { Component } from 'react';

class Gopher extends Component {
    render() {
        console.log('ooooooooooooo' + this.props.info.show);
        return (
            <div>
                {
                    this.props.status && this.props.info.show &&
                    (this.props.info.alive ? <button onClick={this.props.onHitGopher(this.props.indexNum)}><img src={require('../assets/2.png')}/></button> : <img src={require('../assets/1.png')}/>)
                }
                {
                    !this.props.status && this.props.indexNum == 4 &&
                    <span onClick={this.props.onStart}>Ready</span>
                }
            </div>
        );
    }
}

export default Gopher;