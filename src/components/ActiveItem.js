import React from 'react'
import {Col,Form,FormCheck } from 'react-bootstrap';
import {connect} from 'react-redux';
import {updateStatusOfToDoItem,getDefaultToDoList} from '../redux/actions/todoListAction';

class ActiveItem extends React.Component{
    constructor(props){
        super(props)
        this.handleCheck =this.handleCheck.bind(this);
        this.state={
            item:props.item,
            //itemOver: (props && typeof props.item != 'undefined' && typeof props.item.active != 'undefined') ? props.item.active :false,
            todoArr:props.todoArr,
            itemActive:props.itemDone
        }
    }

    handleCheck(evt){
        let todoItem = this.props.item;
        console.log(evt.target.checked)
        if(evt.target.checked){
             todoItem.active =  true;
        } else {
            todoItem.active =  false;
        }
        this.props.updateToDoItem(todoItem,this.state.todoArr)
    }


   /* componentWillReceiveProps(nextProps){
        if(nextProps.todoArr != this.state.todoArr){

            this.setState({
                todoArr:nextProps.todoArr,
                item:nextProps.changedToDoItem,
            },)
        }
    }*/

    render(){
        var itemOver = this.state.itemActive;
        console.log('this.state.itemActive '+this.state.itemActive)
        var className = (this.state.itemActive) ? 'todoitemListActive'  :'todoitemListnotActive'  ;
        return(
            <div>

                    <div>
                        <Col className={className}>
                            <Form.Group>
                                <FormCheck type='checkbox' id={`checkbox_${this.props.item.item}`} className={className}
                                           label={`${this.props.item.item}`} onChange={this.handleCheck}/>
                            </Form.Group>
                        </Col>
                    </div>

            </div>
        )
    }
}

const mapSToP = (State)=>{
    console.log(State.toDoList);
    return{
        todoArr: State.toDoList.changedItemArr.toDoArray,
        changedToDoItem:State.toDoList.changedItemArr.changedItem

    }
}


const mapDToP = (dispatch)=>{
        return{
            updateToDoItem : (todo,todoArr)=> dispatch(updateStatusOfToDoItem(todo,todoArr)),
        }
}

export default connect(mapSToP,mapDToP)(ActiveItem);