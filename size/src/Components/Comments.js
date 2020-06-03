import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {useParams, useRouteMatch} from 'react-router-dom';
import { useFetchDoc, firestore } from '../Utility/Functions';
import { MDBInput, MDBBtn, MDBFormInline, MDBProgress, MDBIcon } from 'mdbreact';


function Comments (props) {
    // const { topicId } = useParams();
    const topicId = props.topic;
    const [addcom, setAddcom] = useState({});
    const [complete, setComplete] = useState(false);

    let comData = useFetchDoc(topicId, "comments");
    // console.log(comData);
    
    comData = comData ? comData.comments : null;

    useEffect(()=>{
        setComplete(false);
        // console.log("Need update",complete,addcom);

    },[comData])

    const handleChange = e => {
        const { name, value } = e.target;
        setAddcom({ ...addcom, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // let {compl, comToAdd} = addcom;
        // addcom = {...addcom, createdAt: Date.now()};
        comData = comData ? [...comData, {...addcom, createdAt: Date.now()}] : [{...addcom, createdAt: Date.now()}];
        firestore.collection('comments').doc(topicId).set({comments:comData, id:topicId })
        .then(()=>{
            // console.log("Cleared!!!");
            setComplete(true);
        });
    }

    return (
        <>
          <StyledComms className="container mb-4 d-block">
            <span className="h4 mt-4">Comments</span>
            <hr className="red title-hr bg-danger mt-1" />
            <div className="" id="all-comms">
                {
                    comData ? comData.map((comm)=>( <div className="clearfix d-flex">
                            <span className="mr-3 float-left mt-3">{`${comm.name} :`}</span>
                            <span className="font-gill d-flex mt-3">{comm.comment}</span></div>
                        ))
                        : null
                }
            </div>
            {/* Add New Comment */}
            { complete ? <span className="text-primary d-block mt-4 text-center">Thank You for the feedback!!!</span> :
                <div id="add-comm" className="">
                    <div className="my-2">
                        New Comment
                    </div>
                    <form className="clearfix" id="form2" onSubmit={handleSubmit}>
                        <MDBInput label="Name" id="comm-name1" className="bg-white col-3 float-left" name="name" outline required onChange={handleChange}/>
                        <div className="col-9 float-right md-form md-outline w-75 m-0">
                        <textarea data-test="input" name="comment" rows="3" id="comm1" required class="form-control bg-white w-100" aria-disabled="false" onChange={handleChange} ></textarea>
                        <label className="ml-3" data-error="" data-success="" for="comm1" aria-labelledby="">Comment</label>
                        <MDBBtn color="mdb-color" type="submit" className="btn-sm float-right">Submit</MDBBtn>
                        </div>
                    </form>
                </div>
            }
          </StyledComms>
        </>
    )
}

export default Comments;

const StyledComms = styled.div`
    width: 60%;
    margin-top: 18em;

    textarea, input {
        font-size: 13px;
    }
    label {
        margin-top: -5px;
        border-radius: 10px 10px 0px 0px;
    }
    #all-comms {
        margin-bottom: 50px;
    }
    .md-form, .md-outline {
        margin: 0px
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`