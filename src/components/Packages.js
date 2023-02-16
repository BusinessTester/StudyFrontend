import React from 'react'
import './Packages.css'

const Packages = () => {
  return (
    <>
    <div className='package-one container-fluid row bg-dark overflow-hidden'>
      <h4 className='text-white'>These packages are coming soon on the website</h4>
        {/* 1st card */}
        <div className='col col-md-4'>


        <div className="card-one card m-3">
  <div className="card-header">
    <h4 className='text text-dark mx-auto text-white'>Sasto Package</h4>
    
  </div>
  <div className="card-body">
    <h5 className="card-title text-white">Purchase individual subjects at a lower price</h5>
    <p className="card-text text-dark">Field Wise Chosen Price</p>
    {/* <Link to="#" class="btn btn-primary">Go somewhere</Link> */}
  </div>
</div>



        </div>
        {/* 1st card */}

        {/* 2nd card */}

        <div className='col col-md-4'>
        <div className="card-two card m-3">
  <div className="card-header">
    <h4 className='text text-dark mx-auto text-white'>Note From StudyMaterials</h4>
    
  </div>
  <div className="card-body">
    <h5 className="card-title text-white">Study Materials Welcomes You To Be A Part Of The Family</h5>
    <p className="card-text text-dark">our goal is to make study materials accessible to everyone</p>
    {/* <Link to="#" class="btn btn-primary">Go somewhere</Link> */}
  </div>
</div>
        </div>
        {/* 2nd card */}



        {/* 3rd card */}

        <div className='col col-md-4'>

        <div className="card-three card m-3">
  <div className="card-header">
    <h4 className='text text-dark mx-auto text-white'>Unlimited Package</h4>
    
  </div>
  <div className="card-body">
    <h5 className="card-title text-white">Get Unlimited Access To All The Materials From Your Field</h5>
    <p className="card-text text-dark">The prices vary as per the field</p>
    {/* <Link to="#" class="btn btn-primary">Go somewhere</Link> */}
  </div>
</div>


        </div>
        {/* 3rd card */}



      </div>
    </>
  )
}

export default Packages