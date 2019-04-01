import {combineReducers} from 'redux';
import checkUserName from './checkusernamesReducer';
import toDoList from './todoListReducer'


export default combineReducers({
    checkUserName,
    toDoList
})