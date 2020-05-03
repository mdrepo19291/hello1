import React from 'react';
import styled from 'styled-components'
import {useParams, useRouteMatch} from 'react-router-dom';
// import './Compare.scss'
import Carousel from '../../Components/Carousal/Carousal';
import Card from '../../Components/Card/Card';
import { useFetch } from '../../Utility/Functions';
import Comments from '../../Components/Comments';
import ErrorMsg from '../../Components/ErrorMsg';
import {ytURL} from '../../Utility/Constants';

function Videos({noComment}){
    // console.log(comments);
    // comments = comments;
    const { topicId } = useParams();
    const { path, url } = useRouteMatch();

    let youTube = useFetch(ytURL);
    let isError = youTube && youTube.error;
    console.log(youTube);
    return (
        <StyledDiv>
        {/* <h1 className="compare-title text-center">{topicDetails.title}</h1> */}

        {
            !topicId ? null :
                <div class="embed-responsive embed-responsive-16by9 yt-player mx-auto pb-4">
                    <iframe width="560" height="315" frameborder="0" 
                        src={`https://www.youtube.com/embed/${topicId}?autoplay=1`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="true"></iframe>
                </div>
        }
        

        { // More videos suggestion
          isError ? <ErrorMsg/> : <>
            <h4 class="font-weight-bold mt-4">Recent Videos</h4>
            <hr class="red title-hr bg-danger" />
            <div className="cards">
            {
                youTube ? 
                    youTube.items ? 
                        youTube.items.map((item, idx)=>(
                            // <Card key={idx} title={item.snippet.title} link={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} img={item.snippet.thumbnails.medium.url} />
                            <Card key={idx} title={item.snippet.title} link={`/videos/${item.snippet.resourceId.videoId}`} img={item.snippet.thumbnails.medium.url} />
                        )) 
                        : <div class="spinner-border text-secondary" role="status"></div>
                    : <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
            }</div>
          { 
            noComment ? null
              : <Comments topic={topicId}/>
          }
        </>
      }</StyledDiv>
    )
}

export default Videos;


const StyledDiv = styled.div`
    .yt-player {
        max-width: 70%;
    }
`