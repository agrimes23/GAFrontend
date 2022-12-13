import {useState, useEffect} from 'react'
import { Route, Routes, Link } from 'react-router-dom'


const Cart = (props) => {

    // FIXME: NEED TO CHANGE itemNum

    const [showProcessing, setShowProcessing] = useState(false)
    const [itemNum, setItemNum] = useState(1)
    const [priceTotal, setPriceTotal] = useState(0)
    const [totalTax, setTotalTax] = useState(0)
    const [priceNum, setPriceNum] = useState(0)


    // const handleChange =(event)=>{
    //     // FIXME: need to redo event.target.name/value, probably doesn't work. Need to test.
    //     setItemNum({...itemNum, [event.target.name]:event.target.value});
    //     props.handleEdit(props.user.cartItem);
    // }

    const afterTimeout = (event) => {
        // this will hide the processing tag and show the button again
        // TODO: need to empty the cart array OR maybe empty it after showing cart list on purchased page?
        event.target.hidden = false
        setShowProcessing(false)
        setTimeout(1000)
        window.location.href="http://localhost:3001/purchased"
    }

    const checkOut = (event) => {
        // this will hide the button and show processing instead
        event.target.hidden = true
        setShowProcessing(true)
        setTimeout(() => {afterTimeout(event)}, (5000))
    }

    const adjustItemNum = (event) => {
        (event.target.value === "+") ? setItemNum(itemNum + 1) : setItemNum(itemNum - 1)
    }

    // const calculateTotal = (cartItem) => {
    //                 {setPriceTotal(priceTotal + (Number(cartItem.price.formattedValue.split(" ")[1])))}
    //                 {console.log("Price: " + cartItem.price.formattedValue)}
                    
    // }

    const calculateTax = () => {
        setTotalTax(((priceTotal + 12) * 0.625).toFixed(2))
    }



    return (
        <>
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
                                    <h5 className="pt-1 my-3 mr-3">Qty: {itemNum}</h5>
                                    <button className="btn btn-dark rounded-circle my-3 mx-2 pb-2" value="+" onClick={adjustItemNum}>+</button>
                                    <button className="btn btn-dark rounded-circle my-3 mx-2 px-3 pb-2" value="-">-</button>
                                </div>
                                
                                <button className="btn btn-danger mt-4 mx-2 w-50" onClick={()=>{props.handleDelete()}} >Delete</button>
                            </div>
                        </div>
                    </>
                    )
                    })}
                    
                </div>

                {/* Total and checkout */}
                {/* {calculateTotal()}
                {calculateTax()} */}
                <div className="flex-column flex-grow-1 d-flex total-card m-5">
                    <div className="card p-5">
                        <h3 className="my-5">Order Summary</h3>
                        <h6 className="my-3">Total Items: ${priceTotal}</h6>
                        <h6 className="my-3">Shipping & handling: $12.00</h6>
                        <h6 className="my-3">Subtotal: {priceTotal + 12}</h6>
                        <h6 className="my-3">Estimated Tax: $?</h6>
                        <h6 className="my-5">Order Total: {priceTotal + 12 + totalTax}</h6>
                        <input type="submit" onClick={checkOut} className="btn btn-info my-3" value="checkout"/>
                        
                        {showProcessing ? <h5 className="processing mx-5 my-4">processing</h5> : null}
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Cart