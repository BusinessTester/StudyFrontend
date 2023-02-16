import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-one bg-primary rounded overflow-hidden'>
    
    <div className="container mt-2">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
       
        Study Materials
      </Link>
      <span className="mb-3 mb-md-0 text-white">&copy; 2022 Study Materials</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><Link className="text-white" to="#">Twitter</Link></li>
      <li className="ms-3"><Link className="text-white" to="#">Facebook</Link></li>
      <li className="ms-3"><Link className="text-white" to="#">other websites</Link></li>
    </ul>
  </footer>
</div>
    
    </div>
  )
}

export default Footer