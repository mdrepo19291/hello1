import React, {useEffect} from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';
import { useFetchMeta } from '../Utility/Functions';
import { PID, ytKEY } from '../Utility/Constants';
import Card from '../Components/Card/Card';
import ErrorMsg from '../Components/ErrorMsg';

const HEADING = {
    'top-10':"Top-10 picks",
    'compare':"Comparisions",
    'videos':"Videos",
    'animals': 'Animals',
    'sports':'Sports'
}

function Default () {
    const { sec } = useParams();
    let allData = useFetchMeta();
    let isError = allData && allData.error;
    let secData;
    if(allData){
        // console.log("filtering.");
        // console.log(Object.keys(allData).filter(key => allData[key]['doc-type']===sec));

        // to show only one category
        if(['compare','top-10'].includes(sec)){
            secData = Object.keys(allData).filter(key => allData[key]['doc-type']===sec)
                    .reduce((obj, key) => ([...obj, allData[key]]),[]);
        } else {
            secData = Object.keys(allData).filter(key => allData[key].tags ? allData[key].tags.includes(sec):false)
                    .reduce((obj, key) => ([...obj, allData[key]]),[]);
        }
        // console.log("done",secData);
        // secData = Object.keys(allData).reduce((data, dat)=>({dat:allData[dat],...data}),{});
        // let topData = Object.keys(secData).filter((data)=>(secData[data]['doc-type']==='top-10'));
    };
    console.log('All,this: ',allData,secData);

    return (
        <>
        {/* <h2>This is : {sec}</h2> */}
        { isError ? <ErrorMsg/> : <>
            <h3 class="font-weight-bold mt-4">{HEADING[sec]}</h3>
            <hr class="red title-hr bg-danger" />
            <div className="cards">
            { secData ? 
                // sec==='videos' 
                //     ? secData.items ? secData.items.map((item, idx)=>(
                //         <Card key={idx} title={item.snippet.title} 
                //               link={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} 
                //               img={item.snippet.thumbnails.medium.url} />
                //     )) : <div class="spinner-border text-secondary" role="status"></div>
                //     : 
                    secData.length === 0 ? <h4>No results found.</h4> 
                        : secData.map((topic, idx)=>(
                        <Card key={idx} 
                              title={topic.title} 
                              link={topic.id ?`/${topic['doc-type']}/${topic.id}`:"#"} 
                              img={topic.thumbnail || topic.img[0] || null}
                              desc={topic.description}/>
                        )) 
                : null
            }
            </div>
        </>
      }</>
    )
};

export default Default;