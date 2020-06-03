import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { MDBInput, MDBBtn, MDBFormInline, MDBProgress, MDBIcon } from 'mdbreact';
import { firestore, storage } from '../Utility/Functions';
import Comments from '../Components/Comments';

const TAGS = ["Animal", "Sports","Wildlife","Military","Superhero","Anime","Monsters","Infrastractures","Gaming","Countries","Geography","Space"]

function AddDocument () {
    const [docData, setDocData] = useState({});
    const [uploadStatus, setUploadStatus] = useState(0.01);
    const [items, setItems] = useState({1:{}});
    const [complete, setComplete] = useState(false);
    let fileURL = [];
    // useEffect(()=>{
    //     // console.log(docData);
    // },[]);
    const sharedStart = (array) => {
        var A= array.concat().sort(), 
        a1= A[0], a2= A[A.length-1], L= a1.length, i= 0;
        while(i<L && a1.charAt(i)=== a2.charAt(i)) i++;
        return a1.substring(0, i);
    }
    // For Comparision docs
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(docData);
        if(docData["doc-type"]==="compare" && uploadStatus<100){
            alert("Image not provided! or still uploading. Please check");
            return}
        // const form = document.querySelector('#form1');
        // Upload data for Compare
        let {id, img, ...data} = docData;
        // console.log("Files-> ",fileURL);
        console.log(data);
        if(docData['doc-type']==='compare'){
            let imgCommon = sharedStart(img).length;
            img.sort((a,b)=>(a.substr(imgCommon).split('?')[0]-b.substr(imgCommon).split('?')[0]));
            data = {...data, img};
        }
        data.tags = data.tags ? data.tags : [];
        firestore.collection('records').doc(id).set({...data, id, createdAt: Date.now()})
        .then(()=>{
            // console.log("Cleared!!!");
            setComplete(true);
        });
        // Upload data for Top-10
        if(docData["doc-type"]==="top-10"){
            console.log(items);
            let itemsUpload = Object.keys(items).filter(key => Object.keys(items[key]).length)
                        .reduce((obj, key) => ({...obj, [key]: items[key]}),{});
            console.log(itemsUpload);
            firestore.collection('top-10').doc(id).set({...itemsUpload, id})
            .then(()=>{
                // console.log("Cleared SubSection!!!")
            });
        }
    }
    // console.log("uploaded", fileURL)
    const fileUpload = (e) => {
        const { files } = e.target;
        fileURL = [];
        // console.log(files);
        document.querySelector("#form1 > div.spinner-border.text-success.ml-2.mb-1.d-none").classList.remove("d-none");
        if (docData.id){
            files.forEach((file, idx)=>{
                let uploading = storage.ref('doc-data/images/').child(`${docData.id}/${idx+1}`).put(file);
                uploading.on('state_changed', ()=>{
                        console.log("Uploading!!")
                    }, e=>{  // error
                        console.log("Error on Uploading", e)
                    }, ()=>{ // complete
                        uploading.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            // console.log('File available at', downloadURL);
                            fileURL.push(downloadURL);
                            // console.log(uploadStatus, files.length, fileURL);
                            setDocData({...docData, img:fileURL});
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
        let { name, value } = e.target;
        value = name==='description' ? value.split(/\r?\n/) : value;
        setDocData({ ...docData, [name]: value });
    }
    const handleTag = (e) => {
        const {value, checked} = e.target;
        let tags = docData.tags || [];
        if (checked) tags.push(value.toLowerCase())
        else { tags= tags.filter(v=>(v!==value))}
        setDocData({...docData, tags});
    }

    // For Top-10 docs
    const handleChange10 = (e) => {
        let { name, value } = e.target;
        value = name==='subDesc' ? value.split(/\r?\n/) : value;
        let subFor = e.target.parentElement.parentElement.getAttribute("data-for");
        let data = {...items[subFor], [name]: value};
        setItems({ ...items, [subFor]:data });
    }
    const fileUpload10 = (e) => {
        const { files } = e.target;
        let imgName = e.target.parentElement.getAttribute("data-for") || e.target.getAttribute("id");
        if (docData.id){
            e.target.nextSibling.nextSibling.classList.remove("d-none");
            let uploading = storage.ref('doc-data/images/').child(`${docData.id}/${imgName}`).put(files[0]);
            uploading.on('state_changed', ()=>{
                console.log('uploading');
                }, e=>{  // error
                    console.log("Error on Uploading", e)
                }, ()=>{ // complete
                    uploading.snapshot.ref.getDownloadURL().then((downloadURL)=>{
                        // console.log('uploaded image', docData);
                        // console.log(items);
                        imgName==='thumbnail' ? setDocData({...docData,thumbnail:downloadURL}) :
                        setItems({...items,[imgName]:{...items[imgName],subImg:downloadURL}});
                    });
                }
            )
        } else {
            alert("Provide Document ID first")
        }
    }
    const addItem = () => {
        if(docData["doc-type"]==="top-10"){
            let newItem = Object.keys(items).length+1;
            setItems({...items, [newItem]:{}})
        }
    }
    const removeItem = () => {
        let rm = String(Object.keys(items).length);
        let oldItems = Object.keys(items).filter(key => key!==rm)
                       .reduce((obj, key) => ({...obj,[key]: items[key]}),{});
        setItems(oldItems);
    }

    // console.log(items, docData);

    return (
        <>
            
          <StyledDiv className="container p-4 z-depth-1 border border-primary rounded">
            <span className="h4 mx-auto w-100">Add a new document</span>
          { !complete ?
            <form className="mt-4 was-validated" id="form1" onSubmit={handleSubmit}>
                <MDBInput label="Document Title" className="bg-white" name="title" outline onChange={handleChange}/>
                <MDBInput label="Unique Document ID" className="bg-white" name="id" outline required onChange={handleChange}/>

                <MDBFormInline className="mb-3" >
                    <span className="mr-4">Tags: </span>
                    {
                        TAGS.map((e, idx)=><MDBInput value={e} label={e} type='checkbox' id={`tag${idx+1}`} containerClass='mr-4'  onChange={handleTag}/>)
                    }
                </MDBFormInline>

                <div class="form-group">
                    <label class="mr-sm-2" for="doc-type">Type of Doc</label>
                    <select name="doc-type" className="custom-select w-50" required onChange={handleChange}>
                        <option value="">Choose an option</option>
                        <option value="compare">Comparision</option>
                        <option value="top-10">Top 10</option>
                    </select>
                    
                    { !docData.thumbnail ? <>
                        <input type="file" id={`thumbnail`} className="d-none" onChange={fileUpload10}/>
                        <label for={`thumbnail`} className="btn btn-primary btn-sm mt-0 ml-4" style={{width: '20%'}}><MDBIcon icon="upload" className="mr-2" />Thumbnail</label>
                        <div className="spinner-border text-success ml-2 mb-1 d-none" role="status">
                        <span className="sr-only">Loading...</span></div></>
                        : //<span className="ml-2 text-info">"Done"</span> 
                        <img id="uploaded-thumbnail" src={docData.thumbnail} />
                    }
                </div>


                { // Upload files Compare section
                docData['doc-type']==='compare' ? <>
                    <div class="custom-file overflow-hidden w-50" >
                        <label class="custom-file-label" for="file-upload">Upload Images</label>
                        <input type="file" class="custom-file-input" id="file-upload" name="file-upload" multiple onChange={fileUpload} />
                    </div>
                    { uploadStatus < 100 ? <div className="spinner-border text-success ml-2 mb-1 d-none" role="status">
                    <span className="sr-only">Loading...</span></div>
                      : <span className="ml-3 text-info">"Done"</span>}
                    <MDBProgress material value={uploadStatus} className="" height="4px"/></>
                : null
                }
            
                <MDBInput type="textarea" label="Description" className="bg-white" name="description" outline rows={10} onChange={handleChange}/>

                <div className="topicItems">
                    {   // Sub Topics here -->
                        docData['doc-type']==='top-10' && Array(Object.keys(items).length).fill().map((i, idx)=>(
                            <div className="clearfix" data-for={idx+1} key={`subKey${idx}`}>
                                <MDBInput label={`Section header ${idx+1}`} className="bg-white" name={`subTitle`} outline value={items[idx+1] ? items[idx+1].subTitle : ""} onChange={handleChange10}/>
                                <div class="md-form md-outline w-75 float-left mt-0">
                                    <textarea data-test="input" name={`subDesc`} rows="6" class="form-control bg-white w-100" aria-disabled="false" onChange={handleChange10} >{items[idx+1] ? items[idx+1].subDesc : ""}</textarea>
                                    <label class="" data-error="" data-success="" id="" aria-labelledby="">{`${idx+1}`}</label>
                                </div>
                                <input type="file" id={`img${idx+1}`} className="d-none" onInput={fileUpload10}/>
                                <label for={`img${idx+1}`} className="btn btn-primary btn-sm mt-0" style={{width: '20%'}}><MDBIcon icon="upload" className="mr-2" />Image Upload</label>
                                { !items[`${idx+1}`].subImg ? <div className="spinner-border text-success ml-2 mb-1 d-none" role="status">
                                                              <span className="sr-only">Loading...</span></div>
                                    : //<span className="ml-2 text-info">"Done"</span> 
                                    <img className="uploaded-img" src={items[`${idx+1}`].subImg} />
                                }
                            </div>
                        ))
                    }
                </div>

                <div className="w-100 d-flex justify-content-center">
                    <MDBBtn color="light-green" className="btn-sm" onClick={addItem}>Add more items</MDBBtn>
                    <MDBBtn color="deep-orange" className="btn-sm" onClick={removeItem}>Delete last item</MDBBtn>
                </div>

                <MDBBtn type="submit">Upload document</MDBBtn>
                

            </form>
            : <span id="sumbit-msg" className="text-success d-block mt-4 text-center">Upload Successful!!! Reload to add another.</span> }
            
          </StyledDiv>
        </>
    )
}

export default AddDocument;

const StyledDiv = styled.div`

    background-color: #f3f8fe;
    min-height: 70vh;

    textarea {
        font-size: 13px;
    }
    .form-check label {
        color: #000;
    }
    #uploaded-thumbnail {
        width: 8em;
        height: 4.5em;
        position: absolute;
        margin-top: -2em;
        padding-left: 10px;
    }
    .uploaded-img {
        width: 11em;
        // height: 4.5em;
        padding-left: 10px;
    }


`
