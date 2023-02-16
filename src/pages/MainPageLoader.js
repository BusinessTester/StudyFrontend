import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { callStorage, listSubject } from '../API/subjectAPI'
import MainPage from './MainPage'

const MainPageLoader = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [success,setSuccess] = useState("")
    const [error,setError] = useState("")
    
    useEffect(()=>{



        listSubject()
        .then(data=>{
            if(!data) {
                
                // return console.log("there was some error with fetching of the data")
                setError(data.error)
                setSuccess("")
            }
            else{
                // dispatch({type:"ADD_SUBJECT",payload:data})
                // navigate("/")
                // console.log(data)
                setError("")
                setSuccess(data)

                callStorage(data)
                if(localStorage.getItem("list")){
                    return navigate("/")
                }
                
                console.log(success)
            }
        })
        .catch(error=>console.log(error))
    },[])
  return (
    <div>
        {/* {success?<MainPage props={success}/>&&navigate("/"):<h6>there seems to be some error, please login after some time or contact the system administrator</h6>
                localStorage.setItem("value1",success)
        
    
    } */}
    Please wait while we fetch the data. If this error persists, contact the system administrator 

   {/* { localStorage.setItem("value1",success)} */}

    </div>
  )
}

export default MainPageLoader