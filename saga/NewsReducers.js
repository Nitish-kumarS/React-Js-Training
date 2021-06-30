const initialValue ={
    loading:false,
    Newsdata:[],
    error:''
};

const RootReducer = (state = initialValue,action)=>{
    switch (action.type) {
        case "Fetch_Started":
            console.log("Started"+state.Newsdata);
            return {
                ...state,
                loading:true,
            }
        case "Fetch_Success":
            console.log("Success"+state.Newsdata)
            return {
                ...state,
                loading:false,
                Newsdata:action.data,
            }
        case "Fetch_Failed":

            return {
                ...state,
                loading:false,
                error:action.error,
            }
        default:
            return state;
    
    }
} 
export default RootReducer;