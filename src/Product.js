import React from 'react'
import './Product.css'
function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The Lean startup</p>
                <p className="product_price">
                <small>₹</small>
                <strong>125.00</strong>

                </p>
                <div className="product_rating">
                    <p>★</p>
                    <p>★</p>
                    <p>★</p>
                    
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" alt="The Lean Startup"></img> 
            <button>Add To Basket</button>       
        </div>
    )
}

export default Product
