import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { confirmationUser } from '../API/userAPI'

const Confirmation = () => {
    const [error,setError]= useState("")
    const [success,setSuccess]= useState("")


    const navigate = useNavigate()


    const value = useParams()
    console.log(value)
    const token  = value.token

    useEffect(()=>{
        confirmationUser(token)
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
    },[value])
// const waitSuccess = setTimeout(()=>{
//     navigate('/signin')
// },2000)


const showSuccess = ()=>{
    if(success){
      return  <div className='alert alert-success'>{success}</div> && navigate('/signin')
         
    }
}

const showError = ()=>{
    if(error){
        return <div className='alert alert-success'>{error}</div>
    }
}

  return (
    <div>
        {showSuccess()}
        {showError()}
        
    </div>
  )
}

export default Confirmation