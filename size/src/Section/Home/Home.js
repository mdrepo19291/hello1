import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import { useFetch } from '../../Utility/Functions';
import { PID, ytKEY } from '../../Utility/Constants';

const Home = (props) => {
    // const [yTdata, setyTdata] = useState(null);
    let ytURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PID}&maxResults=8&key=${ytKEY}`
    const data = useFetch('data');
    const yTdata = useFetch(ytURL);
    let youTube = yTdata;
    // console.log("Fetched data: ",yTdata);
    const tTopTen = data ? data.filter((x)=>(x.type === "top-10")) : null;
    const tCompare = data ? data.filter((x)=>(x.type === "compare")) : null;
    // console.log("Fetched compare: ",tTopTen, tCompare);

    // useEffect((pid)=>{
    //     // const ytCall = ()=>(setyTdata(useFetch(yt)));
    //     youTube = yTdata ? yTdata : youTube;
    //     console.log("In effect---");
    //     // setyTdata(useFetch(yt))
    //     // ytCall();
    // },[yTdata])

    return(
      <>
        <div className="cont d-flex align-content-center text-align-center flex-wrap">
            <h1 className="mx-auto text-white">This is Home</h1>
        </div>

      <h4 class="font-weight-bold mt-4">Top 10</h4>
      <hr class="red title-hr bg-danger" />
        <div className="cards">
        {
            tTopTen ? 
                tTopTen.map((topic, idx)=>(
                    <Card key={idx} title={topic.title} link={topic.id ? `/top-10/${topic.id}` : "#"} img={topic.img} desc={topic.description}/>
                )) 
                : null
        }
        </div>
        {/* <div className="cards">
            <Card title="Title-1 goes here"/>
            <Card title="Title-2 is bit different" desc=" "/>
            <Card />
            <Card title="Title-4 is bit different" desc=" "/>
        </div> */}

      <h4 class="font-weight-bold mt-4">Comparision</h4>
      <hr class="red title-hr bg-danger" />
        <div className="cards">
        {
            tCompare ? 
                tCompare.map((topic, idx)=>(
                    <Card key={idx} title={topic.title} link={`/compare/${topic.id}`} img={topic.img} desc={topic.description}/>
                )) 
                : null
        }
        </div>
        {/* <div className="cards">
            <Card link="/compare/title-1" title="Title-1 goes here"/>
            <Card link="/compare/title-1" title="Title-2 is bit different" desc=" "/>
            <Card />
            <Card title="Title-4 is bit different" desc=" "/>
        </div> */}
        
        <h4 class="font-weight-bold mt-4">Recent Videos</h4>
        <hr class="red title-hr bg-danger" />
        <div className="cards">
        {
            youTube ? 
                youTube.items.map((item, idx)=>(
                    <Card key={idx} title={item.snippet.title} link={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} img={item.snippet.thumbnails.medium.url} />
                )) 
                : null
        }
        </div>
      
    </>
  )}

  export default Home;








// class Home extends React.Component {
//     constructor(){
//         super();

//         this.state = {
//             isLoading = false
//         }
//     }

//     render() {
//         return{
            
//         }
//     }
// }