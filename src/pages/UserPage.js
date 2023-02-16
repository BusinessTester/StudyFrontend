import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const UserPage = ({props,setInfo}) => {
    // console.log(props)

let dispatch  = useDispatch()
  return (
    <>
    <div className="col">
    <div className="card bg-warning m-2">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">

        {/* <button className='bg-primary' onClick={()=>setInfo(props.name)}>click me please</button> */}
       
        <Link to='/newpage' onClick={()=>{
            localStorage.setItem('data',JSON.stringify(props))
          }}>   
          

        
        
        <h5 className="card-title">Name:{props.name}</h5>

        </Link>
        <h6 className="card-title">Subject:{props.username}</h6>
        <h6 className="card-title">email:{props.email}</h6>
        <h6 className="card-title">phone:{props.phone}</h6>

        <button className='btn btn-primary' onClick={()=>dispatch({type:"ADD_TO_CART", payload:props})} >add to cart</button>


       
       
       
        
        {/* <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
    </>
  )
}

export default UserPage