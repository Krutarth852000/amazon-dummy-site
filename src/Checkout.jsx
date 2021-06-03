import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://toroadvertising.com/blog/wp-content/uploads/2015/01/Blog_TORO_Advertising.jpg" alt="" />
                <div className="checkout_title">
                    <h2>shopping basket</h2>
                    {/* Checkout items */}
                </div>
            </div>
            <div className="chcekout_right">
                <Subtotal />
                {/* <h2>subtotal</h2> */}
            </div>
        </div>
    )
}

export default Checkout 
