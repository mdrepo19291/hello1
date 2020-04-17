import React, {useEffect} from 'react';
import './Top10.scss';
import Card from '../../Components/Card/Card';


function Top10 () {
    useEffect(()=>{
        // document.querySelector(".side-bar .p-2").classList.remove("col-sm-6","col-md-6","col-lg-4","col-xl-3")
      }
    ,[])
    return (
        <>
          <div className="container">
          <div className="page-container col-lg-8 px-5">
            <div className="page-title">
              <span>Title for the page</span>
            </div>
            <div className="page-body">
              <div className="page-desc">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className="page-top-members">
                  <div className="page-top-element">
                    <div className="element-title">
                      <span>10) Text ever since the 1500s</span>
                    </div>
                    <div className="element-image">
                      <img src="https://www.stemjar.com/wp-content/uploads/2017/09/Lorem-Ipsum-text-Standard-Filler-Text.jpg" alt="Image unavailable"/>
                    </div>
                    <div className="element-desc">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                  </div>

                  <div className="page-top-element">
                    <div className="element-title">
                      <span>10) Text ever since the 1500s</span>
                    </div>
                    <div className="element-image">
                      <img src="https://www.stemjar.com/wp-content/uploads/2017/09/Lorem-Ipsum-text-Standard-Filler-Text.jpg" alt="Image unavailable"/>
                    </div>
                    <div className="element-desc">
                      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="side-bar col-lg-3 d-flex flex-wrap">
              <span className="pt-3">Related</span>
              <Card classes=" col-md-6 col-lg-12 sd-card"/>
              <Card classes=" col-md-6 col-lg-12 sd-card"/>
              <Card classes=" col-md-6 col-lg-12 sd-card"/>
          </div>
          </div>
        </>
    )
}

export default Top10;

{
   // http://localhost:3000/top-10/Top%2010%20Largest%20Spiders%20in%20Movies
}