import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteSubject } from '../API/subjectAPI'
import { isAuthenticated } from '../API/userAPI'
import "./SubjectPage.css"

const SubjectPage = ({props}) => {
    // console.log(props)

    const [id,setId] = useState('')
    const user = isAuthenticated()
    
    const navigate = useNavigate()
    



    const deleteHandler = ()=>{
      deleteSubject(id)
      .then((data)=>{
        if(data.error) return console.log(data.error)
        else{
          navigate('/mainpageloader')

        // return  console.log(data.message)
        }
        
      })
      .catch(err=>console.log(err))
    }


let dispatch  = useDispatch()
  return (
    <>
    <div className="cardo col">
    <div className="card m-3">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body" style={{height:"370px"}}>

        {/* <button className='bg-primary' onClick={()=>setInfo(props.name)}>click me please</button> */}
        {/* <iframe></iframe> */}
       
        {/* <Link to='/newpage' onClick={()=>{
            localStorage.setItem('data',JSON.stringify(props))
          }}>

        
        <h6 className="card-title text-white mx-auto">PREVIEW: {props.preview}</h6>


        </Link> */}
        <a href={`${props.preview}`} className="text-white ms-3 mb-3" target="_blank" rel="noreferrer">CLICK TO PREVIEW</a>
        <h5 className="card-title text-white mx-auto">SUBJECT: {props.subject}</h5>

        <h6 className="card-title text-white ">FIELD:{props.field}</h6>
        <h6 className="card-title text-white ">SubjectCode:{props.subject_code}</h6>

        <h6 className="card-title text-white ">YEAR:{props.year}</h6>
        <h6 className="card-title text-white ">UNIVERSITY:{props.university}</h6>
        <h6 className="card-title text-white ">COLLEGE:{props.college}</h6>
        <h6 className="card-title text-white ">PRICE:NRS {props.price}</h6>

        <h6 className="card-title text-white ">UPLOADER:{props.uploader}</h6>

        {/* <button className='btn btn-primary' onClick={()=>dispatch({type:"ADD_TO_CART", payload:props})}>add to cart</button> */}
        {
  user.user_info.role===2 &&<Link to={`/admin/updatesubject/${props._id}`}><button  className='btn-update-subject btn btn-success mb-2'>
          Update This Subject
          </button></Link> 

}
{/* position-absolute */}
        
        {
          props.price===0?<button className='btn-free btn btn-warning '>This is free</button>: <button className='btn-purchase position-absolute btn btn-primary' 
        onClick={()=>{
         return dispatch({type:"ADD_TO_CART", payload:props})

           }}>
          Click to Buy
          </button>
        }
        

{
  // btn-delete
  user.user_info.role===2 &&<button id='button1-subject-page' className='btn-delete ms-2  btn btn-danger' 
        onClick={()=>{
          setId(props._id)
         return deleteHandler()
        //  dispatch({type:"DELETE_SUBJECT"})

           }}>
          Delete Subject
          </button>

}
          


       
       
       
        
        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
    </>
  )

}

export default SubjectPage