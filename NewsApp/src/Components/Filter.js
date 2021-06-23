import { Component } from "react";
import Loader from "react-loader-spinner";
import AddFilterOption from "./AddFilterOption";
import ErrorPage from "./ErrorPage";
import UpdateFilter from "./UpdateFilter";

class Filter extends Component{
    constructor(props){
        super(props)
        this.state={Data:[],
            categorydata:[],
            languagedata:[],
            countrydata:[],
            category:"",
            language:"",
            country:"",
            startDate:null,
            endDate:null
        }        
        this.findValueLanguage=this.findValueLanguage.bind(this);
    }
    findValueLanguage(){
        return this.state.languagedata.filter((x)=>{
            if(x[0]===this.state.language){
                return x;
            }
        });
    }
    async componentDidMount(){
        try{
        const response=await fetch ("https://api.currentsapi.services/v1/latest-news?apiKey=gdSzEp8s8JDofBPNn94I1LJaAuovrM4MPEoOm8hW-4itxKK2");
        const newsdata=await response.json();
        const response2=await fetch("https://api.currentsapi.services/v1/available/categories?apiKey=gdSzEp8s8JDofBPNn94I1LJaAuovrM4MPEoOm8hW-4itxKK2");
        const categorydata=await response2.json();
        const response3=await fetch("https://api.currentsapi.services/v1/available/languages?apiKey=gdSzEp8s8JDofBPNn94I1LJaAuovrM4MPEoOm8hW-4itxKK2");
        const languagedata=await response3.json();
        this.setState({Data:newsdata.news});
        this.setState({Loaded:true});
        this.setState({categorydata:categorydata.categories});
        this.setState({languagedata:Object.entries(languagedata.languages)});
        }catch(err){
            console.log("hello"+err);
            this.setState({Loaded:false});
        }
    } 
    render() {
        if(this.state.Loaded===false){
            return(
              <ErrorPage></ErrorPage>
            )
          }
        return (
             <div className="Filtercontent">
                <label>Category</label>
                <input id="Filterinput" list="categorydropdown" onChange={(evt)=>this.setState({category:evt.target.value})}/>
                <datalist id="categorydropdown">
                {this.state.categorydata.map((x)=>(
                 <AddFilterOption data={x}/>
                ))}
                </datalist>
                 <label>Languages</label>
                 <input id="Filterinput" list="Languagedropdown" onChange={(evt)=>this.setState({language:evt.target.value})}/>
                <datalist id="Languagedropdown">
                 {this.state.languagedata.map((x)=>(
                 <AddFilterOption data={x[0]}/>
                ))}
                </datalist>
                <br />
                <label>Start Date</label><input id="Filterinput" type="date" name="Startdate" max={Date.now()}onChange={(evt)=>this.setState({startDate:evt.target.value})} />
                   <label>End Date</label><input id="Filterinput"type="date"  min={this.state.startDate} max={Date.now()} name="Enddate" onChange={(evt)=>this.setState({endDate:evt.target.value})}  />
                   <Loader type="BallTriangle" height={100} width={150} timeout={1000} ></Loader>
                   <UpdateFilter news={this.state.Data} category={this.state.category} language={this.findValueLanguage()} 
                   startDate={this.state.startDate} endDate={this.state.endDate} /> 
             </div>
        );
    }
}
export default Filter;