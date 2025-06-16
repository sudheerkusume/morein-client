import React from 'react'
import { useState } from 'react';
import {  NavLink } from 'react-router-dom'
import { useCart } from '../context/cartContext'
import { FaShoppingCart } from "react-icons/fa";
import image from '../Accets/Flag1.PNG';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ← Includes modal, dropdowns, etc.

const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);
  const {cartItems} = useCart()
  
  return (
    <section className='main'>
        <div className="navbar fixed-top bg-white px-4  shadow-sm d-flex flex-wrap align-items-center justify-content-between">
           <div className=" d-flex align-items-center" >
        <NavLink to='/'style={{ textDecoration: 'none' }} className=" mb-0 me-3">
          <span style={{ color: '#ffc107', fontWeight: 'bold', fontSize: "40px" }}>more</span>
          <span style={{ color: 'green', fontWeight: 'bold', fontSize: "30px" }}>In</span>
        </NavLink>
        <img className='flag' alt='error' src={image}></img>
      </div>

      {/* Toggle button for small screens */}
      <button
        className="navbar-toggler d-block d-sm-none"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Details */}


      {/* Collapsible Menu */}
      <div className={`w-50 ${menuOpen ? 'd-block' : 'd-none'} d-sm-flex align-items-center justify-content-between`}>

        <div className="d-flex align-items-center gap-3 px-3 py-2">

            <div className="dropdown me-3">
                  <button
                    className="btn btn-light dropdown-toggle"
                     type="button"
                      id="productsDropdown"
                       data-bs-toggle="dropdown"
                        aria-expanded="false"
                   >
                      🛒 Products
                   </button>
                     <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                       <li><NavLink className="dropdown-item" to="/products/eggs"> Eggs</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/products/pharmacy"> Pharmacy</NavLink></li>
                         <li><NavLink className="dropdown-item" to="/products/petcare"> Pet Care</NavLink></li>
                         <li><NavLink className="dropdown-item" to="/products/drinks"> Drinks</NavLink></li>
                         <li><NavLink className="dropdown-item" to="/products/candies"> Candies</NavLink></li>
                       </ul>

            </div>

          <NavLink to = "/About" style={{textDecoration: 'none'}}>
            <button className="btn d-flex align-items-center text-dark px-3 py-2" style={{  borderRadius: '12px' }}>
              <div className="me-2" />
              <div className="d-flex flex-column align-items-start lh-sm">
                <div className="fw-bold">About</div>
              </div>
            </button>

          </NavLink>

          <NavLink to = "/Services" style={{textDecoration: 'none'}}>
            <button className="btn d-flex align-items-center text-dark px-3 py-2" style={{  borderRadius: '12px' }}>
              <div className="me-2" />
              <div className="d-flex flex-column align-items-start lh-sm">
                <div className="fw-bold">Services</div>
              </div>
            </button>
          </NavLink>


          <NavLink to = "/Contact" style={{textDecoration: 'none'}}>
            <button className="btn d-flex align-items-center text-dark px-3 py-2" style={{  borderRadius: '12px' }}>
              <div className="me-2" />
              <div className="d-flex flex-column align-items-start lh-sm">
                <div className="fw-bold">Contact</div>
              </div>
            </button>

          </NavLink>

          
            <button type="button"  className="btn text-dark text-decoration-none"  data-bs-toggle="modal" data-bs-target="#loginModal">
            Login
          </button>

          <NavLink to="/Cart" style={{ textDecoration: 'none' }}>
            <button className="btn d-flex align-items-center text-white px-3 py-2" style={{ backgroundColor: 'green', borderRadius: '12px' }}>
              <FaShoppingCart className="me-2" />
              <div className="d-flex flex-column align-items-start lh-sm">
                <div className="fw-bold">{cartItems.length}</div>
              </div>
            </button>
          </NavLink>
        </div>
      </div>
    </div>

    </section>
  )
}

export default Navbar