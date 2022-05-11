import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../index.css'


const Navbar = () => {
    const [mobile, SetMobile] = useState(true);


    return (
        <nav className="navbar">
        <Link to="/" className="navbar-brand">Fit-Art</Link>
        <button 
            className="navbar-toggler"
            onClick = {()=>SetMobile(!mobile)}    
        >
            <FaBars />
        </button>

        <div className={`mobile mobile-${mobile}`}>
            <Link to="/"  className="navbar-link">
                Home
            </Link>

            <Link to="/fitarmy"  className="navbar-link">
                #FitArmy
            </Link>

            <Link to="/about"className="navbar-link">
                About Us
            </Link>

            <Link to="/produit"  className="navbar-link">
                Produit
            </Link>

            <Link to="/planning"  className="navbar-link">
                Planning
            </Link>

            <Link to ="/price" className="navbar-link" >
                Pricing
            </Link>
            
            <Link to ="/contact"  className="navbar-link">
                Contact
            </Link>
            
            <Link to="/register" className="navbar-link join-now">Join Now</Link>
        </div>
    </nav>
    )
}

export default Navbar
