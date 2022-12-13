import {useState, useEffect} from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar.js'


const Cart = (props) => {

    // shows processing animation
    const [showProcessing, setShowProcessing] = useState(false)

    const [priceTotal, setPriceTotal] = useState(0)
    const [totalTax, setTotalTax] = useState(0)
    const navigate = useNavigate()

    const afterTimeout = (event) => {
        // this will hide the processing tag and show the button again
        // TODO: need to empty the cart array OR maybe empty it after showing cart list on purchased page?
        event.target.hidden = false
        setShowProcessing(false)

        props.userInfo.cart.map((cartItem)=> { 
            props.handleDelete(cartItem)
            console.log(props.userInfo.cart.length)
        })

        navigate('/purchased')
        // window.location.href="http://localhost:3001/purchased"
    }

    const checkOut = (event) => {
        // this will hide the button and show processing instead
        event.target.hidden = true
        setShowProcessing(true)
        setTimeout(() => {afterTimeout(event)}, (5000))
    }

    const adjustItemNum = (event, cartItem) => {
        console.log("cart: " + cartItem)
        if (cartItem) {
            // cartItem.counter
            let quantity = cartItem.counter
            
            (event.target.value === "+") ? quantity++ : quantity--
            let count = {
                counter: quantity
            }

            // handleDelete if quantity/counter is 0
            console.log("Button event: " + event.target.value)
            console.log("quantity: " + quantity)
            props.handleSelectColor(cartItem, count)
        }
    }


    const calculateTax = () => {
        setTotalTax(((priceTotal + 12) * 0.0625).toFixed(2))
    }

    useEffect (() => {
        let tempPriceTotal = 0
        props.userInfo.cart.forEach((cartItem)=> { 
            tempPriceTotal += (Number(cartItem.price.formattedValue.split(" ")[1]))
        })
        setPriceTotal(tempPriceTotal)
        calculateTax()

    }, [props.userInfo.cart])

    console.log(props.userInfo)

    return (
        <>
        <Navbar/>
        <h1 className="mx-auto text-center mt-5">Your cart</h1>
            <div className="container-fluid d-flex cart-page justify-content-center">
      
                <div className="flex-column flex-grow-1 d-inline-block">

                    {props.userInfo.cart.map((cartItem)=> { 
                    
                     return (
                        
                      <>
                        <div className="flex-row card p-5 cart-card m-5">
                                <img src={cartItem.images[0].url} className="cart-img float-left"></img>
                            <div className="row d-flex cart-info my-auto m-4">
                                <h4 className=""><strong>{cartItem.name}</strong></h4>
                                <h4 className=""><strong>Name</strong></h4>
                                <h5 className="">Price: {cartItem.price.formattedValue}</h5>
                                
                                <h5 className="">Color: {cartItem.articleColorNames}</h5>
                                <div className="d-flex">
                                    <h5 className="pt-1 my-3 mr-3">Qty: {cartItem.counter}</h5>
                                    <button className="btn btn-dark rounded-circle my-3 mx-2 pb-2" value="+" onClick={() => {adjustItemNum(cartItem)}}>+</button>
                                    <button className="btn btn-dark rounded-circle my-3 mx-2 px-3 pb-2" value="-" onClick={() => {adjustItemNum(cartItem)}}>-</button>
                                </div>

                                <button className="btn btn-danger mt-4 mx-2 w-50" onClick={()=>{props.handleDelete(cartItem)}}>Delete</button>
                                {console.log("hello")}
                            </div>
                        </div>
                    </>
                    )
                    })}
                    
                </div>


                <div className="flex-column flex-grow-1 d-flex total-card m-5">
                    <div className="card p-5">
                        <h3 className="my-5">Order Summary</h3>
                        <h6 className="my-3">Total Items: ${priceTotal}</h6>
                        <h6 className="my-3">Shipping & handling: $12.00</h6>
                        <h6 className="my-3">Subtotal: ${(priceTotal + 12).toFixed(2)}</h6>
                        <h6 className="my-3">Estimated Tax: ${totalTax}</h6>
                        <h6 className="my-5">Order Total: ${(priceTotal + 12 + Number(totalTax)).toFixed(2)}</h6>
                        <input type="submit" onClick={checkOut} className="btn btn-info my-3" value="checkout"/>
                        
                        {showProcessing ? <h5 className="processing mx-5 my-4">processing</h5> : null}
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Cart