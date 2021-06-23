//{"id":"title":
//apps","description":"url":"author":"image":

import { useState } from "react";
import LoadnewContent from "./LoadnewContent";

//,"language":"category""published":
const UpdateSearch = (props) => {
  const [newscount, setnewscount] = useState(5);
  function Ascendcompare(a,b){
    if(a.title.split(" ")[0]<b.title.split(" ")[0]){
      return -1;
    }
    if(a.title.split(" ")[0]>b.title.split(" ")[0]){
      return 1;
    }
    return 0;
  }
  function descendcompare(a,b){
    if(a.title.split(" ")[0]<b.title.split(" ")[0]){
      return 1;
    }
    if(a.title.split(" ")[0]>b.title.split(" ")[0]){
      return -1;
    }
    return 0;
  }
  
  function searching(data) {
    const d=[...data];
    d = d.filter((n) => {
      if (props.searchtext === "") {
        return n;
      } else if (
        n.title.toLowerCase().includes(props.searchtext.toLowerCase())
      ) {
        return n;
      } else if (
        n.author.toLowerCase().includes(props.searchtext.toLowerCase())
      ) {
        return n;
      } else if (true) {
        let date = n.published.split(" ")[0].split("-").reverse().join("/");
        if (date.includes(props.searchtext)) {
          return n;
        }
      }
    });
    if (props.sortOrder === false) {
      d= data.sort(Ascendcompare);
    }
    else{
      data=data.sort(descendcompare);
    }
    return d;
  }
  function loadMore() {
    return (
      <input id="loadmore"
        type="button"
        value="More..."
        onClick={() => {
          setnewscount(newscount + 5);
        }}
      />
    );
  }
  return (
    <div className="NewsContent">
      {searching(props.news)
        .slice(0, newscount)
        .map((x) => (
          <LoadnewContent x={x} />
        ))}
      {newscount < searching(props.news).length && loadMore()}
    </div>
  );
};

export default UpdateSearch;
