import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom'
import './ItemCard.scss'

const ItemCard = (props) => {
  return (
    <>
      <div className="card-item">
        <Link href={"top-10/"+encodeURI(props.title)}>
        <div className="card-image">
          <img src={props.img} />
        </div>
        <div className="card-details">
          <h3>{props.title}</h3>
          <div className="detail">{props.detail}</div>
          <div className="footer">{props.footer}</div>
        </div>
        </Link>
      </div>
    {
    //   <Md/>
    }
    </>
  )
}

export default ItemCard;

const Md = ()=>(
    <MDBCol style={{ maxWidth: "22rem" }}>
    <MDBCard>
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
        waves />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
        <MDBBtn href="#">Click</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
)