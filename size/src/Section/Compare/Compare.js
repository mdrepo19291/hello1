import React from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';
// import './Compare.scss'
import Carousel from '../../Components/Carousal/Carousal'
import { useFetch } from '../../Utility/Functions';
// import whatsapp from './whatsapp.svg'

function Compare(){

    const { topicId } = useParams();
    const { path, url } = useRouteMatch();

    let compareData = useFetch('data');
    // console.log(topicId);

    let topicDetails = compareData ? compareData.filter((topic)=>(topic.id===topicId))[0] 
                                   : null ;
    // console.log("topic: ",topicDetails);
    // Array(8).fill().map((i,idx)=>(console.log(i,idx)));
    // let arr = [...Array(8).keys()].map(i => i+1);
    // console.log("Array trial: ",`/data/images/output/${arr[4]+1}.png`,arr);
    // var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
          
          {
            topicDetails ? <><h1 className="compare-title text-center">{topicDetails.title}</h1>
                          <Carousel data={topicDetails} />
                          {topicDetails.description?topicDetails.description.map((d)=>(
                                <p className="text-center w-responsive mx-auto">{decodeURI(d)}</p>)):""}
                          </>
                        : null
          }
          
{/* 
          <div className="col-lg-8 col-12 mt-1 mx-lg-4">
                <div className="row mb-4">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="view overlay">
                        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(29).jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">
                          <strong>Lorem ipsum dolor sit amet</strong>
                        </h4>
                        <p className="dark-grey-text mb-3 mt-4 mx-4">Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                          et quasi architecto beatae vitae dicta sunt explicabo.</p> */}
{/*                         
                        <div className="row mx-4 mt-3">

                          <p className="dark-grey-text article">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            id est laborum.</p>
                        
                          <h5 className="mt-3 mb-4">
                            <strong>Lorem ipsum dolor sit amet</strong>
                          </h5>

                          <p className="dark-grey-text article">Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem
                            accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est.</p>

                          <blockquote className="blockquote mx-md-5 mx-1">
                            <p className="mb-0">"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
                          </blockquote>

                          <p className="dark-grey-text article"> Ut enim ad minima veniam, quis nostrum exercitationem ullam
                            corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
                            eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

                        </div>
                        
                        <div className="row my-3 mx-3">

                          <div className="col-md-6 mb-3">

                            <img src="https://mdbootstrap.com/img/Photos/Others/square/19.jpg" className="img-fluid z-depth-1 rounded-0" alt="sample image"/>

                          </div>

                          <div className="col-md-6">

                            <img src="https://mdbootstrap.com/img/Photos/Others/square/10.jpg" className="img-fluid z-depth-1 rounded-0" alt="sample image"/>

                          </div>

                        </div> 

                        <div className="row mx-4">

                          <p className="dark-grey-text article">Perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                            et quasi architecto beatae vitae dicta sunt explicabo. Ut enim ad minima
                            veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi.</p>

                          <p className="dark-grey-text article mb-4">Omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Ut enim ad minima veniam,
                            quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                            ut aliquid ex ea commodi.Perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque.</p>

                        </div>

                        <div className="row mb-4">

                          <div className="col-md-12 text-center">

                            <h4 className="text-center font-weight-bold dark-grey-text mt-3 mb-3">
                              <strong>Share this post: </strong>
                            </h4>

                            <button type="button" className="btn btn-fb btn-sm waves-effect waves-light">
                              <i className="fab fa-facebook-f left"></i> Facebook</button>
                            <button type="button" className="btn btn-tw btn-sm waves-effect waves-light">
                              <i className="fab fa-twitter left"></i> Twitter</button>
                            <button type="button" className="btn btn-gplus btn-sm waves-effect waves-light">
                              <i className="fab fa-google-plus-g left"></i> Google +</button>

                          </div>

                        </div>
                        */}
                      {/* </div>

                    </div>

                  </div>

                </div> */}

              {/* </section> */}

            {/* </div> */}

        </>
    )
}

export default Compare;