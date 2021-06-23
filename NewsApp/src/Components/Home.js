//import { Component, useEffect, useState } from "react";

import { Component } from "react";
import ErrorPage from "./ErrorPage";
import Loader from "react-loader-spinner";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: [],
      Data:[],
      titleData:[]
    };
  }
  imagefilterNews(data) {
    let ans=[]
    data.filter((x) => {
      if(x.image!=="None"){
        let img= x.image;
        ans.push(img)
      }
    });
    return ans.slice(0,3);
  }
  titlefetch(data){
    let ans=[]
    data.filter((x) => {
      if(x.image!=="None"){
        let title= x.title;
        ans.push(title)
      }
    });
    console.log(ans);
    return ans.slice(0,-3);
  }
  async componentDidMount() {
    try {
      const response = await fetch(
        "https://api.currentsapi.services/v1/latest-news?apiKey=gdSzEp8s8JDofBPNn94I1LJaAuovrM4MPEoOm8hW-4itxKK2"
      );
      const data = await response.json();
      this.setState({ imgData: this.imagefilterNews(data.news) });
      this.setState({ Loaded: true });
      this.setState({titleData:this.titlefetch(data.news)});
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
      <div className="slider">
        <Loader type="BallTriangle" color="white" height={100} width={150} timeout={2000} ></Loader>
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img id="Sliderimg"src={this.state.imgData[0]} alt="News1" width="500" height="500" />
              <div class="carousel-caption">
                <h3 id="Slidertilte">{this.state.titleData[0]}</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img id="Sliderimg"src={this.state.imgData[1]} alt="News2" width="500" height="500" />
              <div class="carousel-caption">
              <h3 id="Slidertilte">{this.state.titleData[1]}</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img id="Sliderimg"src={this.state.imgData[2]} alt="News3" width="500" height="500" />
              <div class="carousel-caption">
                <h3 id="Slidertilte">{this.state.titleData[3]}</h3>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    );
  }
}
export default Home;
