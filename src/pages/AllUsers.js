import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { isAuthenticated, totalUsers } from '../API/userAPI'
import { data } from '../Reducer'

const AllUsers = () => {
const user_presence = isAuthenticated()
// console.log(user)

const [users,setUsers] = useState("")
const navigate = useNavigate()




  const [naming,setNaming] = useState("")
  const [userName,setUserName] = useState("")
  const [phoning,setPhoning] = useState("")
  const [email,setEmail] = useState("")




  const [profiles,setProfiles] = useState([])

useEffect(()=>{
    let a = document.getElementById("submitHandler2")

if(user_presence.user_info.role!=2) return navigate("/")

else{

totalUsers().then(data=>{
    if(data.error) return console.log(data.error)
    else{
        setUsers(data)
       setProfiles(users.filter(element=>element.name.toLowerCase().match(naming.toString().toLowerCase())))
       setProfiles(users.filter(element=>element.email.toLowerCase().match(email.toString().toLowerCase())))
       a.hidden = false

    }
}
    
    
    )
    .catch(error=>console.log(error))


}
        


    },[naming,email])


    const submitHandler1 = (event)=>{
        event.preventDefault()

        setProfiles(users.filter(element=>element.name.toLowerCase().match(naming.toString().toLowerCase())))
  
    }

    const submitHandler2 = (event)=>{
        event.preventDefault()

         setProfiles(users.filter(element=>element.username.toLowerCase().match(userName.toString().toLowerCase())))  
        


    }
    const submitHandler3 = (event)=>{
        event.preventDefault()
        setProfiles(users.filter(element=>element.email.toLowerCase().match(email.toString().toLowerCase())))


    }
    const submitHandler4 = (event)=>{
        event.preventDefault()
        setProfiles(users.filter(element=>element.phone.match(phoning)))


    }

  return (
    <div>
       

   {
    users?<div>This page lists out all the users 

         <form className=" container d-flex mb-3" role="search">
    <input className="searchbar form-control mt-3" type="search" placeholder="Enter the name of person" aria-label="Search"
    onChange={(e)=>setNaming(e.target.value)}/>
    <button className="button-mainpage btn btn-outline-light btn-info mt-3" type="submit" onClick={submitHandler1}>NameSearch</button>
  </form>

  <form className=" container d-flex mb-3" role="search">
    <input className="searchbar form-control mt-3" type="search" placeholder="Enter the username" aria-label="Search"
    onChange={(e)=>setUserName(e.target.value)}/>
    <button className="button-mainpage btn btn-outline-light btn-warning mt-3" type="submit" onClick={submitHandler2} id="submitHandler2" hidden>UserNameSearch</button>
  </form>

  <form className=" container d-flex mb-3" role="search">
    <input className="searchbar form-control mt-3" type="search" placeholder="Enter the email" aria-label="Search"
    onChange={(e)=>setEmail(e.target.value)}/>
    <button className="button-mainpage btn btn-outline-light btn-success mt-3" type="submit" onClick={submitHandler3}>EmailSearch</button>
  </form>

  <form className=" container d-flex mb-3" role="search">
    <input className="searchbar form-control mt-3" type="search" placeholder="Enter the phone" aria-label="Search"
    onChange={(e)=>setPhoning(e.target.value)}/>
    <button className="button-mainpage btn btn-outline-light btn-primary mt-3" type="submit" onClick={submitHandler4}>PhoneSearch</button>
  </form>


<table className='mynotes-table table table-striped table-bordered' >
      <thead className='table table-warning'><tr>
        <td className='fw-bold text-dark'>Full Name</td>
        <td className='fw-bold text-dark'>UserName</td>
        <td className='fw-bold text-dark'>phone</td>
        <td className='fw-bold text-dark'>Email</td>
        <td className='fw-bold text-dark'>role</td>

        <td className='fw-bold text-dark'>

           Links



        </td>

        
        
        </tr></thead>
    {  profiles.map((element,i)=><tbody key={i}>
        <tr>
          <td className='fw-bold text-dark'>
          {element.name}
          </td>
          <td className='fw-bold text-dark'>{element.username}</td>
          <td className='fw-bold text-dark'>
            {element.phone}
            {/* <button className='btn btn-secondary fw-bold text-dark'><a href={element.subject_link} className='text-white' target='_blank'>Click here</a></button> */}
          </td>
          <td className='fw-bold text-dark'>{element.email}</td>


          <td className='fw-bold text-dark'>{element.role}</td>

          <td>
            <Link to={`/admin/userinfo/${element._id}`}>

<button className='btn btn-primary'>Show Purchases</button>

            </Link>
          
            {/* <button className='btn btn-success'>Add Subject</button> */}

          </td>

        </tr>
      </tbody>)
      


    
 
    }
    
    </table>



    </div> :<h1>please wait while all the details are loaded</h1>
   }
    
    
    </div>
  )
}

export default AllUsers