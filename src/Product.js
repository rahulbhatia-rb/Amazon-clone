import React from 'react'
import './Product.css'
function Product({title,price,image,rating}) {
    return (
        <div className="product">
            <div className="product_info">
    <p>{title}</p>
                <p className="product_price">
                <small>₹</small>
    <strong>{price}</strong>

                </p>
                <div className="product_rating star">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (                        <span role="img" aria-labelledby="star">⭐</span>

                    ))}
                     
                </div>
            </div>
            <img src={image} alt="The Lean Startup"></img> 
            <button>Add To Basket</button>       
        </div>
    )
}

export default Product
