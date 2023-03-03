import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './NewPage.css'

const NewPage = () => {
  const [data,setData] = useState(null)
  

 
 

  useEffect(()=>{
    setData(localStorage.getItem('data'))
    // the undefined data is received since the action itself is asynchronous and this needs 

    
  },[])

let value = JSON.parse(data)
  return (
    
    <> 
    
    <div className='newpage'>
      <Navbar/>
    <h4 className='text text-white m-4 bg-success'>This is a preview link, Buy the note from the website or call us at: 9849632777</h4>
    <div className='row'>
      <div className='col col-md-2'> 
 {value&& <table className='newpage-table table table-bordered'>
    <thead className='newpage-thead'>
      <tr>
      <td className='text fw-bold text-white h6'>Subject</td>

        <td className='text text-white fw-bold h6'>Subject_code</td>
        <td className='text fw-bold text-white h6'> Our Rating</td>
        <td className='text fw-bold text-white h6'> Preview Link to the File</td>
        <td className='text fw-bold text-white h6'> Contact us</td>


      </tr>

      <tr>
      <td className='text fw-bold h6'>{value.subject}</td>

        <td className='text fw-bold h6'>{value.id}</td>
        <td className='text fw-bold h6'>{value.review}</td>
        {/* <td><Link to={value.preview}>preview link</Link>  </td> */}
        <td><button className='button bg-warning fw-bold h6'><a className='text text-black' target='_blank' rel='noreferrer' href={value.preview}>preview link</a></button>   </td>
        <td className='text-dark fw-bold h6'>{value.contact}</td>

      </tr>
    </thead>
  </table>}

      </div>

      <div className='display-newpage col col-md-10'>
      {
        
        
        // <iframe className='newpage-frame' src='https://drive.google.com/file/d/10ZF681DNd2Ql7D1j1dn2KHMdNDaJt-pw/preview' width="600" height="450"></iframe>
      
        <iframe className='newpage-frame' src={`${value.preview}`} width="600" height="450"></iframe>
      
      
      }
    </div>
      </div>
    </div>

   
    
    {/* <div><iframe src={`${value.preview}`} width="640" height="480" allow="autoplay"></iframe></div> */}
 
    

    <Footer/>
    </>
    
  )
}

export default NewPage