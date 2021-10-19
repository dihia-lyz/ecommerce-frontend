import React from 'react'
import './Product.css';
import {Link} from 'react-router-dom';

function Product({name,imageUrl,description,price,productId}) {
    return (
        <>
        <il className="container">
        <div className="images">
          <img src={imageUrl} alt="produit"/>
        </div>
        <div className="slideshow-buttons">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
        <p className="pick">choose size</p>
        <div className="sizes">
          <div className="size">S</div>
          <div className="size">M</div>
          <div className="size">L</div>
        </div>
        <div className="product">
          <h1>{name}</h1>
          <p>men's Running Shoe</p>
          <h2>${price}</h2>
          <p className="desc">{description.substring(0,60)}...</p>
          
        </div>
        <div className="buttons">
            <Link className="view"  to={`/product/${productId}`}>
             <button className="viewLink"
               >View</button> 
              </Link>
            <button className="like"><span>♥</span></button>
        </div>
      </il>
      </>
    )
};

export default Product;
