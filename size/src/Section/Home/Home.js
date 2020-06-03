import React, { useEffect, useState } from 'react';
import {MDBView, MDBMask} from 'mdbreact'
import Card from '../../Components/Card/Card';
import ErrorBoundary from '../../Components/ErrorBoundary';
import ErrorMsg from '../../Components/ErrorMsg';
import { useFetch, useFetchMeta } from '../../Utility/Functions';
import { ytURL, noimage16x9 } from '../../Utility/Constants';
import  Carousel from '../../Components/Carousal/Carousal'

const Home = (props) => {
    // const [yTdata, setyTdata] = useState(null);
    // const data = useFetch('data');
    const allData = useFetchMeta();
    const yTdata = useFetch(ytURL);
    let youTube = yTdata;
    // console.log("Fetched data: ",youTube);
    // const tTopTen = data ? data.filter((x)=>(x.type === "top-10")) : null;
    // const tCompare = data ? data.filter((x)=>(x.type === "compare")) : null;
    let tTopTen;
    let tCompare;
    let topImages;
    let topTitle;
    if(allData){
        tTopTen = Object.keys(allData).filter(key => allData[key]['doc-type']==="top-10")
                  .reduce((obj, key) => ([...obj, allData[key]]),[]).sort((a,b)=>b.createdAt-a.createdAt);
        tCompare = Object.keys(allData).filter(key => allData[key]['doc-type']==="compare")
                  .reduce((obj, key) => ([...obj, allData[key]]),[]).sort((a,b)=>b.createdAt-a.createdAt);
        topImages = tCompare.map(e=>(e.img[0]));
        topTitle = tCompare.map(e=>(e.title ? e.title : ""));
        // console.log(tTopTen, tCompare)
    };

    let isError = allData && allData.error;
    // console.log("All:", allData);
    
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
        { isError ? <ErrorMsg/> : <>
        
        <img src="/data/images/cover_page.jpg" style={{width: '100vw', marginBottom: '5rem', marginLeft: 'calc((100% - 100vw)/2)'}}/>

        {/* <div className="cont d-flex align-content-center text-align-center flex-wrap overflow-hidden z-depth-2">
                <MDBView className="p-0 m-0">
                { //  w-100
                    topImages ? <Carousel imgData={topImages} // caption={topTitle} 
                                          classes="w-100" controls={false}/>
                            : null
                }
                <MDBMask overlay="blue-slight" className="flex-center cont-overlay">
                    {/* <p className="white-text">strong overlay</p> */}
                {/* </MDBMask> */}
                    {/* <div className="cont-overlay p-absolute d-flex align-content-center text-align-center flex-wrap overflow-hidden"></div> */}
                {/* </MDBView> */}
        {/* </div> */} 

        <h4 class="font-weight-bold mt-4">Comparision</h4>
        <hr class="red title-hr bg-danger" />
        <div className="cards">
        {
            tCompare ? 
                tCompare.map((topic, idx)=>(
                    <Card key={idx} title={topic.title} link={`/compare/${topic.id}`} img={topic.thumbnail || topic.img[0]} desc={topic.description}/>
                )) 
                : null
        }
        </div>

        <h4 class="font-weight-bold mt-4">Top 10</h4>
        <hr class="red title-hr bg-danger" />
        <div className="cards">
        {
            tTopTen ? 
                tTopTen.map((topic, idx)=>(
                    <Card key={idx} title={topic.title} link={topic.id ? `/top-10/${topic.id}` : "#"} img={topic.thumbnail || noimage16x9} desc={topic.description}/>
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
        <ErrorBoundary>
        <div className="cards">
        {
            youTube ? 
                youTube.items ? 
                    youTube.items.map((item, idx)=>(
                        <Card key={idx} title={item.snippet.title} link={`/videos/${item.snippet.resourceId.videoId}`} img={item.snippet.thumbnails.medium.url} />
                    )) 
                    : <div class="spinner-border text-secondary" role="status"></div>
                : <div class="spinner-border text-secondary" role="status">
                <span class="sr-only">Loading...</span>
                </div>
        }
        </div>
        </ErrorBoundary>
        </>
      }
    </>
  )}

  export default Home;





