import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { authenticate, resendingConfirmation, signInUser } from '../API/userAPI'
import Footer from '../components/Footer'

import image_signin from '../images/image_signup.png'
import './SignIn.css'

const ResendConfirm = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")




  // this is for the display of the success and error while signing up
  const [success,setSuccess] = useState("")
  const [error,setError] = useState("")


  const submitHandler = (event)=>{
    event.preventDefault()

    resendingConfirmation(email,password)
    .then(data=>{
      // console.log(data)
      if(data.error){
        setError(data.error)
        
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
    //    <Navigate to='/mainpageloader'></Navigate> 
      return <div className='alert alert-success'>{success}</div>
    }
  }


  
  const showError=()=>{
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }






  return (
    <>
    
     <div className='signin d-flex fw-bold text-dark' style={{backgroundImage:`url(${image_signin})`}}>
    
 

   {
    showSuccess()
   }

   {showError()}

  
    <form className='form-signin'> 
    {/* <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
    <h3 className="fw-normal text-white">Enter Valid Details used for Signup</h3>

    {/* <div className="form-floating m-2">
      <input type="name" className="form-control" id="floatingName" placeholder="Name"/>
      <label for="floatingName">Name</label>
    </div> */}

    <div className="form-floating m-2 ">
      <input type="email" className="form-control text-dark fw-bold" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
      <label for="floatingInput" className='text-dark fw-bold'>Email address</label>
    </div>
    <div className="form-floating m-2">
      <input type="password" className="form-control text-dark fw-bold" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      <label for="floatingPassword" className='text-dark fw-bold'>Password</label>
    </div>
{/* <input type='checkbox' onclick={}/>Show Password */}
    {/* <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div> */}

   
    <button className=" w-30 btn btn-primary mt-2" type="submit" onClick={submitHandler}>Send Verification Link</button>


    
    <p className="paragraph-signin text-white"> Don't have an account? <Link to='/signup'>
      <button className='btn btn-primary'>Sign Up</button>
      </Link> </p>

<span><p className="paragraph-signin text-white">Have an Account? <Link to='/signin' className='signin-forgot text-white'><button className='btn btn-primary mb-2'>Signin</button> </Link>  </p>  </span>
    


  </form>
{/* <button onclick={showPassword}>show password</button> */}

{/* right now i am not working on displaying the password  */}

{/* <div>
  <img src={budiii} alt='anything' className='image-signin'/>
</div> */}


</div>
<Footer/>
    </>
   
  )
}

export default ResendConfirm