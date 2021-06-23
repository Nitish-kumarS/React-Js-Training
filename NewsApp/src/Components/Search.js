import { Component } from "react";
import Loader from "react-loader-spinner";
import ErrorPage from "./ErrorPage";
import UpdateSearch from "./UpdateSearch";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      sortClicked: false,
      searchClicked:false,
      searchbartext: "",
      searchtype: "",
    };
    this.componentDidMount=this.componentDidMount.bind(this);
  }
  async componentDidMount() {
    try {
      let url="https://api.currentsapi.services/v1/latest-news?apiKey=gdSzEp8s8JDofBPNn94I1LJaAuovrM4MPEoOm8hW-4itxKK2";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ Data: data.news });
      this.setState({ Loaded: true, startDate: null, endDate: null });
    } catch (err) {
      console.log("hello" + err);
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
      <div className="Maincontent">
  
        <div className="Searchbar">
          <input
            type="text" id="Searchinput"
            placeholder="Searching..."
            onClick={()=>{this.setState({searchClicked:true})}}
            onChange={(evt) =>
              this.setState({ searchbartext: evt.target.value })
            }
          />
          <button id="updownbutton"
            name="Ascending"
            onClick={() => {
              this.setState({ sortClicked: false });
              console.log(this.state.sortClicked);
            }}
          >
            <span>&#8593;</span>
          </button>
          <button id="updownbutton"
            name="descending"
            onClick={() => {
              this.setState({ sortClicked: true });
              console.log(this.state.sortClicked);
            }}
          >
            <span>&#8595;</span>
          </button>
          <Loader type="BallTriangle" color="black"height={100} width={150} timeout={1000} ></Loader>
        </div>
       
        <UpdateSearch
          searchtext={this.state.searchbartext}
          sortOrder={this.state.sortClicked}
          news={this.state.Data}
        />
      </div>
    );
  }
}
export default Search;
