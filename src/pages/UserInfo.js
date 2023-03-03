import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { addingPurchases, isAuthenticated, myPurchases, UserProfile } from '../API/userAPI'
// import { data } from '../Reducer'

const UserInfo = () => {

    const user_presence = isAuthenticated()
// console.log(user)

const [purchases,setPurchases] = useState("")

const navigate = useNavigate()


const extractParams = useParams()
const extractId  = extractParams.id

const [subject,setSubject] = useState("")
const [subject_code,setSubjectCode] = useState("")
const [subject_link,setSubjectLink] = useState("")

const [condition,setCondition] = useState(false)

const [details,setDetails] = useState("")




useEffect(()=>{
    setCondition(false)
    if(user_presence.user_info.role!=2) return navigate("/")
    else{
        myPurchases(extractId)
        .then(data=>{
            if(!data) return console.log("no data found for the user")
            else{
                setPurchases(data)
            }
        })
        .catch(error=>console.log(error))



        UserProfile(extractId)
        .then(data=>{
            if(!data) return console.log("no data found for the user")
            else{
                setDetails(data)
            }
        })
        .catch(error=>console.log(error))
    }
    

    
  
    
        },[condition])

        
        const submitHandler = (event)=>{
            event.preventDefault()
            let a = document.getElementById("addPurchaseBtn")
            if(subject.length<2||subject_code.length<2||subject_link.length<2) return alert("enter valid details")
            addingPurchases(extractId,subject,subject_code,subject_link)
            .then(data=>{
                if(data.error) return console.log(data.error)
                else{
                    alert("the details added successfully")
                    setCondition(true)
                        a.hidden = true


                }
            })
        }
  return (
    <div className='container-fluid'>This is a user page for showing the purchases and adding purchases to the user

    {console.log(details)}
        {console.log(purchases)}

        <div className='container row'>
        <div className='col col-md-6'>this is for addition of purchases<br/>

        <form className='container form-group mt-5'>
    <label>enter subject</label>
   <input className='form-control' onChange={(e)=>setSubject(e.target.value)}/>
   <label>enter Subject_code</label>

   <input className='form-control' onChange={(e)=>setSubjectCode(e.target.value)}/>
   <label>enter Subject_Link</label>
   <input className='form-control' onChange={(e)=>setSubjectLink(e.target.value)}/>


    <button type='submit' id='addPurchaseBtn' className='btn btn-success mt-2' onClick={submitHandler}>update Purchases</button>



</form>

<table className='container-fluid table table-striped table-bordered mt-3 ms-0'>
         <thead className='table table-primary'><tr>
        <td className='fw-bold text-dark'>Name</td>
        <td className='fw-bold text-dark'>Email</td>
        <td className='fw-bold text-dark'>User Name</td>
        <td className='fw-bold text-dark'>phone
        </td>

        <td className='fw-bold text-dark'>age
        </td>

        <td className='fw-bold text-dark'>role
        </td>
        
        

        
        
        </tr></thead>

        <tbody>

            <tr>
                <td>{details.name}</td>
                <td>{details.email}</td>
                <td>{details.username}</td>
                <td>{details.phone}</td>
                <td>{details.age}</td>
                <td>{details.role}</td>

            </tr>
        </tbody>

        </table>
        
        
        
        </div>
        <div className='col col-md-6'>

<table className='container table table-striped table-bordered'>
         <thead className='table table-warning'><tr>
        <td className='fw-bold text-dark'>Subject</td>
        <td className='fw-bold text-dark'>Subject_code</td>
        <td className='fw-bold text-dark'>Subject_Link</td>
        <td className='fw-bold text-dark'>Link only
        </td>

        <td className='fw-bold text-dark'>Id
        </td>
        {/* <td className='fw-bold text-dark'>role</td> */}

        {/* <td className='fw-bold text-dark'>

           Links



        </td> */}

        
        
        </tr></thead>
    { purchases? purchases.map((element,i)=><tbody key={i}>
        <tr>
          <td className='fw-bold text-dark'>
          {element.subject}
          </td>
          <td className='fw-bold text-dark'>{element.subject_code}</td>
          <td className='fw-bold text-dark'>
            <a href={element.subject_link} target="_blank" rel='noreferrer'>go to the link</a>
            
            {/* <button className='btn btn-secondary fw-bold text-dark'><a href={element.subject_link} className='text-white' target='_blank'>Click here</a></button> */}
          </td>
          <td className='fw-bold text-dark'>{element.subject_link}
          </td>

          <td className='fw-bold text-dark'>{element._id}
          </td>


        

        </tr>
      </tbody>)
      


    
    :
    
    <h4>Please wait until the details load</h4>
    }
    
    </table>
        
        
        
        </div>

        {/* <div className='col col-md-2'>remaining one</div> */}


        </div>

    </div>
  )
}

export default UserInfo