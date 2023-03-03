// import React from 'react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { addSubject, editingSubject, extractDetail } from '../API/subjectAPI'
import { isAuthenticated } from '../API/userAPI'
import { subjectList } from './SubjectList'

const UpdateSubject = () => {

    const paramecia = useParams()

    // console.log(paramecia)

    const ameoba = paramecia.id



    // start

const user = isAuthenticated()
const navigate = useNavigate()

const [old,setOld] = useState("")

    useEffect(()=>{
            if(user.user_info.role!==2){
                navigate('/')
            }
            else{
                extractDetail(ameoba)
                .then(data=>{
                    if(data.error) return console.log("there was an error while fetching")
                    else{
                        console.log(data)
                        setOld(data)
                    }
                })
            }
    },[])
    const [subject_code,setSubjectCode] = useState("")
    const [subject,setSubject] = useState("")
    const [price,setPrice] = useState("")

    const [field,setField] = useState("")
    const [university,setUniversity] = useState("")
    const [college,setCollege] = useState("")
    const [level,setLevel] = useState("")
    const [uploader,setUploader] = useState("")
    const [review,setReview] = useState("")
    const [preview,setPreview] = useState("")
    const [contact,setContact] = useState("")




  
const submitHandler1 = (e)=>{
    e.preventDefault()
    editingSubject(ameoba,subject_code,subject,price,field,university,college,level,uploader,review,preview,contact)
    .then(data=>{
        if(!data){
            return console.log(data.error)
        }
        else{
            console.log("the subject was updated successfully")
            alert("the subject has been updated successfully")
            
            navigate("/mainpageloader")

        }
    }).catch(err=>console.log(err))
    // return dispatch({type:"ADDITION_SUBJECT", payload:subjecto})
}
// finish
  return (
    <div>This is for updating the subject

<div className='row'>
            <div className='col col-md-2'>empty space</div>
            <div className='col col-md-4'>    this is for updating the subject
            
            <div>
                <br/>

        <form className='form form-container'>
        
            <label>enter the id or the subject code</label><br/>
            <input className='form-control' type='text' value={subject_code} onChange={e=>setSubjectCode(e.target.value)} /><br/>

            <label>enter the name of the subject</label><br/>
            <input className='form-control' type='text' value={subject} onChange={e=>setSubject(e.target.value)}/><br/>
            
            <br/>
            <label>enter the price</label><br/>
            <input className='form-control' type='number' value={price} onChange={e=>setPrice(e.target.value)}/><br/>
            
            <br/>
            <label>enter the name of the field</label><br/>
            <input className='form-control' type='text' value={field} onChange={e=>setField(e.target.value)}/><br/>
            
            
            <br/>

            <label>enter the name of the university</label><br/>
            <input className='form-control' type='text' value={university} onChange={e=>setUniversity(e.target.value)}/><br/>


            <label>enter the name of the college</label><br/>
            <input className='form-control' type='text' value={college} onChange={e=>setCollege(e.target.value)}/><br/>


            <label>enter the name of the level</label><br/>
            <input className='form-control' type='text' value={level} onChange={e=>setLevel(e.target.value)}/><br/>

            <label>enter the name of the uploader</label><br/>
            <input className='form-control' type='text' value={uploader} onChange={e=>setUploader(e.target.value)}/><br/>


            <label>enter the review</label><br/>
                <textarea className='form-control' rows='5' cols='60' value={review} onChange={e=>setReview(e.target.value)}></textarea>
            {/* <input className='form-control' type='text' defaultValue='N/A'/><br/> */}

            <label>enter the name of the preview</label><br/>
            <input className='form-control' type='text' value={preview} onChange={e=>setPreview(e.target.value)}/><br/>

            <label>enter the name of the contact</label><br/>
            <input className='form-control' type='text' value={contact} onChange={e=>setContact(e.target.value)}/><br/>

            <button onClick={submitHandler1} id="button1" className='btn btn-success'>Update Subject</button>


        </form>

        </div>
            
            
            </div>

            <div className='col col-md-6'>these are the old values in the form
            <form className='form form-container'>
           <br/>
            <label>enter the id</label><br/>
            <input className='form-control' type='text' value={old.subject_code} readOnly /><br/>

            <label>enter the name of the subject</label><br/>
            <input className='form-control' type='text' value={old.subject} readOnly/><br/>
            
            <br/>
            <label>enter the price</label><br/>
            <input className='form-control' type='number' value={old.price} readOnly/><br/>
            
            <br/>
            <label>enter the name of the field</label><br/>
            <input className='form-control' type='text' value={old.field} readOnly/><br/>
            
            
            <br/>

            <label>enter the name of the university</label><br/>
            <input className='form-control' type='text' value={old.university} readOnly/><br/>


            <label>enter the name of the college</label><br/>
            <input className='form-control' type='text' value={old.college}readOnly/><br/>


            <label>enter the name of the level</label><br/>
            <input className='form-control' type='text' value={old.level} readOnly/><br/>

            <label>enter the name of the uploader</label><br/>
            <input className='form-control' type='text' value={old.uploader} readOnly/><br/>


            <label>enter the review</label><br/>
                <textarea className='form-control' rows='5' cols='60' value={old.review} readOnly></textarea>
            {/* <input className='form-control' type='text' defaultValue='N/A'/><br/> */}

            <label>enter the name of the preview</label><br/>
            <input className='form-control' type='text' value={old.preview} readOnly/><br/>

            <label>enter the name of the contact</label><br/>
            <input className='form-control' type='text' value={old.contact} readOnly/><br/>

            {/* <button onClick={submitHandler1} id="button1">Update Subject</button> */}


        </form>
            
            
            <br/>
           
           
            </div>
        </div>





    </div>
  )
}

export default UpdateSubject