import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
   
    const{name,img,seller,price,ratings}=props.product
    //const{HandleCart,product}=props;
    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className='product-info'>
          <p className='product-name'>{name}</p>
            <p>Price: {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
          </div>
          <button className='btn-cart'onClick={() => props.handleCart(props.product)}>
            <p className='btn-text'>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;