import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Packages from '../components/Packages'
import SubjectPage from './SubjectPage'
import './MainPage.css'
import Navbar from '../components/Navbar'
import { isAuthenticated, removeStorage } from '../API/userAPI'
import SignIn from './SignIn'
import Footer from '../components/Footer'
import { listSubject, releaseStorage } from '../API/subjectAPI'


const MainPage = () => {
    // const [info,setInfo] = useState(null)
  const user_presence = isAuthenticated()
const [valuator,setValuator] = useState("")
  const subject_list = releaseStorage()
    //the following states are getting disabled since they are to be further refined before applying again  


     const [searchSubjects,setSearchSubjects] = useState('')
     const [arrange,setArrange]  = useState([])
    //  const [store1,setStore1]  = useState([])
    const [limit,setLimit] = useState(12)
    const dispatch = useDispatch()
  
    const store = useSelector(state=>state.SubjectRed)
    // console.log(store)
    let cart1 = useSelector(store=>store.SecondRed)
    let cart = [...new Set(cart1.map(element=>element))]


 
    const navigate = useNavigate()

   
    useEffect(()=>{

      if(!subject_list){
        return navigate("/signin")
      }

removeStorage()
return   setArrange(subject_list.filter(element=>element.subject.toLowerCase().match(searchSubjects.toString().toLowerCase())))






    }
 
    ,[searchSubjects])
  
  
const submitHandler = (event)=>{
       event.preventDefault()
      
      //  setArrange(store.filter(element=>element.subject.toLowerCase().match(searchSubjects.toString().toLowerCase())))

      // if(store1){
      //   return   setArrange(store1.filter(element=>element.subject.toLowerCase().match(searchSubjects.toString().toLowerCase())))
      // }
      setArrange(subject_list.filter(element=>element.subject.toLowerCase().match(searchSubjects.toString().toLowerCase())))
  
     }

    const submitComputer=(event)=>{
      event.preventDefault()
      setArrange(subject_list.filter(element=>element.field.toLowerCase().match("computer")))

    }

    const submitEngineering = (event)=>{
      event.preventDefault()

// console.log(valuator)
      setArrange(subject_list.filter(element=>element.field.toLowerCase().match("engineering")))

    }

// this function is disabled at the moment      
    //  const reloading = ()=>{
    //   setArrange('')
    //  }  
   
    
     const submitTU=(event)=>{
      event.preventDefault()
      setArrange(subject_list.filter(element=>element.university.toLowerCase().match("tu")))

    }
  
  
    return (
      <>
      {
        user_presence||subject_list?<div>

<Navbar/>

<div className='row'>
<div className='col col-md-2'>
</div>
<div className='col col-md-6'>
   <form className="d-flex" role="search">
    <input className="searchbar form-control mt-3" type="search" placeholder="Enter the name of the subject" aria-label="Search"
    onChange={(e)=>setSearchSubjects(e.target.value)}/>
    <button className="button-mainpage btn btn-outline-light btn-primary mt-3" type="submit" onClick={submitHandler}>Search</button>
  </form>
  {/* <button className='btn btn-secondary'>Cart Items</button> */}
</div>
<div className='col col-md-4 mt-3' >
  {/* <button className='btn btn-success mt-3' onClick={()=>reloading}>reload all subjects</button> */}
  <h5 className='text mt-1 text-dark fw-bold ms-1'><i class="bi bi-telephone-fill  bg-warning"> 9820135187</i></h5> 
<h5 className='text-dark fw-bold ms-1'><i class="bi bi-envelope-check-fill bg-warning text-lg text-dark"> StudyMaterialsNepal@gmail.com</i></h5>
</div>
<span>
<button className='btn btn-success me-3'>Subjects Wise:</button>
 

  {/* <h6>Filters</h6> */}
 <button onClick={submitHandler} className="btn btn-primary ms-2">All Subjects</button>   


</span>
<span><button className='btn btn-success me-3'>Fields Wise:</button><button className="btn btn-primary"  onClick={submitEngineering}>Engineering</button><button onClick={submitComputer} className="btn btn-primary m-1">Computer</button>
   



</span>
<span><button className='btn btn-success me-3 mt-2'>University Wise:</button>
<button className="btn btn-primary ms-2" onClick={submitTU}>TU</button> <button className="btn btn-primary">PU</button>


</span>

</div>



<div className="mainpage-two row row-cols-md-3 g-4 m-2">
  


{
// store&&
// store1?<>
// {
 
// store1.length>0&&
arrange.slice(0,limit).map((element,i)=>{
        return <SubjectPage props={element} key={i}/>
    })
    // }
    
    // </>
    
    // :<h4>there is an error, please try again</h4>

}

{/* <h5 className='text text-dark my-auto bg-info'>More Subjects are Coming Soon



</h5>    */}
<div className=' mainpage-contact-text fw-bold'>
<h4 className='text text-white mt-5 fw-bold'>More Materials are coming soon</h4>
<h4 className='text text-white mt-5 fw-bold'>Contact Us at: 9820135187</h4>
<h4 className='text text-white mt-5 fw-bold'>Or</h4>
<h4 className='text text-white mt-5 fw-bold'>Email Us at: StudyMaterialsNepal@gmail.com </h4>





</div>

{limit<arrange.length?<button onClick={()=>{setLimit(limit+3)}} className="btnshow btn btn-success">Show More</button>:<h4 className='text text-white mt-5'>All Items have been Loaded</h4>}

</div> 

{/* <Packages/> */}

<Footer/>

{/* <div className='rounded'> */}
{
cart.length>0&&<Link className="text-dark position-fixed top-50 start-10" to="/cart">

<button type="button" class="button1-mainpage btn btn-success btn-lg position-relative">
<i className="bi bi-cart">My Items</i>
<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
{cart.length}
<span class="visually-hidden">unread messages</span>
</span>

</button>

</Link> 
}




{/* </div>       */}
          
        </div>:navigate('/signin')
      }
     
     
       </>
    )
  }

export default MainPage
