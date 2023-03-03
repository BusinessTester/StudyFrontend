import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeStorage } from '../API/userAPI'
import './AfterPayment.css'

const SignupSuccess = () => {
 

    
  return (
    <div className='afterpayment'>
      <div className='afterpayment-box'>
        
        <i class="afterpayment-icon1 bi bi-award text-success"><h4 className='afterpayment-icon1-text text-dark mt-3 fw-bold'>Please Verify The Entered Email</h4>
</i>
        <p><h5 className='afterpayment-h6-text fw-bold text-dark mt-3 opacity-100'>Verify by going to your email and clicking on the link that we have sent you. After successful verification. Signin to the website</h5></p>

<div className='d-flex fw-bold'><h5 className='text-dark fw-bold'>Didn't receive Verification link? </h5><button className='btn btn-warning text-dark fw-bold'><Link to='/resendconfirmation' className='text-dark fw-bold'> Resend Confirmation</Link></button> 
     </div>
       
       <button className='afterpayment-btn1 btn btn-success '><Link to='/signin' className='text-white'>SignIn</Link></button>
      </div>
    </div>
  )
}

export default SignupSuccess