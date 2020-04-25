import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { MDBInput, MDBBtn, MDBFormInline, MDBProgress } from 'mdbreact';
import { firestore, storage } from '../Utility/Functions'

function AddDocument () {
    const [docData, setDocData] = useState({});
    const [uploadStatus, setUploadStatus] = useState(0.01);
    let fileURL = [];

    useEffect(()=>{
        // firestore.collection('records').doc('top-10').onSnapshot((snapshot)=>{
        //     debugger
        // })

        console.log(docData);
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const {id, ...data} = docData;
        data = fileURL.length ? {...data, img:fileURL} : data;
        firestore.collection('records').doc(id).set({...data, id, createdAt: Date.now()})
        .then(()=>{
            console.log("Frank food updated");
            document.querySelector('#sumbit-msg').innerText = "Document Upload Successful";
            let form = document.querySelector('#form1');
            form.reset();
            form.id.value = "";
            form.title.value = "";
            form.description.value = "";
            document.querySelectorAll("input[type=checkbox]").forEach(c=>c.checked=false);
        });
    }

    const fileUpload = (e) => {
        const { files } = e.target;
        fileURL = [];
        console.log(files);
        if (docData.id){
            files.forEach((file, idx)=>{
                // let ext = file.name.substring(0,file.name.lastIndexOf('.'));
                let uploading = storage.ref('doc-data/images/').child(`${docData.id}/${idx+1}`).put(file);
                uploading.on('state_changed', ()=>{
                    }, e=>{  // error
                        console.log("Error on Uploading", e)
                    }, ()=>{ // complete
                        uploading.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            console.log('File available at', downloadURL);
                            fileURL.push(downloadURL);
                            console.log(uploadStatus, files.length, fileURL);
                            setUploadStatus((fileURL.length/files.length)*100)
                        });
                    }
                )
            })
        } else {
            alert("Provide Document ID first")
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDocData({ ...docData, [name]: value });
    }
    const handleTag = (e) => {
        const {value, checked} = e.target;
        let tags = docData.tags || [];
        if (checked) tags.push(value.toLowerCase())
        else { tags= tags.filter(v=>(v!==value))}
        setDocData({...docData, tags});
    }
    // debugger
    // console.log(docData.tags);
    return (
        <>
          <StyledDiv className="container p-4 z-depth-1 border border-primary rounded">
            <span className="h4 mx-auto w-100">Add a new document</span>

            <form className="mt-4 was-validated" id="form1" onSubmit={handleSubmit}>

                <MDBInput label="Unique Document ID" className="bg-white" name="id" outline required onChange={handleChange} placeholder="e.g. dog-size-1" />
                <MDBInput label="Document Title" className="bg-white" name="title" outline required onChange={handleChange}/>
                
                <MDBFormInline className="mb-3" >
                    <span className="mr-4">Tags: </span>
                    <MDBInput value='Animals' label='Animals' type='checkbox' id="tag1" containerClass='mr-4'  onChange={handleTag}/>
                    <MDBInput value='Sports' label='Sports' type='checkbox' id="tag2" containerClass='mr-4' onChange={handleTag}/>
                    <MDBInput value='Wildlife' label='Wildlife' type='checkbox' id="tag3" containerClass='mr-4' onChange={handleTag}/>
                </MDBFormInline>
                <div class="form-group">
                    <label class="mr-sm-2" for="doc-type">Type of Doc</label>
                    <select name="doc-type" className="custom-select w-50" required onChange={handleChange}>
                        <option value="">Choose an option</option>
                        <option value="compare">Comparision</option>
                        <option value="top-10">Top 10</option>
                    </select>
                </div>

                <div class="custom-file overflow-hidden w-50" >
                    <label class="custom-file-label" for="file-upload">Upload Images</label>
                    <input type="file" class="custom-file-input" id="file-upload" name="file-upload" multiple onChange={fileUpload} />
                </div>

                <div id="upload-progress">
                    {/* {
                        Object.keys(uploadList).map((key)=>(
                            <MDBProgress material value={50} className="" height="4px"/>
                            
                        )) */}
                    
                </div>
                <MDBProgress material value={uploadStatus} className="" height="4px"/>

                <MDBInput type="textarea" label="Description" className="bg-white" name="description" outline rows={18} onChange={handleChange}/>

                <MDBBtn type="submit">Upload document</MDBBtn>
                <span id="sumbit-msg" className="text-success ml-5"></span>

            </form>

            {docData.description ? <p>{docData.description}</p> : null}

            <p id="output-here"></p>

          </StyledDiv>
        </>
    )
}

export default AddDocument;

const StyledDiv = styled.div`

    background-color: #f3f8fe;
    .form-check label {
        color: #000;
    }


`
