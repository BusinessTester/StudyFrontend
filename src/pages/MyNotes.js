import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { myPurchases } from '../API/userAPI'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './MyNotes.css'



const MyNotes = () => {
    const params = useParams()
    const identification = params.id

    // for the storage of the data, usestate is  used 
    const [procure,setProcure] = useState('')

  useEffect(()=>{
    myPurchases(identification)
    .then(data=>{
        if(!data) {console.log('there was an error')}
        else{
            setProcure(data)

        }
    })
  },[])
  console.log(procure)
  
    return (
      <>
       <div className='mynotes'>
    <Navbar/>
    
    <h5 className='mynotes-text text-success fw-bold'>Following are the {procure.length} subjects purchased by me</h5>
    <table className='mynotes-table table table-striped table-bordered' >
      <thead className='table table-warning'><tr>
        <td className='fw-bold text-dark'>Subject Name</td>
        <td className='fw-bold text-dark'>Subject Code</td>
        <td className='fw-bold text-dark'>Link</td>

        
        
        </tr></thead>
    { procure? procure.map((element,i)=><tbody key={i}>
        <tr>
          <td className='fw-bold text-dark'>
          {element.subject}
          </td>
          <td className='fw-bold text-dark'>{element.subject_code}</td>
          <td>
            <button className='btn btn-secondary fw-bold text-dark'><a href={element.subject_link} className='text-white' target='_blank'>Click here</a></button>
          </td>

        </tr>
      </tbody>)
      


    
    :
    
    <Loader/>
    }
    
    </table>
    
    
    
    </div>
      <Footer/>
      </>
   
  )
}

export default MyNotes