import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'   
import qresewa from '../src/images/Snip2.PNG'                      
import { isAuthenticated } from './API/userAPI'
import { useNavigate } from 'react-router'

const Tester = () => {
 
const user_profile = isAuthenticated()
const navigate = useNavigate()

const [obj,setObj] = useState({naming:"",age:""})

console.log(user_profile)
useEffect(()=>{
  if(user_profile.user_info.role!==2){
    navigate("/")
}
},[])


const something = ()=>{
  "this is something to be displayed "
}




  const listo = ['momo','chowemin', 'noodles','hero']

  const [searchSubjects,setSearchSubjects] = useState('')
    const [arrange,setArrange]  = useState([])

    useEffect(()=>{
      setArrange(listo.filter((element)=>{return element.toLowerCase().match(searchSubjects.toString().toLowerCase())}))
    
    },[])
    

    const submitHandler = (event)=>{
      event.preventDefault()
      
  
      setArrange(listo.filter((element)=>{return element.toLowerCase().match(searchSubjects.toString().toLowerCase())}))
  
  
    }

   const amazing =  setTimeout(() => {
      something()
      
    }, 300)

let p = [1,2,3,4] + [5,6,78,1,2]
console.log(p)
let val = [{}]

const submitHandler1=(e)=>{
  e.preventDefault()
  if(!obj){
    return false
  }
 return val.push(obj)&& console.log(val)

}



  return (
    <>
    {
    console.log(amazing)
    }
    <form className="d-flex" role="search">
          <input className="form-control me-2 bg-info" type="search" placeholder="Search" aria-label="Search"
          onChange={(e)=>setSearchSubjects(e.target.value)}/>
          <button className="btn btn-outline-light btn-primary" type="submit" onClick={submitHandler}>Search</button>
        </form>
    {
      listo.map((element,i)=><ul><li key={i}>{element}</li></ul>)
    }
    {/* <Navbar/> */}
    
    This will be the page where the testing of everything goes and 

    {/* <!-- Button trigger modal --> */}

    <div className="bottom button">
       
       <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
           Make Payment
       </button>

   </div>

  
   <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                   <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                       <div className="modal-content">
                           <div className="modal-header">
                               <h5 className="modal-title" id="exampleModalLabel">Esewa Link</h5>
                               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <div className="modal-body">
                             
                              <img alt='image-qrcode' src={qresewa}/>
                              
       
                           </div>
                           <div className="modal-footer">
                               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                               {/* <button type="button" className="btn btn-primary">Confirm Reservations</button> */}
                           </div>
                       </div>
                   </div>
               </div>



<div> 



  this is for the testing of the push and pop functions   

  <form className='form form-control'>
    <input type='text' placeholder='name' onChange={(e)=>{setObj({...obj,naming:e.target.value})}}/>
    <input type='number' placeholder='age' onChange={(e)=>{setObj({...obj,age:e.target.value})}}/>
    <button className='btn btn-success' onClick={submitHandler1}>click here for the pushing process</button>
    
  </form>         
</div>
    
    
    </>
  )
}

export default Tester