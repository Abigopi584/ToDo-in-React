import React from  'react';
import {Form,Col, FormGroup, FormControl, InputGroup, Button}  from 'react-bootstrap';
import Modal from 'react-awesome-modal';
import {updateTheItemInToDoList} from '../redux/actions/todoListAction';
import {connect} from 'react-redux';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.showAddTodoModal = this.showAddTodoModal.bind(this);
        this.updateToDoList = this.updateToDoList.bind(this);
        this.changeToDoItem = this.changeToDoItem.bind(this);
        this.state={
            name :props.name,
            showModal:false,
            todoItem:''
        }
    }

    showAddTodoModal(evt){
        this.setState({
            showModal:true
        })
    }
    changeToDoItem(evt){
        this.setState({
             todoItem:{active:false,item:evt.target.value}
        })

    }
    updateToDoList(evt){
        this.props.addToDoItem(this.state.todoItem)
    }

    render(){

        return(
            <div>
                <div>
                    <form className="form-inline">
                        <Col md={2}>
                        </Col>
                        <Col md={8}>
                            <FormGroup id="searchTabGrp">
                                <FormControl type="text" name="searchTab" style={{"width":"75%"}} placeholder="Search Here" onChange={this.changeToDoItem}/> &nbsp;
                                <Button onClick={this.updateToDoList}>Add</Button>
                            </FormGroup>
                        </Col>
                    </form>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addToDoItem: (todoItem)=> dispatch(updateTheItemInToDoList(todoItem))
    }
}

export default connect(null,mapDispatchToProps)(AddTodo);