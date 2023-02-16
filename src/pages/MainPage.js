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

  const subject_list = releaseStorage()
    //the following states are getting disabled since they are to be further refined before applying again  


     const [searchSubjects,setSearchSubjects] = useState('')
     const [arrange,setArrange]  = useState([])
    //  const [store1,setStore1]  = useState([])
  
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
 
    ,[])
  
  
const submitHandler = (event)=>{
       event.preventDefault()
      
      //  setArrange(store.filter(element=>element.subject.toLowerCase().match(searchSubjects.toString().toLowerCase())))

      // if(store1){
      //   return   setArrange(store1.filter(element=>element.subject.toLowerCase().match(searchSubjects.toString().toLowerCase())))
      // }
      setArrange(subject_list.filter(element=>element.subject.toLowerCase().match(searchSubjects.toString().toLowerCase())))
  
     }

    


// this function is disabled at the moment      
    //  const reloading = ()=>{
    //   setArrange('')
    //  }  
   
  
  
    return (
      <>
      {
        user_presence||subject_list?<div>

<Navbar/>

<div className='row'>
<div className='col col-md-3'><h5 className='text mt-1 text-dark fw-bold ms-2'>Contact Us: 9849632777</h5> 
<h5 className='text-dark fw-bold ms-2'>Email: 123@gmail.com</h5>
</div>
<div className='col col-md-6'>
   <form className="d-flex" role="search">
    <input className="searchbar form-control mt-3" type="search" placeholder="Enter the name of the subject" aria-label="Search"
    onChange={(e)=>setSearchSubjects(e.target.value)}/>
    <button className="button-mainpage btn btn-outline-light btn-primary mt-3" type="submit" onClick={submitHandler}>Search</button>
  </form>
  {/* <button className='btn btn-secondary'>Cart Items</button> */}
</div>
<div className='col col-md-3'>
  {/* <button className='btn btn-success mt-3' onClick={()=>reloading}>reload all subjects</button> */}
</div>
</div>



<div className="mainpage-two row row-cols-md-3 g-4 m-2">
  


{
// store&&
// store1?<>
// {
 
// store1.length>0&&
arrange.map((element,i)=>{
        return <SubjectPage props={element} key={i}/>
    })
    // }
    
    // </>
    
    // :<h4>there is an error, please try again</h4>

}

<h5 className='text text-dark my-auto bg-info'>More Subjects are Coming Soon



</h5>   

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