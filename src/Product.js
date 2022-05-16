import React from 'react'
import './Product.css';

function Product(){
    return(
        <div className='product'>
         <p className='productInfo'>The lean startup</p>
         <p className='productPrice'>
             <small>$</small>
             <strong>11.99</strong>
         </p>
         <div className='productRating'>⭐⭐⭐⭐</div>
         <img className='productImage' src="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY436_FMwebp_QL65_.jpg" alt=""/>
        <button>Add to basket</button>
        </div>
    )
}
export default Product