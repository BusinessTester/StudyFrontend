import React from 'react'
import money from '../images/money.jpg'
import './Advertisement.css'

const Advertisement = () => {
  return (
    <>
    <div className='advertisement-one'>
        <div className='first container-fluid rounded'>
            <div className='row'>
                <div className='col col-md-2'>
<img className='rounded m-2'
src='http://images.indiatvnews.com/lifestylelifestyle/2015/1434358755laughing-buddha-2.jpg' height={'80px'}/>
                    
                </div>
                
                <div className='col col-md-8'>
            <h5 className='text text-black mt-1 ms-4'> Buy our notes or Sell your notes to us || Contact us at:</h5>
            <h5 className='text text-black ms-4'> Email : something@gmail.com</h5>
            <h5 className='text text-black ms-4'> phone : 9849632777 || Or reach us through facebook</h5>



                </div>


                {/* this is for the second image in the advertisement */}
                <div className='col col-md-2 mt-2'>
                  <img className='rounded' src='https://images.huffingtonpost.com/2015-04-30-1430413588-6625947-Depositphotos_8935653_original.jpg'  height={'80px'}/>
                </div>

            </div>
        </div>

    
    
    
    
    </div>
    
    
    
    
    </>
  )
}

export default Advertisement