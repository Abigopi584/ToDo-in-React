
import {GET_AVAILABLE_USER_NAMES,UPDATE_USER_NAME} from '../actions/userNameAction';
const initialState = {
    returnMatchNames:''
}

function checkUserName(state=initialState, action){
    switch(action.type){
        case GET_AVAILABLE_USER_NAMES:
            return Object.assign({},state,{
                matchedNames:action.matchedNames
            })
        case UPDATE_USER_NAME:
            return Object.assign({},state, {
                username:action.username
            })
        default:
            return state;

    }
}

export default checkUserName;