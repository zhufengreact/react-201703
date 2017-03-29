import React, { Component } from 'react';
import Gopher from './gopher'

class GopherGrid extends Component {
    render() {
        const { gridData, status, onHitGopher, onStart, succ, fail, pass, onReset } = this.props;
        //const gridCells = gridData.map((cellData, index) => <Gopher key={index} info={cellData} indexNum={index}/>);
        var gridCells=[];
        for(var i=0;i<gridData.length;i++){
            var cellData = gridData[i];
            gridCells.push(
                <Gopher key={i} info={cellData} indexNum={i} onHitGopher={onHitGopher} onStart={onStart} status={status}/>
            )
        }
        return (
            <div className="gopher-grid">
                {gridCells}
                {
                    pass && !succ &&
                    <div className="pass">PASS!<br/><button onClick={onReset}>NEXT</button></div>
                }
                {
                    fail && !succ &&
                    <div className="fail">FAILED!<br/><button onClick={onReset}>REDO</button></div>
                }
                {
                    succ &&
                    <div className="succ">SUCCESS!</div>
                }
            </div>
        );
    }
}

export default GopherGrid;