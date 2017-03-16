import React,{Component,PropTypes} from 'react';

export default class Select extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : props.value || ''
        };
    }

    render(){
        let {onChange,options=[]} = this.props;
        let {value} = this.state;

        return (<select value={value}
                        onChange={(e) => {
                            let value = e.target.value;
                            this.setState({value});
                            onChange(value);
                    }}
            >
            {
                options.map(item=>{
                    return <option key={item.value} value={item.value}>{item.text}</option>
                })
            }
        </select>)
    }
}


Select.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
};