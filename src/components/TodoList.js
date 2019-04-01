import React from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import ActiveItem from  './ActiveItem';
import {getDefaultToDoList} from '../redux/actions/todoListAction';

class TodoList extends React.Component{
    constructor(){
        super();
        this.state={
            todoList:''
        }
    }

    componentWillMount(){
        this.props.getDefaultToDoList()
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        /*var newArr = nextProps.toDoItemList.map((item,idx)=>{
            if(item instanceof Function){
                nextProps.toDoItemList.splice(idx,1);
            }
        })
        console.log(newArr)*/
        if(nextProps.todoList != this.state.todoList){
            this.setState({
                todoList:nextProps.toDoItemList
            })
        }
    }

    render(){

        let istodoArr = (this.state.todoList && this.state.todoList.length> 0)? true : false;
        console.log(this.state.todoList)
        return(
                <div>
                    <Col md={3}>
                    </Col>
                    <Col md={8}>
                        <div id="todoArrList">
                            {istodoArr &&
                                      this.state.todoList.map((item) => <ActiveItem item={item} todoArr={this.state.todoList} itemDone={item.active} />)
                            }
                        </div>
                    </Col>

                </div>
            )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return{
        toDoItemList : state.toDoList.todoArr
    }

}

const mapDToP = (d)=>{
    return{
        getDefaultToDoList:()=> d(getDefaultToDoList())
    }
}
export default connect(mapStateToProps,mapDToP)(TodoList);
