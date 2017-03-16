import React,{Component,PropTypes} from 'react';

export default class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : props.value || ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            value:nextProps.value
        })
    }

    render(){
        return (
            <input value={this.state.value}
                onChange={this.handleChange}/>
        );
    }

    handleChange(e){
        const value = e.target.value;
        this.setState({value});
        this.props.onChange(value);
    }


}

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};