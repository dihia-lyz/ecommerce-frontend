import React from 'react';
import {Link} from "react-router-dom";
import './CartPage.css';
import { removeFromCart } from '../redux/actions/cartActions';

function CartItem({item,qtyChangeHandler,removeHandler}) {
    return (
    <div className="containerTotal">	
        <div className="product-image-cart">
            <img src={item.imageUrl} alt={item.name} />
        </div>

        <div className="product-details-cart">
            <Link to={`/product/${item.product}`}>
                <h1>{item.name}</h1>
            </Link>

        
                
                
                <div class="box">Nombre d'articles  :   
                    <select value={item.qty} onChange={(e)=>qtyChangeHandler(item.product,e.target.value)}  >
                    {[...Array(item.countInStock).keys()].map(x=>
                        (
                            <option key={x+1} value={x+1}>
                                {x+1}
                            </option>
                        ))}
                    </select>
                </div>
            <div className="prixpart"> Prix  : <span className="prix">{item.price}$</span>
            </div>
           
            </div>
  
<div className="carItem-delete">
<button className="deletebtn"  onClick={()=>removeHandler(item.product)}>
    <i className="fas fa-trash"></i>
</button>
</div>

</div>

    )
}

export default CartItem
