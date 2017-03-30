import React, {Component} from 'react';
import Mouse from "./mouse";
import './gameBox.css';

class GameBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let tpl = (<table>
                <tr>
                    <td><Mouse onHit={this.props.onHit} item={this.props.data.items[0]}/></td>
                    <td><Mouse onHit={this.props.onHit} item={this.props.data.items[1]}/></td>
                    <td><Mouse onHit={this.props.onHit} item={this.props.data.items[2]}/></td>
                </tr>
                <tr>
                    <td><Mouse onHit={this.props.onHit} item={this.props.data.items[3]}/></td>
                    <td><Mouse onHit={this.props.onHit} item={this.props.data.items[4]}/></td>
                    <td><Mouse onHit={this.props.onHit} item={this.props.data.items[5]}/></td>
                </tr>
                <tr>
                    <td><Mouse onHit={this.props.onHit} item={this.props.data.items[6]}/></td>
                    <td><Mouse onHit={this.props.onHit} item={this.props.data.items[7]}/></td>
                    <td><Mouse onHit={this.props.onHit} item={this.props.data.items[8]}/></td>
                </tr>
            </table>
        );

        const classNames = this.props.data.begin ? "btn btn-info col-sm-4 disabled" : "btn btn-info col-sm-4";

        return (<div className="game">
            <h1 className="title">打地鼠小游戏</h1>
            {tpl}
            <button className={classNames} onClick={ !this.props.data.begin ? this.props.beginGame : ''}>开始</button>
            {/*<button className="btn btn-danger col-sm-4" onClick={this.props.stopGame}>暂停</button>*/}

        </div>);
    }
}

export default GameBox;