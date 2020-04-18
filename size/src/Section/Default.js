import React, {useEffect} from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';
import { useFetch } from '../Utility/Functions';
import { PID, ytKEY } from '../Utility/Constants';
import Card from '../Components/Card/Card';

const HEADING = {
    'top-10':"Top-10 picks",
    'compare':"Comparisions",
    'videos':"Videos",
    'animals': 'Animals',
    'sports':'Sports'
}

function Default () {
    const { sec } = useParams();
    // console.log('in default', sec);
    // // let secData = null;
    // if(sec==='videos'){
    //     let pid = `UUlXVElUT7aHpjLo2d_4GkoA`
    //     let ytURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&maxResults=8&key=AIzaSyAKjOPOdAIaDmGqtimApPGCtolkZWrCL_8`
    //     secData = useFetch(ytURL);
    // } else{
    //     const data = useFetch('data');
    //     secData = data ? data.filter((x)=>(x.type === sec)) : null;
    // }
    
    let ytURL = sec==='videos' ? 
                    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PID}&maxResults=16&key=${ytKEY}`
                    : 'data';
    let secData = useFetch(ytURL);
    if(sec!=="videos"){
        secData = secData && !Object.keys(secData).includes('items') ? secData.filter((x)=>(x.type === sec)) : null;
    }
    // console.log('fetched--------',secData);


    return (
        <>
        {/* <h2>This is : {sec}</h2> */}
            <h3 class="font-weight-bold mt-4">{HEADING[sec]}</h3>
            <hr class="red title-hr bg-danger" />
            <div className="cards">
            { secData ? 
                sec==='videos' 
                    ? secData.items ? secData.items.map((item, idx)=>(
                        <Card key={idx} title={item.snippet.title} 
                              link={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} 
                              img={item.snippet.thumbnails.medium.url} />
                    )) : null
                    : secData.length === 0 ? <h4>No results found.</h4> 
                        : secData.map((topic, idx)=>(
                        <Card key={idx} 
                              title={topic.title} 
                              link={topic.id ?`/${sec}/${topic.id}`:"#"} 
                              img={topic.img} 
                              desc={topic.description}/>
                        )) 
                : null
            }
            </div>
        </>
    )
};

export default Default;