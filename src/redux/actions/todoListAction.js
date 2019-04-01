import conf from '../Conf/conf';


export function updateTodoListSendToReducer(toDoArr){
    console.log(toDoArr)
    return(dispatch)=>{
        dispatch({
            type: UPDATE_TODO_LIST,
            todoList:toDoArr
        })
    }
}

export function getDefaultToDoList(){
    return(d)=>{
        return d(updateTodoListSendToReducer(conf.todoList));
      /*  d({
            type:DEFAULT_TODO_LIST,
            todoArr:conf.todoList
        })*/
    }
}

export function updateTheItemInToDoList(toDoItem){
   var toDoArr = conf.todoList;
   toDoArr.push(toDoItem);
    return(dispatch)=>{
       return dispatch(updateTodoListSendToReducer(toDoArr));
    }
}


export function updateStatusOfToDoItem(toDo, toDoArr){

    var toDoArray =toDoArr;
    toDoArray.map((todoItem,idx)=>{
        if(todoItem.item === toDo.item){
            toDoArray.splice(idx,1)
            toDoArray.push(toDo)

        }
    })
    var newObj = {changedItem:toDo,toDoArray:toDoArray}
    return(d)=>{
         d(updateTodoListWithChangeDItemToReducer(newObj))
         d(updateTodoListSendToReducer(toDoArr))
    }
}

export function updateTodoListWithChangeDItemToReducer(newObj){
    return(dispatch)=>{
        dispatch({
            type: UPDATE_TODO_WITH_CHANGED_ITEM,
            changedItemArr:newObj
        })
    }
}

export const UPDATE_TODO_LIST = 'UPDATE_TODO_LIST';
export const DEFAULT_TODO_LIST = 'DEFAULT_TODO_LIST';
export const UPDATE_TODO_WITH_CHANGED_ITEM = 'UPDATE_TODO_WITH_CHANGED_ITEM'