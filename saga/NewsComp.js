import { connect } from "react-redux";
import { Fetch_Data } from "./Newsaction";
import {Component} from 'react';
class NewsComp extends Component{

    render() {
        console.log(this.props.newsData);
        return (
            <div>
               <h1> this is loadingState{this.props.loadingstate?"True":"False"}</h1>
             <input type="button" onClick={this.props.fetchdata} value="FetchNews" />
             {this.props.newsData.map((x)=>{
                 return <h2>{x.title}</h2>
             })
             }
            </div>
        );
    }
}
const mapStatetoProps= state =>{
    return {
        newsData:state.Newsdata,
        loadingstate:state.loading
    }
}
const mapDispatchtoProps =dispatch=>{
    return {
        fetchdata:()=>dispatch(Fetch_Data())
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(NewsComp);