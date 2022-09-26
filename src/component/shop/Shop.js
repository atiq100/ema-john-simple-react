import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../product/Product';

import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const HandleCart = (product) =>{
        console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product=><Product 
                    key={product.id}
                    product={product}
                    handleCart ={HandleCart}
                ></Product>)
               }
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: {cart.price}</p>
            </div>
        </div>
    );
};

export default Shop;