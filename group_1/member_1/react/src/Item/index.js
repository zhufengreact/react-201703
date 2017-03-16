import React,{Component} from 'react';
import Input from '../Input';
import Select from '../Select';

const BtnType = {
    save:'save',
    update:'update'
};
const ColorArr = [
    {
        value:'red',
        text:'red'
    },
    {
        value:'blue',
        text:'blue'
    },
    {
        value:'green',
        text:'green'
    }
]

export default class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            btnType:BtnType.update,
            content:props.content || '',
            bgColor:props.bgColor || ''
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        this.props.handleDelete(e.target.dataset.id);
    }

    render(){
        let {bgColor,content,btnType} = this.state;
        let {id} = this.props;

        return (<div style={{backgroundColor:bgColor}}>
            {
                btnType == BtnType.update ?
                    <span>{content}</span> :
                    <span>
                        <Input value={content} onChange={value=>this.setState({content:value})}/>
                        <Select value={bgColor} options={ColorArr} onChange={value=>this.setState({bgColor:value})}/>
                    </span>
            }
            <input type="button"
                   value={btnType == BtnType.update ? "编辑":"保存"}
                   onClick={(e)=>{
                    this.setState({
                        btnType: this.state.btnType === BtnType.update ? BtnType.save : BtnType.update
                    })
                   }}/>
            {
                btnType == BtnType.update && <input type="button"
                                                 value="删除"
                                                 data-id={id}
                                                 onClick={this.handleDelete}/>
            }
        </div>)
    }
}