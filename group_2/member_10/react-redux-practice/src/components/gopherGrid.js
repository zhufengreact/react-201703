import React, { Component } from 'react';
import Gopher from './gopher'

class GopherGrid extends Component {
    render() {
        const { gridData, indicator, onHitGopher, onStart, onReset } = this.props;
        // const gridCells = gridData.map((cellData, index) => <Gopher key={index} info={cellData} indexNum={index}/>);
        var gridCells=[];
        for(var i=0;i<gridData.length;i++){
            var cellData = gridData[i];
            gridCells.push(
                <Gopher key={i} info={cellData} indexNum={i} onHitGopher={onHitGopher} onStart={onStart} status={indicator.status}/>
            )
        }
        return (
            <div className="gopher-grid">
                {gridCells}
                {
                    indicator.pass && !indicator.succ &&
                    <div className="pass">PASS!<br/><button onClick={onReset}>NEXT</button></div>
                }
                {
                    indicator.fail && !indicator.succ &&
                    <div className="fail">FAILED!<br/><button onClick={onReset}>REDO</button></div>
                }
                {
                    indicator.succ &&
                    <div className="succ">SUCCESS!</div>
                }
                {
                    !indicator.status &&
                    <div className="start"><span onClick={this.props.onStart}>Ready</span></div>
                }
            </div>
        );
    }
}

export default GopherGrid;