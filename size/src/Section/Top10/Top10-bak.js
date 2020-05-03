import React, {useEffect} from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';
import { useFetch } from '../../Utility/Functions';
import './Top10.scss';
import Card from '../../Components/Card/Card';
import styled from 'styled-components';



function Top10 () {

  const { topicId } = useParams();
  // const { path, url } = useRouteMatch();

  let topicData = useFetch(`top-10/${topicId}`);
  let head = useFetch('data');
  const tTopTen = head ? head.filter((x)=>(x.type === "top-10")) : null;
    // console.log(topicId);
  let dataLen = topicData ? topicData.length : null;
  let topicHead = head ? head.filter((topic)=>(topic.id===topicId))[0] 
                                   : null ;
  // console.log("data: ",dataLen, data);

    return (
        <>
          <StyledDiv className="container">
          <div className="page-container col-lg-8 px-5">

            {topicHead ? <div className="page-title"><span>{topicHead.title}</span></div>
                       : null }

            <div className="page-body">
                {topicHead ? <div className="page-desc">{topicHead.description.map((head)=>(<p key={head}>{decodeURI(head)}</p>))}</div>
                       : null }
              
              <div className="page-top-members">
                {topicData ? topicData.map((dt, idx)=>(
                        <div className="page-top-element" key={idx}>
                          <div className="element-title">
                            <span>{`${dataLen-idx}) ${decodeURI(dt.name)}`}</span>
                          </div>
                          <div className="element-image">
                            <img src={dt.image} alt="Image unavailable"/>
                          </div>
                          <div className="element-desc">
                            {dt.detail.map((para)=>(<p>{decodeURI(para)}</p>))}
                          </div>
                        </div>
                      ))
                      : null}
                  

                  {/* <div className="page-top-element">
                    <div className="element-title">
                      <span>10) Text ever since the 1500s</span>
                    </div>
                    <div className="element-image">
                      <img src="https://www.stemjar.com/wp-content/uploads/2017/09/Lorem-Ipsum-text-Standard-Filler-Text.jpg" alt="Image unavailable"/>
                    </div>
                    <div className="element-desc">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>

          <div className="side-bar col-lg-3 d-flex flex-wrap py-3 mt-5">
              <span className="h5 w-100">Related</span>
              {
                tTopTen ? tTopTen.map((topic)=>(
                            <Card classes=" col-md-6 col-lg-12 sd-card" key={topic} title={topic.title} link={topic.id ? `/top-10/${topic.id}` : "#"} img={topic.img} desc={topic.description}/>))
                        : null
              }
              {/*               
              <Card classes=" col-md-6 col-lg-12 sd-card"/>
              <Card classes=" col-md-6 col-lg-12 sd-card"/> */}
          </div>
          </StyledDiv>
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