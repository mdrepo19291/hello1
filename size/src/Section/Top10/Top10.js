import React, {useEffect} from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';
import { useFetchMeta, useFetchDoc } from '../../Utility/Functions';
import { noimage16x9 } from '../../Utility/Constants';
import ErrorMsg from '../../Components/ErrorMsg';
import './Top10.scss';
import Card from '../../Components/Card/Card';
import Comments from '../../Components/Comments';
import styled from 'styled-components';



function Top10 ({allData}) {

  const { topicId } = useParams();
  // const { path, url } = useRouteMatch();

  // console.log(useFetchDoc(topicId));
  // let topicData = useFetch(`top-10/${topicId}`);
  let topicData = useFetchDoc(topicId,'top-10');  // Fetch the body section
  let topicHead = useFetchDoc(topicId);           // Fetch the title and intro section
  let tTopTen;
  allData = useFetchMeta();
  if(allData){
    tTopTen = Object.keys(allData).filter(e=>e!==topicId).map(key=>(allData[key]));
    tTopTen = tTopTen.sort(() => Math.random() - 0.5);  // shuffle the data, to show user random suggestions
    tTopTen = tTopTen.slice(0,12);
    // Object.keys(allData).filter(key => allData[key]['doc-type']==="top-10")
    // .reduce((obj, key) => ([...obj, allData[key]]),[]);
    // Object.keys(allData).map(key=>(allData[key]));
  }
  let isError = topicHead && topicData && topicHead.error && topicData.error;
  if(topicData){
    delete topicData.id
  };
  // if(isError){
  //     document.querySelector(".page-container").innerHTML = "Something went wrong. We are working on it. Please visit later.";
  // }

    return (
        <>
        { isError ? <ErrorMsg/> : <>
          <StyledDiv className="container clearfix px-0">
          <div className="page-container col-lg-8">

            {topicHead ? <div className="page-title"><span>{topicHead.title}</span></div>
                       : null }

            <div className="page-body">
                {topicHead ? <div className="page-desc">{typeof(topicHead.description)==='string'? topicHead.description : topicHead.description.map((head,idx)=>(<p key={`head${idx}`}>{head}</p>))
                              }</div>
                            : null }
              
              <div className="page-top-members">
                { topicData ? Object.keys(topicData).sort((a,b)=> a-b ).reverse().map((subKey, idx)=>(
                        <div className="page-top-element" key={idx}>
                          <div className="element-title">
                            <span>{`${subKey}) ${topicData[subKey].subTitle ? decodeURI(topicData[subKey].subTitle) : null}`}</span>
                          </div>
                          <div className="element-image z-depth-1">
                            <img src={topicData[subKey].subImg} alt="Image unavailable"/>
                          </div>
                          <div className="element-desc" id={`element${subKey}`}>
                            { !topicData[subKey].subDesc ? null :
                              typeof(topicData[subKey].subDesc)==="string" ? topicData[subKey].subDesc : topicData[subKey].subDesc.map((head,idx)=>(<p key={`sub${idx}`}>{head}</p>))
                            }
                          </div>
                        </div>
                      ))
                      : null}
                  
              </div>
            </div>
          </div>

          {/* Sidebar section */}
          <div className="side-bar col-lg-3 d-flex flex-wrap py-3 mt-5">
              <span className="h5 w-100">Related</span>
              {
                tTopTen ? 
                tTopTen.map((topic, idx)=>(
                    <Card key={idx} title={topic.title} link={topic.id ? `/${topic['doc-type']}/${topic.id}` : "#"} img={topic.thumbnail || ('img' in topic? topic.img[0]:noimage16x9)} desc={topic.description} classes=" col-md-6 col-lg-12 sd-card"/>
                )) 
                : null
                // tTopTen ? tTopTen.map((topic)=>(
                //             <Card classes=" col-md-6 col-lg-12 sd-card" key={topic} title={topic.title} link={topic.id ? `/top-10/${topic.id}` : "#"} img={topic.img} desc={topic.description}/>))
                //         : null
              }
              {/*               
              <Card classes=" col-md-6 col-lg-12 sd-card"/>
              <Card classes=" col-md-6 col-lg-12 sd-card"/> */}
          </div>
          </StyledDiv>
          <Comments topic={topicId}/>
        </>}
      </>
    )
}

export default Top10;



const StyledDiv = styled.div`
    // // Font size
    // $header-size: 2rem;
    // $sub-header-size: 1.2rem;
    // $body-font: 1rem;

    // // page-background
    // $page-color: rgb(231, 231, 231);

    // .page-container {
    //     // width: 65%;
    //     // max-width: calc(1280px * 0.65 );
    //     text-align: justify;
    //     // padding: 2vw;
    //     // display: flex;
    //     float: left;
    //     // box-shadow: 2px 2px 5px 1px #777;
    //     // background-color: $page-color;
    //     .page-title {
    //         font-size: $header-size;
    //         font-weight: 500;
    //         padding: $header-size 0;
    //     }
    //     .page-body {
    //         color: rgba($color: #312d2d, $alpha: 1.0);
    //         font-size: $body-font;
    //         .page-top-members {
    //             .page-top-element {
    //                 margin-top: 5vh;
    //                 .element-title {
    //                     padding-bottom: 10px;
    //                     font-size: $sub-header-size;
    //                 }
    //                 .element-image {
    //                     width: 100%;
    //                     img {
    //                         width: 100%;
    //                     }
    //                 }
    //                 .element-desc {
    //                     padding-top: $body-font;
    //                     font-family: 'Roboto', sans-serif;
    //                 }
    //             }
    //         }
    //     }
    // }

    // .side-bar {
    //     // width: 30%;//calc( 100% - 67vw );
    //     // max-width: calc(1280px * 0.35 );
    //     text-align: justify;
    //     // margin-left: 2vw;
    //     // padding: 2vw;
    //     box-shadow: 2px 2px 5px 1px #777;
    //     background-color: $page-color;
    //     display: flex;
    //     float: right;

    //     .sd-card {
    //         font-size: 0.8rem;
    //     }
    // }
`