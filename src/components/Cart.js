import {useState} from 'react'


const Cart = (props) => {

    const [showProcessing, setShowProcessing] = useState(false)

    const afterTimeout = (event) => {
        // this will hide the processing tag and show the button again
        // TODO: need to empty the cart array
        event.target.hidden = false
        setShowProcessing(false)
    }

    const checkOut = (event) => {
        // this will hide the button and show processing instead
        event.target.hidden = true
        setShowProcessing(true)
        setTimeout(() => {afterTimeout(event)}, (5000))
    }

    return (
        <>
        <h1 className="mx-auto text-center mt-5">Your cart</h1>
            <div className="container-fluid d-flex cart-page justify-content-center">
                
                {/* List of items in cart */}
                <div className="flex-column flex-grow-1 d-inline-block">

                    {/* each item */}
                    <div className="flex-row card p-5 cart-card m-5">
                            <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="cart-img float-left" />
                        <div className="row d-flex cart-info my-auto m-4">
                            <h4 className=""><strong>{}title</strong></h4>
                            <h5 className="">{}price</h5>
                            <h5 className="">{}color</h5>
                            <div className="w-100">
                                <select className='select-opt w-25 mt-3'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                            <input type="submit" className="btn btn-danger mt-4 mx-2 w-50" value="Delete"/>
                        </div>
                    </div>
                    <div className="flex-row card p-5 cart-card m-5">
                            <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="cart-img float-left" />
                        <div className="row d-flex cart-info my-auto m-4">
                            <h4 className=""><strong>{}title</strong></h4>
                            <h5 className="">{}price</h5>
                            <h5 className="">{}color</h5>
                            <div className="w-100">
                                <select className='select-opt w-25 mt-3'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                            <input type="submit" className="btn btn-danger mt-4 mx-2 w-50" value="Delete"/>
                            
                        </div>
                    </div>
                    
                </div>

                {/* Total and checkout */}
                <div className="flex-column flex-grow-1 d-flex total-card m-5">
                    <div className="card p-5">
                        <h3 className="my-5">Order Summary</h3>
                        <h5 className="my-3">Total Items:</h5>
                        <h5 className="my-3">Shipping & handling: </h5>
                        <h5 className="my-3">Subtotal: </h5>
                        <h5 className="my-3">Estimated Tax: total * 0.625</h5>
                        <h3 className="my-5">Order Total: </h3>
                        <input type="submit" onClick={checkOut} className="btn btn-info my-3" value="checkout"/>
                        
                        {showProcessing ? <h5 className="processing mx-5 my-4">processing</h5> : null}
                    </div>

                </div>
             
            </div>
        </>
    )
}

export default Cart