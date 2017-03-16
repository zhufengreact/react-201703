import React,{Component} from 'react';
import Item from '../Item';

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            opt:props.data || []
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.create = this.create.bind(this);
    }

    handleDelete(id){
        this.setState({opt: this.state.opt.filter(item=>item.id !=id)});
    }

    create(){
        let {opt} = this.state;
        let lastId = opt.length > 0 ? opt[opt.length - 1].id + 1 : 1;

        opt.push({
            id: lastId + 1,
            content: '',
            bgColor: 'red',
            status: 'edit'
        });

        this.setState({opt});
    }
    render(){
        let {opt=[]} = this.state;
        return <div>
            {
                opt.map((item,index)=>{
                    return <Item {...item} key={`item-${index}`} handleDelete={this.handleDelete}/>
                })
            }
            <input type="button" value="新增" onClick={this.create}/>
        </div>
    }
}