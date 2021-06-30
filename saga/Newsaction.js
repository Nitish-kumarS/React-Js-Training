

export const Fetch_Started =()=>{
    return{
        type:"Fetch_Started"
    }
}
export const Fetch_Failed =(errormsg)=>{
    return{
        type:"Fetch_Failed",
        error: errormsg
    }
}
export const  Fetch_Success=(news)=>{
    return{
        type:"Fetch_Success",
        data:news
    }
}
export const Fetch_Data=()=>{
    return {
        type:"Fetch_Data"
    }
}