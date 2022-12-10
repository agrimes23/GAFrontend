import {useState} from 'react'


const Cart = (props) => {

    return (
        <>
        
            <div className="container-fluid d-flex cart-page justify-content-center">
                {/* List of items in cart */}
                <div className="flex-column flex-grow-1">
                    {/* each item */}
                    <div className="card p-5 cart-card m-5">
                        <div className="float-left">
                            <img src="https://img.ltwebstatic.com/images3_pi/2022/09/20/16636601306d90d32495f68b5a3c37e8c05c846f5d_thumbnail_900x.webp" className="cart-img" />
                        </div>
                        <div className="float-right">
                            <h4 className=""><strong>{}title</strong></h4>
                            <h5 className="">{}price</h5>
                        </div>
                    </div>
                </div>

                {/* Total and checkout */}
                <div className="flex-column flex-grow-1 d-flex total-card m-5">
                    <div className="card p-5">
                        <h3>Order Summary</h3>
                        <h5>Total Items:</h5>
                        <h5>Shipping & handling: </h5>
                        <h5>Subtotal: </h5>
                        <h5>Estimated Tax: total * 0.625</h5>

                        <h3>Order Total: </h3>
                    </div>

                </div>
             
            </div>
        </>
    )
}

export default Cart