import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { authenticate, signInUser } from '../API/userAPI'
import Footer from '../components/Footer'

import image_signin from '../images/1_blur.png'
import './SignIn.css'

const SignIn = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")




  // this is for the display of the success and error while signing up
  const [success,setSuccess] = useState(false)
  const [error,setError] = useState("")


  // for the display and hiding of the password
  const [display,setDisplay] = useState(false)
  let vision = 'password'

  const submitHandler = (event)=>{
    event.preventDefault()
  
    signInUser(email,password)
    .then(data=>{
      // console.log(data)
      if(data.error){
        setError(data.error)
        
      }
      else{
        setSuccess(true)
        authenticate(data)
      }
    })
    .catch(error=>console.log(error))

  }


  const showSuccess=()=>{
    if(success){
      return <Navigate to='/mainpageloader'></Navigate> 
    }
  }


  
  const showError=()=>{
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }



  // this is to show or hide the password 
  // const showPassword = ()=>{
  //   let displayer = document.getElementById("floatingPassword")

  //   if(displayer.type==="password"){
  //     return displayer.type = "text"
  //   }
  //   else{
  //     return displayer.type="password"
  //   }
  // }
// this method did not work, so i will try to utilize the state method to change the values 
// const showPassword = (event)=>{
//   event.preventDefault()
//   setDisplay(true)
//   vision="text"
//   if(display=false){
//     vision="password"
//   }

// }
  
  const passHandler = (e)=>{
e.preventDefault()
const z = document.getElementById("floatingPassword")

if(z.type==="password"){
  z.type = "text"
}
else{
  z.type = "password"
}
}


  return (
    <>
      {
    showSuccess()
   }

   {showError()}
     <div className='signin d-flex fw-bold text-dark' style={{backgroundImage:`url(${image_signin})`}}>
    
    {/* username  */}
    {/* email  */}
    {/* password */}
   {/* states are created for taking in email and password from the user */}

 

  
    <form className='form-signin'> 
    {/* <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
    <h1 className="h3 mb-3 fw-normal text-white">Please sign In</h1>

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
      <button className='btn btn-success' onClick={passHandler}>Show Password</button>

    </div>
{/* <input type='checkbox' onclick={}/>Show Password */}
    {/* <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div> */}

   
    <button className="button-signin w-30 btn btn-lg btn-primary" type="submit" onClick={submitHandler}>Sign In</button>
    <p className="paragraph-signin text-white"> Don't have an account? <Link to='/signup'>
      <button className='btn btn-primary'>Sign Up</button>
      </Link> </p>

      <Link to='/signin-forgotpassword' className='signin-forgot text-white m-2 mb-2 p-2'>Forgot Password? Reset the Password</Link>


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

export default SignIn
