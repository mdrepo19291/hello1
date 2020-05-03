import React from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';
// import './Compare.scss'
import Carousel from '../../Components/Carousal/Carousal'
import { useFetchDoc, useFetchMeta } from '../../Utility/Functions';
import Card from '../../Components/Card/Card';
import Comments from '../../Components/Comments';
import ErrorMsg from '../../Components/ErrorMsg';
// import whatsapp from './whatsapp.svg'

function Compare({allData}){

    const { topicId } = useParams();
    const { path, url } = useRouteMatch();

    let topicDetails = useFetchDoc(topicId);
    allData = useFetchMeta();
    if(allData){
      allData = Object.keys(allData).map(key=>(allData[key]));
      allData = allData.filter(obj=>(obj['doc-type']==='compare'))
    }
    let isError = topicDetails && topicDetails.error;
    // console.log(topicDetails);
    return (
        <>
        { isError ? <ErrorMsg/> : <>
          
          {
            topicDetails ? <>
                          <h1 className="compare-title text-center">{topicDetails.title}</h1>
                          <Carousel imgData={topicDetails.img} classes="img-w100" />
                          <p className="text-center w-responsive mx-auto mt-4">{
                              topicDetails.description ?
                              typeof(topicDetails.description)!=='string' ? 
                                  topicDetails.description.map((head,idx)=>(<p key={`head${idx}`}>{head}</p>)) 
                                  : topicDetails.description
                              : null
                          }</p>
                          </>
                        : null
          }
          {
          // On click, carousal indicators not updating
          
        //   <div className="cards mt-5 pt-5">
        //   <h4 class="font-weight-bold mt-4 w-100 border-bottom border-danger">Related</h4>
        // <hr class="red title-hr bg-danger" />
        //       {
        //         allData ? 
        //         allData.map((topic, idx)=>(
        //             <Card key={idx} title={topic.title} link={topic.id ? `/${topic['doc-type']}/${topic.id}` : "#"} img={topic.thumbnail || topic.img[0]} />
        //         )) 
        //         : null
        //       }
        //   </div>
          }
          <Comments topic={topicId}/>
        </>
      }</>
    )
}

export default Compare;