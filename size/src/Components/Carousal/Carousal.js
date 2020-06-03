import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const Carousal = ({imgData, classes, controls, caption}) => {
    imgData = imgData || [];
    const [allImages, setAllImages ] = useState(imgData);
    classes = classes || "";
    controls = typeof(controls)==='undefined'?true:controls;
    // console.log(allImages);
    let notAdded = true;
    useEffect(()=>{
        if(notAdded && document.querySelector(".carousel-indicators") && document.querySelector(".carousel-inner").children.length === document.querySelector(".carousel-indicators").children.length){
            let indicators = document.querySelector(".carousel-indicators");
            // left
            let icon = document.createElement('i');
            icon.setAttribute("class","fas fa-arrow-circle-left mr-3 mt-2 ind-pointer");
            icon.onclick = ()=>{document.querySelector("a.carousel-control-prev").click()};
            indicators.prepend(icon);
            // right
            let ricon = document.createElement('i');
            ricon.setAttribute("class","fas fa-arrow-circle-right ml-3 mt-2 ind-pointer");
            ricon.onclick = ()=>{document.querySelector("a.carousel-control-next").click()};
            indicators.append(ricon);
            notAdded = false;
        }
        // For updating the indicator section

        // if(document.querySelector(".carousel-indicators").children.length < (imgData.length+2)){
        //     while(document.querySelector(".carousel-indicators").children.length - (imgData.length +2)){
        //         //create more
        //         let li = document.createElement('li');
        //         li.setAttribute('data-test','carousel-indicator');
        //         li.setAttribute('class','');
        //         let parentElement = document.querySelector(".carousel-indicators")
        //         parentElement.insertBefore(li, parentElement.children[1]);
        //     }
        // } else if(document.querySelector(".carousel-indicators").children.length > (imgData.length+2)){
        //     while(document.querySelector(".carousel-indicators").children.length - (imgData.length +2)){
        //         // remove
        //         document.querySelector(".carousel-indicators").children[imgData.length].remove()
        //     }
        // }
        
        setAllImages(imgData);
        return () => {
            // if(document.querySelector(".carousel-indicators"))document.querySelector(".carousel-indicators").remove();
            // if(notAdded)document.querySelector(".carousel-indicators").remove();
            console.log('cleaned up');}
        // indicators.parentNode.parentNode.append(indicators);
    },[imgData,allImages])

  return (
    <>
    <StyledCarousal className={`py-4 ${classes}`}>

        <MDBContainer>

            <MDBCarousel
                activeItem={1}
                length={allImages.length}
                showControls={controls}
                showIndicators={true}
                className={`z-depth-2`}
            >
                <MDBCarouselInner>
                    {
                        allImages.map((imag,idx)=>(
                            <MDBCarouselItem itemId={`${idx+1}`} key={`img${idx+1}`}>
                                <MDBView>
                                <img
                                    className="d-block"
                                    src={imag}
                                    alt={'No image found'}
                                />
                                {/* <MDBMask overlay="black-light" /> */}
                                </MDBView>
                                <MDBCarouselCaption>
                                    {caption ? caption[idx] : null}
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                        ))
                    }
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    </StyledCarousal>
    </>
  );
}

export default Carousal;

const StyledCarousal = styled.div`
    .carousel-control-prev, .carousel-control-next {
        height: 100%;
        top: 0%
    }
    .carousel-control-prev:hover {
        box-shadow: inset 20px 0px 10px -5px rgba(0,0,0,0.5);
    }
    .carousel-control-next:hover {
        box-shadow: inset -20px 0 10px -5px rgba(0,0,0,0.5);
    }
    .carousel-indicators {
        bottom: -55px;
    }
    .ind-pointer {
        cursor: pointer;
    }
    .alt-caption {
        position: absolute;
        top: 100px;
        color: white;
    }
`

