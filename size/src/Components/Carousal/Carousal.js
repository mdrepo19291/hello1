import React from "react";
import styled from 'styled-components';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
// import { getBsProps } from "react-bootstrap/lib/utils/bootstrapUtils";

const Carousal = ({data}) => {
    let arr = [...Array(data.images).keys()].map(i => i+1);
    console.log(arr);
  return (
    <>
    <StyledCarousal className="py-4">

        <MDBContainer>

        <MDBCarousel
        activeItem={1}
        length={data.images}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        >
        <MDBCarouselInner>
            {
                arr.map((i,idx)=>(
                    <MDBCarouselItem itemId={i} key={i}>
                    <MDBView>
                        <img
                        className="d-block w-100"
                        src={`/data/images/${data.id}/output/${i}.png`}
                        alt={data.title}
                        />
                    {/* <MDBMask overlay="black-light" /> */}
                    </MDBView>
                    <MDBCarouselCaption>
                    </MDBCarouselCaption>
                    </MDBCarouselItem>
                ))
            }
            {/* <MDBCarouselItem itemId="2">
            <MDBView>
                <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                alt="Second slide"
                />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
            </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId="3">
            <MDBView>
                <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                alt="Third slide"
                />
            <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
                <h3 className="h3-responsive">Slight Mast</h3>
                <p>Third text</p>
            </MDBCarouselCaption>
            </MDBCarouselItem> */}
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
    }
    .carousel-control-prev:hover {
        box-shadow: inset 10px 0px 20px -5px rgba(0,0,0,0.5);
    }
    .carousel-control-next:hover {
        box-shadow: inset -10px 0 10px -0px rgba(0,0,0,0.5);
    }
    .carousel-indicators {
        bottom: -20px;
    }
`




// import React from 'react';
// import './Carousal.scss';
// import ReactCSSTransitionGroup from 'react-transition-group/CSSTransition';

// //var ReactCSSTransitionGroup = CSSTransitionGroup;

// export default class Carousel extends React.Component {
    
//     constructor(props) {
//         super(props)
//         this.state = {
//             items: this.props.items,
//             active: this.props.active,
//             direction: ''
//         }
//         this.rightClick = this.moveRight.bind(this)
//         this.leftClick = this.moveLeft.bind(this)
//     }

//     generateItems() {
//         var items = []
//         var level
//         console.log(this.state.active)
//         for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
//             var index = i
//             if (i < 0) {
//                 index = this.state.items.length + i
//             } else if (i >= this.state.items.length) {
//                 index = i % this.state.items.length
//             }
//             level = this.state.active - i
//             items.push(<Item key={index} id={this.state.items[index]} level={level} />)
//         }
//         return items
//     }
    
//     moveLeft() {
//         var newActive = this.state.active
//         newActive--
//         this.setState({
//             active: newActive < 0 ? this.state.items.length - 1 : newActive,
//             direction: 'left'
//         })
//     }
    
//     moveRight() {
//         var newActive = this.state.active
//         this.setState({
//             active: (newActive + 1) % this.state.items.length,
//             direction: 'right'
//         })
//     }
    
//     render() {
//         return(
//             <div id="carousel" className="noselect">
//                 <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
//                 <ReactCSSTransitionGroup 
//                     transitionName={this.state.direction}>
//                     {this.generateItems()}
//                 </ReactCSSTransitionGroup>
//                 <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
//             </div>
//         )
//     }
// }

// class Item extends React.Component {
    
//     constructor(props) {
//         super(props)
//         this.state = {
//             level: this.props.level
//         }
//     }
    
//     render() {
//         const className = 'item level' + this.props.level
//         return(
//             <div className={className}>
//                 {this.props.id}
//             </div>
//         )
//     }
// }

