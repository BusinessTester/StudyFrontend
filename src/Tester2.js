import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { extractStoragePrice, extractStorageSubject, isAuthenticated, sendDetails } from './API/userAPI'
// import axios from 'axios'
// import SimplePage from './SimplePage'
import qrimage from "../src/images/Snip2.PNG"
import emailjs from '@emailjs/browser';



const Tester2 = () => {
    

const procurement  = extractStorageSubject()
const total_price = extractStoragePrice()

const user = isAuthenticated()
const form = useRef()

// saving this

const testing = <table className='table table-bordered table-striped'>
                    <thead className='table-warning'>
                        <tr>
                            <td>Name of the subject</td>
                            <td>Subject Code</td>
                            <td>Price</td>

                        </tr>
                    </thead>
                    <tbody>
                        {procurement&& procurement.map((element,i)=>{<tr>
                            
                    <td>{element.subject}</td>
                    <td>{element.id}</td>
                    <td>{element.price}</td>



                    </tr>
                        })}
                    

                    </tbody>
                </table>

// saving this

    
    let attempt = <div className='attempt'>
        <table className='table table-bordered table-striped'>
            <thead className='table-success'>
                <tr>
                    <td>Subject</td>
                    <td>Subject Code</td>
                    <td>Price</td>

                </tr>
            </thead>
            <tbody>
                {procurement.map((element,i)=>{
                    return  <tr>
                    <td>{element.subject}</td>
                    <td>{element.id}</td>
                    <td>{element.price}</td>

                </tr>
                })}
           

            </tbody>
        </table>
        
        <div>
            <h4 className='text text-dark fw-bold me-4'> Total: NRs.{total_price}</h4>
        </div>
       
        
    </div>

// this is for the pasting of the functions for the form

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v4opr5i', 'template_12vt198', form.current, 'hGp2GlOU6_dGDu0LH')
      .then(() => {
          alert("The payment details were submitted successfully");
      }, (error) => {
          alert(error.text);
      });
  }; 



// this is the array use and the function used
let arr2 = [{name:"man1",age:'23'},
{name:"man2",age:'25'},
{name:"man4",age:'27'}]


let funky1 = (e)=>{
    e.preventDefault()
  document.getElementById("button3").hidden = true

   document.getElementById("submission").hidden = false
  let z = document.getElementById("my_html")
 return z.setAttribute("value",  `<table style="background-color:#00FF00" style="width:600px" style="border:1px solid black">
 
        <thead >
        <tr>
        <td>Subject</td>
        <td>Subject Code</td>
        <td>Price</td>
        </tr>
        </thead>
        
       
        <tbody>

        ${procurement.map((element,i)=>{
            return  `<tr>
            <td>${element.subject}</td>
            <td>${element.id}</td>
            <td>${element.price}</td>

        </tr>`
        })}

        
        </tbody>
 
 </table>`
 
 
 

  )
    
}

// this is the function used in the testing page


  return (
    <>
    <div className='row container-fluid mt-2 ms-1 fw-bold'>
        <div className='col col-md-5'>
            <ol>
                <li>
                     <h5>Make Payment Through E-Sewa</h5>
                </li>
                <li>
<h5>Get the transaction code after payment</h5>
                </li>
                <li>
<h5>Enter transaction code in the form</h5>
                </li>
                <li><h5>Submit the form</h5></li>

            </ol>
           
            
            


            <img src={qrimage}/>
        </div>
        {/* <div className='col col-md-2 bg-secondary'>this is for the middle line</div> */}
        <div className='col col-md-7 '>
            <div className='row'>
            <div className='col col-md-6'>
                {/* this is for the form submission */}
                 <form className='form ' ref={form} onSubmit={sendEmail}>
        <div className='form-group'><h4 className='fw-bold'>My Purchase Details</h4></div>


      <div class="form-group field">
    <label for="from_name">Email</label><br/>
    <input  class="form-control" type="text" name="from_name" id="from_name" value={user.user_info.email}/><br/>
  </div>

      <div class="form-group  field">
    <label for="name">Name</label><br/>
    <input  class="form-control" type="text" name="name" id="name" value={user.user_info.name}/><br/>
  </div>

      <div class="form-group  field">
    <label for="phone_number">Phone Number</label><br/>
    <input  class="form-control" type="text" name="phone_number" id="phone_number" value={user.user_info.phone}/><br/>
  </div>


    <div class="form-group  field">
    <label for="payment_number">Esewa Payment Transaction Number</label><br/>
    <input  class="form-control" type="text" name="payment_number" id="payment_number"/><br/>
    </div>
    <div class="field">
    <label for="payment_total">Payment Total (NRs.)</label><br/>
    <input  class="form-control" type="text" name="payment_total" id="payment_total" value={total_price} readOnly/>
  </div>
      
      <br/>
      <div class="form-group  field">
    {/* <label for="my_html">my_html</label> */}
    <input  class="form-control" type="text" name="my_html" id="my_html" hidden/>

   <button  class="form-control btn btn-primary" id='button3' onClick={funky1}>Confirm Details</button>  

   
 
  </div>


      <input  class="form-control bg-success" type="submit" value="Send" id='submission' hidden/>
                    </form>
            </div>
            
            
            <div className='col col-md-6'>
                {
                    attempt
                }
                    
                
            </div>

            </div>
         

   



        </div>


    </div>

    </>

    

        
        
              

  )
}

export default Tester2