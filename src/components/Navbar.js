import {useState} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const Navbar = () => {

    
    return (
        <>  
            {/* If they're on the dashboard or in the cart, show cart icon in the right corner of the nav  */}
            {/* Home should either be the signup page or if they're logged in, their dashboard */}
            <nav className="navbar navbar-dark sticky-top bg-dark">

                {/* TODO: Have the home button go to dashboard if user is logged in. Don't think we have a check for that yet */}
                <Link to="/">
                    <i className="fa-solid fa-shirt mx-2 my-3"></i>
                    <h5 className="d-inline-block logo">StyleFinder</h5>
                </Link>
                {/* FIXME: sometimes cart icon shows on homepage after on cart page. */}
                
                <ul className="nav navbar-nav navbar-right">
                    {window.location.pathname === "/dashboard" || window.location.pathname === "/cart" ? (<li><Link to="/cart"><i className="fa-solid fa-cart-shopping mx-5"></i></Link></li>) : null}
                </ul>
            </nav>
        </>
    )
}

export default Navbar