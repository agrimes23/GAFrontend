import {useState} from 'react'
import { Routes, Link, Route, useLocation } from 'react-router-dom'

const Navbar = () => {

    
    // const showCartIcon = () => {
        
    //     let cartIcon = 
    //     return cartIcon
    // }

    // console.log(window.location.pathname)
    return (
        <>  
            {/* If they're on the dashboard or in the cart, show cart icon in the right corner of the nav  */}
            {/* Home should either be the signup page or if they're logged in, their dashboard */}
            <nav className="navbar navbar-dark sticky-top bg-dark">
                <Link to="/">
                    <i className="fa-solid fa-shirt mx-2 my-3"></i>
                    StyleFinder
                </Link>
                {/* Need this to check the URL. if /dashboard or /cart, then show the cart icon.
                If URL is / (signup), /login, or /quiz, then don't show the shopping cart */}
                (window.location === "/login") ? () : ()
                <ul className="nav navbar-nav navbar-right">
                    {window.location.pathname === "/dashboard" || window.location.pathname === "/cart" ? (<li><Link to="/cart"><i className="fa-solid fa-cart-shopping mx-5"></i></Link></li>) : null}
                </ul>
            </nav>
        </>
    )
}

export default Navbar