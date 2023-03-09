import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Cart.css'
import qresewa from '../images/Snip2.PNG'
import { confirmStorage } from '../API/userAPI'
import { useNavigate } from 'react-router'

const Cart = () => {
    const navigate  = useNavigate()
    
    
    const store2 = useSelector(store=>store.SecondRed)
    let store = [...new Set(store2.map(element=>element))]

    console.log(store)


    const dispatch = useDispatch()
    let store1


    const tester = ()=>{
        if(store){
            const unique =[...new Set(store.map(element=>element)) ]
            console.log(unique)
        }
        else{
            return
        }
    }



    // const [price,setPrice] = useState(null) using this means there are too many re-renders according to the errors 



    // this is for the calculation of the price of the values 
    let array1 = []
    const calculator = (value)=>{
        array1.push(value)
        let priceCount = 0
        
        for (let index = 0; index < array1.length; index++) {
         
            priceCount = array1[index] + priceCount
            
   }
       return store1=priceCount
    }

    
    // the values of the localstorage can be saved in the states and this is the technique i am about to apply


    const [storage,setStorage] = useState('')

    // useEffect(()=>{
    //     if(store.length>0){
    //        localStorage.setItem("cart",JSON.stringify(store)) 
    //        setStorage(JSON.parse(localStorage.getItem("cart")))
            
    //     }
    //     else{
    //         localStorage.removeItem("cart")
    //         setStorage("")
    //         return

    //     }

    // },[store2])
    // console.log(storage)

    // this is the function to activate different forms of changes on the local storage
    const makeChanges=()=>{
        confirmStorage(store,store1)
        // localStorage.removeItem("cart")

        if(localStorage.getItem('procure1')&&localStorage.getItem('procure2')){
        return  navigate('/purchases/payment')
        }
        else{
            return <div className='alert'>There is an error. please try again later</div>
        }
        

    }




  return (
    <>
    <Navbar/>
    <div className='cart-page'>

    {
        tester()
    }
    {


store.length>0? <div> 
<button className='btn-clearall btn btn-secondary mx-5' onClick={()=>{return dispatch({type:"DELETE_ALL"})}}>clear all</button>
<table className=' cart-table table table-striped table-bordered'>
<thead className='table-warning'>
    <tr>
        <td className='fw-bold text-dark'>Items</td>
        <td className='fw-bold text-dark'>Description</td>
        <td className='fw-bold text-dark'>Level</td>

        <td className='table-uploader fw-bold text-dark'>Uploader</td>
        <td className='fw-bold text-dark'>Price</td>

        <td className='fw-bold text-dark'>Remove</td>
    </tr>
</thead>
<tbody>
{ store.map((user,i)=> {return <tr key={i}>
       
            <td className='fw-bold text-dark'>{user.subject}</td>
            <td className='fw-bold text-dark'>{user.university}</td>
            <td className='fw-bold text-dark'>{user.level}</td>
            <td className='table-uploader fw-bold text-dark'>{user.uploader}</td>
            <td className='fw-bold text-dark'>Nrs. {user.price}</td>



            <td><button className='btn btn-secondary text-white fw-bold' onClick={()=>dispatch({type:"REMOVE",payload:user})}>Remove</button></td>
            {/* <td>amazing is it not</td> */}

            <td className='d-none'>{calculator(user.price)
            }</td>

            
            
            
        </tr>
        // console.log(user)
    }
            
            
            )
    }
    
       

</tbody>


</table></div>:<div className='cart-icon row '>
    <div className='col col-md-4'>
    </div>
    <div className='col col-md-7'>
    <h5 className='text text-dark m-4 fw-bold'>There are no items in the cart at the moment</h5>
    <img className='cart-image-icon' src='https://cdn-icons-png.flaticon.com/512/102/102661.png' height={'200px'}/>

    </div>


</div>




    }
    
   {
    store.length>0&&<div className='row'>
        <div className='col col-md-3'>
           
        </div>
        <div className='col col-md-6'>




        </div>

<div className='d-flex'>
    {/* this button is disabled at the moment */}
{/* <button className='cart-btn2 btn text-white fw-bold rounded btn-warning' data-bs-toggle="modal" data-bs-target='#exampleModal'>Scan and Pay</button>  */}

{/* because of the use of the same id, there is no need for additional  */}

{/* this is for the modal */}
<button className='cart-btn3 btn btn-primary text-white fw-bold rounded' onClick={makeChanges}>Proceed to Payment</button>

{/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                   <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                       <div className="modal-content">
                           <div className="modal-header">
                               <h5 className="modal-title text-dark fw-bold" id="exampleModalLabel">Call us at:9849632777 before scanning the Esewa Scan Code</h5>
                               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                           <div className="modal-body">
                             
                              <img alt='image-qrcode' src={qresewa}/>
                              
       
                           </div>
                           <div className="modal-footer">
                               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            
                           </div>
                       </div>
                   </div>
               </div> */}

{/* this is for the modal */}

    <div className='price-cart col col-md-3'>
            <h5 className='m-2 ms-4 fw-bold text-white'>Total= NRS {store1}</h5>
            
           
        </div>
        {/* <div>
        <button className='cart-proceed btn btn-success' onClick={()=>confirmStorage(store,store1)}>this is to proceed</button>

        </div> */}


</div>

        
        {/* <div>
           <button className='cart-pay-btn btn text-white fw-bold rounded'>Scan and Pay</button> 
        </div>
         */}

        


    </div>



   }
    </div>
    
    
   <Footer/>
    </>
  )
}

export default Cart
