import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../cart/cart';

const Shop = () => {
    const hadleAddProduct =(product)=>{
        console.log('clicked' ,product);
        const newCart=[...cart,product]
        setCart(newCart)
    }
    const first10=fakeData.slice(0,10);
    const [products,setProduct]=useState(first10);
    const [cart,setCart]=useState([])
    
    return (
        
        <div className="shop-container">
            <div className="product-container">
             {
                products.map(product=><Product
                    hadleAddProduct={hadleAddProduct}
                    product={product}>
                    </Product>)
             }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
          
        </div>
    );
};

export default Shop;