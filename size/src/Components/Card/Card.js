import React, {useEffect} from 'react';
import styled from 'styled-components';
// import '../../Utility/bootstrap.min.css'
import {Link} from 'react-router-dom'
import './Card.scss'

export default function Card (props) {
    let classes = props.classes || "col-sm-6 col-md-6 col-lg-4 col-xl-3";
    let def_img = "/data/images/noimage.png";
    const StyledLink =  props.link.startsWith('http') ? styled('a')`` : styled(Link)``;

    const handleClick = e => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
        <div className={" py-3 "+classes}>
            {/* {
                props.link.startsWith('http') ?
                    <a href={props.link}>
            } */}
        <StyledLink href={props.link}  to={props.link || "/top-10/title-1"} onClick={handleClick}>
            <div className="card text-left scale">

            <div className>
                <img src={props.img?props.img:def_img} class="card-img-top" alt="Image Not found"/>
            </div>
            
            <div className="px-3 pt-1">
                <span className="h5 card-title">
                    {props.title?props.title:""}
                </span>
                <p className="dark-grey-text mt-2">
                    {props.desc?decodeURI(props.desc).substr(0,97)+"...":" "}
                </p>
            </div>
        </div>
        </StyledLink>
        </div>
        </>
    )
}