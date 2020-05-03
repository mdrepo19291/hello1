import React, {useEffect} from 'react';
import { useFetch } from '../../Utility/Functions';
import { ytURL } from '../../Utility/Constants';
import Card from '../../Components/Card/Card';
import ErrorMsg from '../../Components/ErrorMsg';
import Videos from '../Videos/Videos'

function SecVideos () {
    // let youTube = useFetch(ytURL);
    // let isError = youTube && youTube.error;
    // console.log()
    return (
        <>
        <Videos noComment={true}/>
      </>
    )
};

export default SecVideos;