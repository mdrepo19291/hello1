import React, {useEffect} from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';
import { useFetch } from '../../Utility/Functions';
import './Top10.scss';
import Card from '../../Components/Card/Card';



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
          <div className="container">
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
          </div>
        </>
    )
}

export default Top10;

{
   // http://localhost:3000/top-10/Top%2010%20Largest%20Spiders%20in%20Movies
}