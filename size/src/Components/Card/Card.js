import React from 'react';
// import '../../Utility/bootstrap.min.css'

export default function Card (props) {
    return (
        <>
        <div class="p-2 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card text-left ">

            <div class="view overlay ">
                <img src={props.img?props.img:"https://mdbootstrap.com/img/Photos/Others/images/17.jpg"} class="card-img-top" alt=""/>
                {/*
                
                <a>
                    <div class="mask rgba-white-slight waves-effect waves-light"></div>
                </a>*/}
            </div>
            
            <div class="px-3 pt-1">
                {/* <a href="" class="teal-text text-center text-uppercase font-small">
                </a><h6 class="mb-3 mt-3"><a href="" class="teal-text text-center text-uppercase font-small">
                <strong>Travel</strong>
                </a><a class="dark-grey-text font-small"> - 14.09.2018</a>
                </h6> */}
            
                <span class="h5 card-title">
                    {props.title?props.title:"Title goes here"}
                </span>
                <p class="dark-grey-text mt-2">
                    {props.desc?props.desc:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam."}
                </p>

            </div>

            </div>
        </div>
        </>
    )
}