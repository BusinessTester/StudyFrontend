import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate }from 'react-router-dom'
import { isAuthenticated, logOut, myPurchases } from '../API/userAPI'
import amazing from '../images/1.PNG'
import './Navbar.css'
import qresewa from '../images/Snip2.PNG'


const Navbar = () => {
  const data1 = useSelector(store=>store.SecondRed)
  let data = [...new Set(data1.map(element=>element))]
  let cart_length = data.length


// this is to get the length of the procure 
const [procure,setProcure] = useState('')


  // this is for fetching the data from the localstorage and using the information to welcome the user

  const userInfo = isAuthenticated()
  console.log(userInfo)

  
 



  const logOutHandler = ()=>{
    logOut()
    .then(data=>{
      if(data.error){
        console.log(data.error)

      }
      else{
        <Navigate to='/signin'></Navigate>
      }
    })
  }

  useEffect(()=>{
    if(userInfo){
      

      myPurchases(userInfo.user_info._id)
      .then(data=>{
          if(!data) {console.log('there was an error')}
          else{
              setProcure(data)
  
          }
      })

    }
  },[])
  console.log(procure)




  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-success rounded m-1">
  <div className="container-fluid">
 
    <img className='rounded me-2' src={amazing} height={'60px'} width={'100px'}/>
    
    <Link className="navbar-title navbar-brand text-white" to="/">Study Materials</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <button className='btn btn-primary pill-rounded '> */}
<Link className="navbar-mynotes nav-link active text-white position-relative" aria-current="page" to={`/purchases/${userInfo.user_info._id}`}>My Notes
          {
            procure?<span className='navbar-badge-length badge badge-dark position-absolute top-0 bg-warning text-dark'> {procure.length}</span>:<span className='badge badge-dark position-absolute top-0'> 0 </span>  
          }
          
          </Link>

          {/* </button> */}
          
        </li>
        
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fields
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Subject1</Link></li>
            <li><Link className="dropdown-item" to="#">Subject2</Link></li>
            <li><Link className="dropdown-item" to="#">Subject3</Link></li>
          </ul>
        </li> */}
        {/* this has been disbled for the time being and we can resume it once we have all the data  */}


        
        
      </ul>


      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className="nav-item text-white fw-bold">
       {/* Ph: 9849632777 / studymaterials@gmail.com */}
       
        </li></ul>
     

      <ul className="navbar-nav mr-4">
      <li className="nav-item d-flex">

        {
userInfo?<ul className='navbar-nav '>
  <li className="navbar-info  nav-item d-flex">

     <i class="navbar-icon-person bi bi-person-check-fill text-white mt-3 me-3"></i>
     <h6 className='navbar-text-name text text-white mt-3'>{userInfo.user_info.username}</h6>
  <h3 className='m-2 '></h3>

  <Link className='navbar-logout login nav-link text-white mt-2' to='/signin'> <i class="bi bi-box-arrow-right text-white mt-4 me-3" onClick={logOutHandler}>Log Out</i></Link>
  {/* <button className='btn btn-warning btn-sm rounded'> */}
     {/* <button className='btn text-white rounded mt-2' data-bs-toggle="modal" data-bs-target='#exampleModal' title='Fonepay with esewa or khalti'> */}
      <i class="navbar-icon-cash bi bi-cash-coin fw-bold me-3 font-lg mt-3" data-bs-toggle="modal" data-bs-target='#exampleModal'></i>

      
     
     {/* <span>Buy</span> */} 
     {/* </button> */}


     {/* this is the commencement of the modal */}

     <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                   <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                       <div className="modal-content">
                           <div className="modal-header">
                               <h5 className="modal-title text-dark fw-bold" id="exampleModalLabel">Call Us At 9849632777 to Complete This Payment Process</h5>
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

     {/* this is the end of modal */}
  {/* </button> */}

 
 
  </li>
 

  
  </ul>:
  <ul>
  <li className="nav-item d-flex">
  <Link className='login nav-link text-white' to='/signin'>Login <i class="bi bi-box-arrow-in-right"></i></Link>
          <h3>/</h3>
        <Link className='login nav-link text-white' to='/signup'>SignUp </Link>

  </li>

  

        
        </ul>
      
      
      }

        

          <Link className="nav-link text-white position-relative mt-2" to="/cart"><i className="navbar-icon-cart bi bi-cart "><span className='navbar-icon-badge badge badge-warning bg-warning position-absolute top-0 text-dark'>{cart_length}</span></i></Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    
    
    
    
    </>
  )
}

export default Navbar