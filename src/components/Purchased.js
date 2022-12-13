import {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar.js'

const Purchased = () => {

    const orderNumber = () => {
        let oNum = Math.floor(Math.random() *100000000000)
        return oNum
    }

    return (
        <>  
        <Navbar/>
            {/* TODO: If we have time, show list of items in the order? We could show items in the cart and then delete those items in this component instead of the cart */}
            <div className="text-center">
                <h1 className="my-5">Thank you for your purchase from StyleFinder!</h1>
                <h2 className="my-5">Order Confirmation: {orderNumber()}</h2>
                <Link to="/dashboard"><button className="btn btn-primary p-3">Return to Dashboard</button></Link>
            </div>
        </>
    )
}

export default Purchased