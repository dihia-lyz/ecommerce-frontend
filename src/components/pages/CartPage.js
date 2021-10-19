import React from 'react';
import './CartPage.css';
import CartItem from './CartItem';

import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";


const CartPage =()=> {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
      };
      const removeHandler = (id) => {
        dispatch(removeFromCart(id));
      };
    const getCartCount=()=>{
      return cartItems.reduce((qty,item)=>Number(item.qty)+qty,0)
    };


    const getTotalPrice=()=>{
      return cartItems.reduce((price,item)=>(item.price*item.qty)+price,0)
    };
    return (
        <>
        <div>
        <div className="leftScreen">
    
         {cartItems.length === 0 ? ( 
            <div className="Empty">
                <br/> 
            <h3>Aucun produit n'est choisi </h3>
              <Link to='/'><h2>Retour</h2></Link>
             
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
              />
            ))
          )}

</div>
<div className="rightScreen">
         <div className="total-part">
            <div className="buttonsTotal">
                    <p>Nombre de produits: {getCartCount()} </p>
                    <p>prix total : {getTotalPrice().toFixed(2)}$</p>
                    <button className="btnBuy">
                        <span className="buyPro">Paiement</span>
                    </button>
              </div>	
         </div>
</div>
</div>
         </>
    )
}

export default CartPage
