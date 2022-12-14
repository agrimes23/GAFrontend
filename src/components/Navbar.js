import {useState, useEffect} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const Navbar = () => {



    return (
        <>  
            <nav className="navbar navbar-dark sticky-top bg-dark">

                {/* TODO: Have the home button go to dashboard if user is logged in. Don't think we have a check for that yet */}

                {window.location.pathname === "/dashboard" || window.location.pathname === "/cart" || window.location.pathname === "/purchased" ? 
                <Link to="/dashboard">
                    <i className="fa-solid fa-shirt mx-2 my-3"></i>
                    <h5 className="d-inline-block logo">StyleFinder</h5>
                </Link> : 
                <Link to="/">
                    <i className="fa-solid fa-shirt mx-2 my-3"></i>
                    <h5 className="d-inline-block logo">StyleFinder</h5>
                </Link>}
                    
                
                <ul className="nav navbar-nav navbar-right">
                    {window.location.pathname === "/dashboard" || window.location.pathname === "/cart" || window.location.pathname === "/purchased" ? (<li><Link to="/cart"><i className="fa-solid fa-cart-shopping mx-5"></i></Link></li>) : null}

                </ul>
            </nav>
        </>
    )
}

export default Navbar