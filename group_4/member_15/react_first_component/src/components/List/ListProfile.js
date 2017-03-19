import React, { Component ,PropTypes} from "react";

//import ListHandler from '../../components/List/ListHandler'

class ListProfile extends Component{
  constructor(){
    super();
    this.state ={
      type: 'Edit',
      displayStatus1: 'inline',
      displayStatus2: 'none',
      inputPH: '',
      colorSelect: 'red'
    }

    this.changeType = this.changeType.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.del = this.del.bind(this);
  }

  // componentWillMount(){
  //   let {type} = this.props;
  //   if( type === 'edit'){
  //     this.changeType();
  //   }
  // }

  changeType = (e) => {
    let type,
        displayStatus1,
        displayStatus2,
        inputPH='',
        colorSelect;
    if(this.state.type === 'Edit'){
      type = 'Save';
      displayStatus1 = 'none';
      displayStatus2 = 'inline';
      inputPH = this.props.content;
      colorSelect = this.props.bgColor;
    }else{
      type = 'Edit';
      displayStatus1 = 'inline';
      displayStatus2 = 'none';
      this.props.update(this.props.id,this.state.inputPH, this.state.colorSelect);
    }
    this.setState({
      type,
      displayStatus1,
      displayStatus2,
      inputPH,
      colorSelect
    })
  }

  del = (e) => {
    this.props.del(this.props.id)
  }

  changeName = (e) => {
    console.log();
    this.setState({
        inputPH: e.target.value
    })
  }

  changeColor = (e) => {
    this.setState({
      colorSelect: e.target.value
    })
  }

  render(){
    //desctructure all the props
    let { content, bgColor, type } = this.props;
    let { displayStatus1, displayStatus2, inputPH, colorSelect} = this.state;

    return (
      <li className="list" style={{backgroundColor: bgColor}}>
        <input style={{display: displayStatus2}} type="text" value={inputPH} onChange={this.changeName}/>
        <select style={{display: displayStatus2}} value={colorSelect} onChange={this.changeColor}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="Green">Green</option>
        </select>
        <span style={{display: displayStatus1}}>{content}</span>
        <span className="btn-group">
          <button onClick={this.changeType}>{this.state.type}</button>
          <button onClick={this.del}>Remove</button>
        </span>
      </li>
    )
  }
}

ListProfile.propType = {
  id: PropTypes.number.isRequired
}

ListProfile.defaultProps = {
  content : "",
  bgColor : 'red',
  type: 'save'
}

export default ListProfile
