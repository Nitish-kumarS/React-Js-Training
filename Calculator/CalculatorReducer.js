const initialValue ={
    value:0
}

export const CalReducers=(state=initialValue,action)=>{
    switch(action.type){
        case "ADDOne":return {...state,
            value:state.value +1
        }
        case "SUBOne":return{
            ...state,
            value:state.value -1
        }
        case "MUL":return{
            ...state,
            value:state.value *2
        }
        case "DIV":return{
            ...state,
            value:state.value /2
        }
        default: return state
    }
}
export default CalReducers;