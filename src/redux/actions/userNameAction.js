import  conf from '../Conf/conf'

// Check for UserName if minimum char limit is met

export function userNamesAvailable(matchedNme){
    return (dispatch)=>{
        dispatch({
            type: GET_AVAILABLE_USER_NAMES,
            matchedNames: matchedNme
        })
    }
}

export function checkForMatchInAvailableName(userInput){
    var availableNames = conf.availableNames;
    var matchedNames = new Array();
    for(let i=0;i<availableNames.length;i++){
        if((availableNames[i]).toLowerCase().indexOf(userInput.toLowerCase()) !== -1){
            matchedNames.push(availableNames[i]);
        }
    }
    return(dispatch) =>{
        return dispatch(userNamesAvailable(matchedNames))
    }

}

export function userNameUpdate(userName){
    return(dispatch)=>{
         dispatch({
             type:UPDATE_USER_NAME,
             username:userName
         })
    }
}


export const GET_AVAILABLE_USER_NAMES = 'GET_AVAILABLE_USER_NAMES';
export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';