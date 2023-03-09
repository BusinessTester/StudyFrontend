import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { reseterpassword } from '../API/userAPI'
import image1 from '../images/image_signin.PNG'
import './ResetPassword.css'

const ResetPassword = () => {
    const [password,setPassword] = useState("")
  // const [password,setPassword] = useState("")

  // this is for the display of the success and error while signing up
  const [success,setSuccess] = useState("")
  const [error,setError] = useState("")

  
  
  const param = useParams()
 const token = param.token
//  console.log(param)
const navigate = useNavigate()

  const submitHandler = (event)=>{
    event.preventDefault()
    // let inputLength = document.getElementById("floatingInput").value
    if(password.length<6||password===""){
    //  return setError("Enter a valid password of length more than 6 characters")
    return alert("Enter a valid password of length more than 6 characters")
    }
    else{
       reseterpassword(token,password)
    .then(data=>{
        if(data.error){
            setError(data.error)
            setSuccess("")
            // console.log(data.error)
        }
        else{
            setSuccess(data.message)
            setError("")
            // console.log(data.message)
            

        }
    })
    .catch(error=>console.log(error))
    }
   
  
   

  }


  const showSuccess=()=>{
    if(success){
       <div className='alert alert-success'>{success}</div>
         return navigate("/signin")
            
    }
  }


  
  const showError=()=>{
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }



  


  return (
    <div className='resetpassword fw-bold text-dark' style={{backgroundImage:{image1}}}>
    

   {
    showSuccess()
   }

   {showError()}

  
    <form className='form-resetpassword'> 
    {/* <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
    <h1 className="h3 mb-3 fw-normal text-white">Enter New Password</h1>

   

    <div className="form-floating m-2 ">
      <input type="password" className="form-control text-dark fw-bold" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setPassword(e.target.value)}/>
      <label for="floatingInput" className='text-dark fw-bold'>New Password</label>
    </div>
    {/* <div className="form-floating m-2">
      <input type="password" className="form-control text-dark fw-bold" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      <label for="floatingPassword" className='text-dark fw-bold'>Password</label>
    </div> */}


   
    <button className="button-signin w-30 btn btn-lg btn-primary mt-4 ms-5" type="submit" onClick={submitHandler}>Submit Request</button>


  </form>


</div>
  )
}

export default ResetPassword
