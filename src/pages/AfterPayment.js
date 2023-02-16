import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeStorage } from '../API/userAPI'
import './AfterPayment.css'

const AfterPayment = () => {
  const dispatch = useDispatch()
    useEffect(()=>{
      removeStorage()
      dispatch({type:"DELETE_ALL"})
      
    },[])

    
  return (
    <div className='afterpayment'>
      <div className='afterpayment-box'>
        
        <i class="afterpayment-icon1 bi bi-award text-success"><h4 className='afterpayment-icon1-text text-dark mt-3 fw-bold'>Your request has been successfully sent!!!</h4>
</i>
        <p><h5 className='afterpayment-h6-text fw-bold text-dark mt-3 opacity-100'>Study Materials Team will review the payment and after confirmation, 
        we will send you the links in your email within 24 hours and it will be available in the website within 
        48 hours.</h5></p>
      <button className='afterpayment-btn1 btn btn-success '><Link to='/' className='text-white'>Go to Homepage</Link></button>

      </div>
    </div>
  )
}

export default AfterPayment