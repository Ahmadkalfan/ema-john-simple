import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (

        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <br>
                </br>
                <p><small>by: {seller}</small></p>
                <br />
                <p><small>${price}</small></p>
                <br />
                <p><small>only {stock} left please buy quickly</small></p>
                <br />
                <button onClick={()=>props.hadleAddProduct(props.product)} className='main-button' ><FontAwesomeIcon icon={faShoppingCart} />Click to add</button>


            </div>

        </div>
    );
};

export default Product;