import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { authenticate, forgotPassword, signInUser } from '../API/userAPI'
// import './SignIn.css'
import './ForgotPassword.css'
import image_forgot from '../images/image_signin.PNG'

const ForgotPassword = () => {
  const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")

  // this is for the display of the success and error while signing up
  const [success,setSuccess] = useState("")
  const [error,setError] = useState("")



  const submitHandler = (event)=>{
    event.preventDefault()
  //good
    forgotPassword(email)
    .then(data=>{
      // console.log(data)
      if(data.error){
        setError(data.error)
        // setSuccess("")
        
      }
      else{
        setSuccess(data.message)
        
        // authenticate(data)
      }
    })
    .catch(error=>console.log(error))

  }


  const showSuccess=()=>{
    if(success){
      return <div className='alert alert-success'>{success}</div>
      
    }
  }


  
  const showError=()=>{
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }



  


  return (
    <div className='forgotpassword fw-bold text-dark'>
    

   {
    showSuccess()
   }

   {showError()}

  
    <form className='form-forgotpassword'> 
    {/* <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
    <h1 className="h3 mb-3 fw-normal text-white ms-3">Please Enter the Email</h1>

   

    <div className="form-floating m-2 ">
      <input type="email" className="form-control text-dark fw-bold" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
      <label for="floatingInput" className='text-dark fw-bold'>Email address</label>
    </div>
    {/* <div className="form-floating m-2">
      <input type="password" className="form-control text-dark fw-bold" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      <label for="floatingPassword" className='text-dark fw-bold'>Password</label>
    </div> */}


   
    <button className="button-forgotpassword btn btn-lg btn-secondary mt-5" type="submit" onClick={submitHandler}>Send the reset link</button>


  </form>


</div>
  )
}

export default ForgotPassword
