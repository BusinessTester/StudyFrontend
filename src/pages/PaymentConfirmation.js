import React, { useEffect, useRef, useState } from 'react'
import { extractStoragePrice, extractStorageSubject, isAuthenticated } from '../API/userAPI'
import qrimage from "../images/Snip2.PNG"
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import './PaymentConfirmation.css'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';


const PaymentConfirmation = () => {
    const navigate = useNavigate()
    let attempt
    const user = isAuthenticated()
    const form = useRef()

// this is to make sure that the store is not empty or else the page will be redirected to the main page
const store2 = useSelector(store=>store.SecondRed)
    let store = [...new Set(store2.map(element=>element))]

    console.log(store)

    const [procurement,setProcurement] = useState('')
     const [total_price,setTotalPrice] = useState("")

      // this is for the states that would insert values in different sections 
    const [email,setEmail] = useState(user.user_info.email)
    const [phone,setPhone] = useState(user.user_info.phone)
    const [naming,setNaming] = useState(user.user_info.name)
  
 
            
             
    useEffect(()=>{
        if(store.length<1&&!localStorage.getItem("procure1")){
            return navigate('/')
        }
        else{
            setProcurement(extractStorageSubject())
            setTotalPrice(extractStoragePrice())
           
        //     if(procurement){
        //          attempt = <div className='attempt'>
        //     <table className='table table-bordered table-striped'>
        //         <thead className='table-success'>
        //             <tr>
        //                 <td>Subject</td>
        //                 <td>Subject Code</td>
        //                 <td>Price</td>
    
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {procurement.map((element,i)=>{
        //                 return  <tr>
        //                 <td>{element.subject}</td>
        //                 <td>{element.id}</td>
        //                 <td>{element.price}</td>
    
        //             </tr>
        //             })}
               
    
        //         </tbody>
        //     </table>
            
        //     <div>
        //         <h4 className='text text-dark fw-bold me-4'> Total: NRs.{total_price}</h4>
        //     </div>
           
            
        // </div>
        //     }

           
        }
    },[])
     
    
    
    // this is for the html element to be used in the screen
    
    

// console.log(procurement)


// this is the function to be used for the submission of the entire form and the whole information 
let funky1 = ()=>{
    // e.preventDefault()
    let esewa = document.getElementById("payment_number").value 
    let esewa_border = document.getElementById("payment_number")

    if(esewa.length!==7||esewa==""){
        esewa_border.style.border = "thick solid red"
        return alert("please enter a valid esewa payment transaction code after making the payment")
    }
//   document.getElementById("button3").disabled = true
//   document.getElementById("button3").hidden = true



//    document.getElementById("submission").hidden = false
  let z = document.getElementById("my_html")
 return z.setAttribute("value",  `<table style="width:600px" style="border:3px solid black">
 
        <thead style="background-color:#368136" style="border:3px solid rgb(0, 0, 0)">
        <tr>
        <td style="border:3px solid rgb(0, 0, 0)"><h5>Subject</h5></td>
        <td style="border:3px solid rgb(0, 0, 0)"><h5>Subject Code</h5></td>
        <td style="border:3px solid rgb(0, 0, 0)"><h5>Price</h5></td>
        </tr>
        </thead>
        
       
        <tbody>
        

        ${procurement.map((element,i)=>{
            return  `<tr>
            <td style="border:3px solid rgb(0, 0, 0)"><h5>${element.subject}</h5></td>
            <td style="border:3px solid rgb(0, 0, 0)"><h5>${element.id}</h5></td>
            <td style="border:3px solid rgb(0, 0, 0)"><h5>${element.price}</h5></td>

        </tr>`
        })}

 }       
        </tbody>
 
 </table>`


 
  )
    
}
// this is the end of the html element to be used inside of the email


// this is the email for sending the whole information to the registered email
const sendEmail = (e) => {
    e.preventDefault();
    funky1()
    // if(!funky1()){
    //     return <div className='alert alert-warning'>There was an error while submtting. Try again or contact the system admin</div> 
    // }
    let esewa = document.getElementById("payment_number").value 
    if(esewa.length!==7||esewa===""){
        
        
        return   alert("please enter a valid esewa payment transaction code after making the payment")



       
       
        // <div className='alert alert-' role='alert'><h5>please enter a valid esewa payment transaction code after making the payment</h5></div>
       
    }

// there also needs to be a check on the phone numbers length entered on the form 
let phone_length = document.getElementById("phone_number")

if(phone_length.value.length!==10){
    phone_length.style.border = "thick solid red"

    return alert("please enter a valid phone number")
}


document.getElementById("submission").disabled = true




    emailjs.sendForm('service_v4opr5i', 'template_12vt198', form.current, 'hGp2GlOU6_dGDu0LH')
      .then(() => {
        navigate('/purchases/afterpayment')
        //  alert("The payment details were submitted successfully");

      }, (error) => {
          alert(error.text);
      });
  };

//   end of the email



  return (
    <div>
{
    procurement &&store.length>0?<div>
        <Navbar/>
       <div className='payment-confirmation row container-fluid mt-2 ms-1 fw-bold'>
        <div className='col col-md-5'>
            <ol>
                <li>
                     <h5>Make Payment Through E-Sewa</h5>
                </li>
                <li>
<h5>Get Transaction Code in E-sewa Payment Receipt</h5>
                </li>
                <li>
<h5>Enter Transaction Code in the Form</h5>
                </li>
                <li><h5> Confirm Details and Submit the Form</h5></li>

            </ol>
           
            
            


            <img src={qrimage}/>
        </div>
        {/* <div className='col col-md-2 bg-secondary'>this is for the middle line</div> */}
        <div className='col col-md-7 '>
            <div className='row'>
            <div className='col col-md-6'>
                {/* this is for the form submission */}
                 <form className='form needs-validation' noValidate ref={form} onSubmit={sendEmail}>
        <div className='form-group'><h4 className='fw-bold'>My Purchase Details</h4></div>


      <div class="form-group field">
    <label for="from_name">Email</label><br/>
    <input  class="form-control" type="email" name="from_name" id="from_name" defaultValue={email}/><br/>
  </div>

      <div class="form-group  field">
    <label for="name">Name</label><br/>
    <input  class="form-control" type="text" name="name" id="name" defaultValue={naming}/><br/>
  </div>

      <div class="form-group  field">
    <label for="phone_number">Phone Number</label><br/>
    <input  class="form-control" type="tel" name="phone_number" id="phone_number" defaultValue={phone}/><br/>
  </div>


    <div class="form-group  field">
    <label for="payment_number">Esewa Payment Transaction Code</label><br/>
    <input  class="form-control" type="text" name="payment_number" id="payment_number" required/><br/>
    </div>
    <div class="field">
    <label for="payment_total">Payment Total (NRs.)</label><br/>
    <input  class="form-control" type="text" name="payment_total" id="payment_total" value={total_price} readOnly/>
  </div>
      
      <br/>
      <div class="form-group  field">
    {/* <label for="my_html">my_html</label> */}
    <input  class="form-control" type="text" name="my_html" id="my_html" readOnly hidden/>

   {/* <button  class="form-control btn btn-primary" id='button3' onClick={funky1}>1. Confirm Details</button>   */}

   
 
  </div>


      <input  class="form-control bg-primary text-white" type="submit" value="Submit" id='submission'/>
                    </form>
            </div>
            
            
            <div className='col col-md-6'>
                {
                    <div className='attempt'>
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
                                <td>{element.subject_code}</td>
                                <td>{element.price}</td>
            
                            </tr>
                            })}
                       
            
                        </tbody>
                    </table>
                    
                    <div>
                        <h4 className='text text-dark fw-bold me-4'> Total: NRs.{total_price}</h4>
                    </div>
                   
                    
                </div>
                }
                    
                
            </div>

            </div>
         

   



        </div>


    </div>
                <Footer/>
    </div>:navigate('/')
}


    </div>
    
    
  )
}

export default PaymentConfirmation