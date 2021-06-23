import { useEffect, useState } from "react";
import LoadnewContent from "./LoadnewContent";
import Noresults from "./Noresults";

const UpdateFilter = (props) => {
    const [newscount, setnewscount] = useState(5);
    function categoryFilter(data) {
        data =data.filter((news)=>{
            if(props.category===""){
                return news;
            }
            else if(news.category.toString().toLowerCase().includes(props.category.toLowerCase())){
                return news;
            }
        })
        return data;
    }
    function languageFilter(data){
        data=data.filter((news)=>{
            console.log(props.language.toString());
            if(props.language.toString()===""){
                return news;
            }
            else if(props.language.toString().slice(-2).includes(news.language)){
                console.log("Found");
                return news;
            }
        });
        return data;
    }
    //2021-06-20 05:36:14 +0000"
    function startdateFilter(data){
        const d1=new Date(props.startDate);
        data=data.filter((x)=>{
           let  d2=new Date(x.published.split(" ")[0]);
            if(d1>=d2){
                return x;
            }
        });
        return data;
    }
    function enddateFilter(data){
        const d1=new Date(props.startDate);
        data=data.filter((x)=>{
           let  d2=new Date(x.published.split(" ")[0]);
            if(d1<=d2){
                return x;
            }
        });
        return data;
    }
    function filterNews(data){
        if(props.language.toString()!==""){
            data=languageFilter(data);   
        }
        if(props.category!==""){
            data=categoryFilter(data);
        }
        if(props.startDate!==undefined&&props.startDate){
            console.log("datachecked");
            data=startdateFilter(data);
        }
        if(props.endDate!==undefined&&props.endDate){
            console.log("enddatachecked");
            data=enddateFilter(data);
        }
        return data;
    }    
    function loadMore(){
        return <input id="loadmore" type="button" value="More.." onClick={()=>{setnewscount(newscount+5)}}/>
    }
    if(filterNews(props.news).length===0){
        return (
            <Noresults></Noresults>
        )
    }
    return (  
        <div className="NewsContent">
             {filterNews(props.news).slice(0,newscount).map((x)=>(
                <LoadnewContent x={x}/>
             ))
            }
            {newscount<filterNews(props.news).length&& loadMore()}
        </div>
    );
        }
 export default UpdateFilter;