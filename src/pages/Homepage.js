import React, { useEffect, useState } from 'react'
import { data } from '../Reducer'
import { userInfo } from '../reducers/reducerApi'
import UserPage from './UserPage'
import { useDispatch, useSelector } from 'react-redux'





const Homepage = () => {
  const [info,setInfo] = useState(null)

  
  //the following states are getting disabled since they are to be further refined before applying again  
  // const [searchSubjects,setSearchSubjects] = useState(null)
  // const [arrange,setArrange]  = useState([])

  const dispatch = useDispatch()

  const store = useSelector(state=>state.FirstRed)
  console.log(store)
  

 



  useEffect(()=>{
    userInfo().then(data=>{
      (!data)? <div><h3>there seems to be an error in fetching data</h3></div>:dispatch({type:"SHOW_USER",payload:data})
      
    }

      )
      // if(store){
      //   setArrange(store.filter(element=>{return element.name.toLowercase().match(searchSubjects.toString().toLowercase())}))
      // }




   
  },[dispatch])


  // const submitHandler = (event)=>{
  //   event.preventDefault()
    
  //   setArrange(store.filter(element=>{return element.name.toLowercase().match(searchSubjects.toString().toLowercase())}))


  // }

 


  return (
    <>
    {/* this is the homepage for the application */}
     {/* <form className="d-flex" role="search">
        <input className="form-control me-2 bg-info" type="search" placeholder="Search" aria-label="Search"
        onChange={(e)=>setSearchSubjects(e.target.value)}/>
        <button className="btn btn-outline-light btn-primary" type="submit" onClick={()=>submitHandler}>Search</button>
      </form> */}
    <div className="row row-cols-1 row-cols-md-3 g-4 bg-dark m-2">
      

 {
  store&&
        store.map((element,i)=>{
            return <UserPage props={element} key={i} setInfo= {setInfo}/>
        })
    }

    </div>
    
   
     </>
  )
}

export default Homepage