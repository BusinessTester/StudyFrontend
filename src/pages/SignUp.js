import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registeration } from '../API/userAPI'

import image_signup from '../images/image_signup.PNG'

import './SignUp.css'

const SignUp = () => {

  {/* now is the time to introduce the states for the registeration of the names, emails and other things */}

  
  const [email,setEmail]= useState("")
  const [name,setName]= useState("")
  const [phone,setPhone]= useState("")
  const [age,setAge]= useState("")
  const [userName,setUserName]= useState("")
  const [password,setPassword]= useState("")
  const [purchases,setPurchases] = useState([{subject:"Name of the subject ",subject_code:" code of the subject", subject_link:"#"}])


{/* for the display of the errors */}
const [error,setError]= useState("")
const [success,setSuccess]= useState("")


// for the declaration and use of the navigate state
const navigate = useNavigate()


const submitHandler= (event)=>{
  event.preventDefault()
  registeration(name,userName,age,phone,email,password,purchases)
  .then(data=>{
    console.log(data)
    if(data.error){
      // setError('something went wrong while signing up. If this persists, contact us')
      setError(data.error)
      setSuccess("")
    }
    else{
      setSuccess("User registeration is complete. A verification link has been sent in the email")
      setError("")
      // navigate("/signin")
    }
  })
  .catch(error=>console.log(error))

}



const showSuccess = ()=>{
  if(success){

    <div className='alert alert-success'>{success}</div>
    return navigate('/signup-success')
  }
}


const showError = ()=>{
  if(error){
   return <div className='alert alert-danger'>{error}</div>
  }
}
  return (
    <div className='signup' style={{'backgroundImage':`url(${image_signup})`}}>
    
    {/* username  */}
    {/* email  */}
    {/* password */}

    {showSuccess()}
    {showError()}
   

   
  

    
    <form className='form-signup fw-bold text-dark'>
    {/* <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
    <h1 className="h3 mb-2 fw-bold text-white">Please sign up (*Required Fields)</h1>


    {/* i have decided to make use of the grid property to split the signup page into 2 halves atleast */}
    <div className='row'>
    <div className='col col-sm-0 col-md-1'>

    </div>
    <div className='col col-12 col-md-5'>
      <div className="form-floating m-2">
      <input type="name" className="form-control" id="floatingName" placeholder="Full Name*" 
      onChange={e=>setName(e.target.value)}/>
      <label for="floatingName">Full Name*</label>
      </div>


      <div className="form-floating m-2">
      <input type="name" className="form-control" id="floatingName" placeholder="UserName*" onChange={e=>setUserName(e.target.value)}/>
      <label for="floatingName">UserName*</label>
      </div>


      <div className="form-floating m-2">
      <input type="Number" className="form-control" id="floatingName" placeholder="Age*" 
      onChange={e=>setAge(e.target.value)}/>
      <label for="floatingName">Age*</label>
    
    </div>


    
    </div>
    <div className='col  col-12 col-md-5'>


    <div className="form-floating m-2">
      <input type="tel" className="form-control" id="floatingName" placeholder="Phone*" 
      onChange={e=>setPhone(e.target.value)}/>
      <label for="floatingName">Phone*</label>
    </div>
    <div className="form-floating m-2">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com*" onChange={e=>setEmail(e.target.value)}/>
      <label for="floatingInput">Email address*</label>
    </div>


    <div className="form-floating m-2">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password*" onChange={e=>setPassword(e.target.value)}/>
      <label for="floatingPassword">Password*</label>
    </div>


    </div>
    {/* <div className='col col-md-1 fw-bold text-white'>*Required Fields</div> */}
<button className="signup-button btn-large btn-primary text-white" type="submit" onClick={submitHandler}>Sign Up</button>
    <p className="paragraph-signup text-white">Already have an account. <Link to='/signin'>
      <button className='text-white'>Sign In</button></Link> 
      </p>
      
   </div>

  

   
    

  </form>


    
    
    
    
    </div>
  )
}

export default SignUp
