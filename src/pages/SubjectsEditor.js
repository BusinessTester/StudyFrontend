import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { addSubject } from '../API/subjectAPI'
import { isAuthenticated } from '../API/userAPI'
import { subjectList } from './SubjectList'

const SubjectsEditor = () => {
const user = isAuthenticated()
const navigate = useNavigate()

// const dispatch  = useDispatch()


    useEffect(()=>{
            if(user.user_info.role!==2){
                navigate('/')
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



//     const [subjecto,setSubject] = useState({id:"",
//     subject:"",
//     field:"",
//     university:"",
//     college:"",
//     level:"",
//     uploader:"",
//     review:"",
//     preview:"",
//     contact:""
    

// })
  
const submitHandler1 = (e)=>{
    e.preventDefault()
    addSubject(subject_code,subject,price,field,university,college,level,uploader,review,preview,contact)
    .then(data=>{
        if(!data){
            return console.log(data.error)
        }
        else{
            console.log("the subject was added successfully")
            // let z = document.getElementById("button1")
            // z.hidden = true
            // console.log(subjecto)
            navigate("/mainpageloader")

        }
    }).catch(err=>console.log(err))
    // return dispatch({type:"ADDITION_SUBJECT", payload:subjecto})
}
  
// const {id,subject,field,university,college,level,uploader,review,preview,contact} = subjecto

    return (
    <div>

        <div className='row'>
            <div className='col col-md-2'>empty space</div>
            <div className='col col-md-4'>this is for the addition form 
            
            <div>

        <form className='form form-container'>
            this is for the addition of subjects form 
            <label>enter the id</label><br/>
            <input className='form-control' type='text' value={subject_code}  onChange={e=>setSubjectCode(e.target.value)} /><br/>

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

            <button onClick={submitHandler1} id="button1">add the subject</button>


        </form>

        </div>
            
            
            </div>

            <div className='col col-md-6'>this is for the second form <br/>
            
            <Link to='/admin/allusers'>
            
             <button className='btn btn-success'>list all the users</button>
            </Link>
            {/* <button className='btn btn-success'></button> */}

            </div>
        </div>
        



    </div>
  )
}

export default SubjectsEditor