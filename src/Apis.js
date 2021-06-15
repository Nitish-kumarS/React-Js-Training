import { Component, useEffect, useState } from "react";

//https://jsonplacehoder.typicode.com/users
class Apis extends Component{
    constructor (props){
        super(props)
        this.state={
            Datafrom:null,
            Loaded:false
        }
    }
    async componentDidMount(){
        try{
        const response=await fetch ("https://jsonplaceholder.typicode.com/users");
        const data=await response.json();
        this.setState({Datafrom: data.results});
        console.log("Sucess");
        this.setState({Loaded:true});
        }catch(err){
            console.log("hello"+err);
        }
    }
    render() {
            if(!this.state.Loaded){
                return <div>loading... </div>
            }
          
            return(
                <div>
                    <h2>{this.state.Datafrom}</h2>
                </div>
            )
    }
}   
{/*
const Apis = () => {
    const [Users, setUsers] = useState(null);
        
    useEffect(() => {
        fetch("https://api.randomuser.me/")
        .then(res => {
            console.log("searching")
            res.json();
        }).then(data=>{
            setUsers(data);
            console.log(data);
        });
    }, []);
    return (
        <div>
            {Users}
        </div>
      );
}*/}
export default Apis;