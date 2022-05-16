import React from 'react'
import './Product.css';

function Product({title,image,price,rating}){
    return(
        <div className='product'>
         <p className='productInfo'>{title}</p>
         <p className='productPrice'>
             <small>$</small>
             <strong>{price}</strong>
         </p>
         <div className='productRating'>
             {Array(rating).fill().map((_,i)=><p>⭐</p>)}
             
             </div>
         <img className='productImage' src={image} alt=""/>
        <button>Add to basket</button>
        </div>
    )
}
export default Product