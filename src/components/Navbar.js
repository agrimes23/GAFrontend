import {useState} from 'react'

const Navbar = () => {

    return (
        <>  
            {/* If they're on the dashboard or in the cart, show cart icon in the right corner of the nav  */}
            <nav className="navbar navbar-dark sticky-top bg-dark">
                <a className="navbar-brand mx-3" href="#">
                    <i className="fa-solid fa-shirt mx-2 my-3"></i>
                    StyleFinder
                </a>
                <ul className="nav navbar-nav navbar-right">
                    <li><i className="fa-solid fa-cart-shopping mx-5"></i></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar