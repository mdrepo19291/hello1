import React from 'react';
// import '../../Utility/bootstrap.min.css'
import {Link} from 'react-router-dom'
import './Card.scss'

export default function Card (props) {
    let classes = props.classes || "col-sm-6 col-md-6 col-lg-4 col-xl-3";
    return (
        <>
        <div className={" py-3 "+classes}>
        <Link to={props.link || "/top-10/title-1"}>
            <div className="card text-left scale">

            <div className>
                <img src={props.img?props.img:"https://mdbootstrap.com/img/Photos/Others/images/17.jpg"} class="card-img-top" alt=""/>
            </div>
            
            <div className="px-3 pt-1">
                <span className="h5 card-title">
                    {props.title?props.title:"Title goes here"}
                </span>
                <p className="dark-grey-text mt-2">
                    {props.desc?props.desc:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam."}
                </p>
            </div>
        </div>
        </Link>
        </div>
        </>
    )
}