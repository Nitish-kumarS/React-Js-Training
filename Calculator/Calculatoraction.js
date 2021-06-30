export const ADDOne =()=>{
    return{
        type:"ADDOne"
    }
}
export const SUBOne =()=>{
    return{
        type:"SUBOne"
    }
}
export const MUL =()=>{
    return{
        type:"MUL"
    }
}
export const DIV =()=>{
    return{
        type:"DIV"
    }
}

export const ALL=()=>{
    return (dispatch)=>{
        setTimeout(()=>dispatch(MUL()),3000);
    }
}