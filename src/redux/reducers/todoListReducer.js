import conf from '../Conf/conf';
import {DEFAULT_TODO_LIST, UPDATE_TODO_LIST,UPDATE_TODO_WITH_CHANGED_ITEM} from '../actions/todoListAction';

const initialState =''


export default function todoList (state=initialState,action){
    switch (action.type){
        case UPDATE_TODO_LIST:
            return Object.assign({},state,{
                todoArr:[...action.todoList]
            })
        case UPDATE_TODO_WITH_CHANGED_ITEM:
            return Object.assign({},state,{
                changedItemArr:action.changedItemArr
            })
        default:
            return state;
    }

}

