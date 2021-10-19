import React from 'react';
import './ProductScreen.css';
import {Link} from 'react-router-dom';

import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';

import {getProductDetails} from '../redux/actions/productActions';
import {addToCart} from '../redux/actions/cartActions';


function ProductScreen({match,history}) {
    const [qty,setQty]=useState(1);
    const dispatch=useDispatch();

    const productDetails=useSelector(state=>state.getProductDetails);
    const {loading,error, product} =productDetails;

   
useEffect(()=>{
    if(product && match.params.id !== product._id)
    {
        dispatch(getProductDetails(match.params.id))
    }
}, [dispatch, product, match]
);

const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };
    return (
   
      
    <div id="container">	


    {loading ? ( <h2>Loading ...</h2> ): 
            error ?  ( <h2> {error}</h2> )
            : (

        <>
        <div className="product-image">
            <img src={product.imageUrl} alt={product.name} />
        </div>


	<div className="product-details">
    <h1>{product.name}</h1>
    <span className="hint-star star">
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star-half-o" aria-hidden="true"></i>
		<i className="fa fa-star-o" aria-hidden="true"></i>
	</span>
        <div className="quantite">
            Quantité:<span className="quantiteNumber"> { (product.countInStock) >0 ?  "Disponible en stock"  : "Non disponible"} </span>
            
            <div className="box"> Choisir le nombre d articles:  
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
            </div>

        </div>

    <p className="information">" {product.description}.."</p>

    <div className="control">
    <Link className="btnBuy" to="/cart">
        <span className="price">{product.price}$</span>
        <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
        <span className="buy" onClick={addToCartHandler}>Acheter</span>
    </Link>

 </div>
 </div>

 </>

)}
</div>
    )
    
}

export default ProductScreen
