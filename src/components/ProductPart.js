import React from 'react';
import Product from './Product';
import './productPart.css';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
//actions
import {getProducts as listProducts} from './redux/actions/productActions';

const ProductPart=() =>{
const dispatch =useDispatch();

const getProducts = useSelector((state) => state.getProducts);
const { products, loading, error } = getProducts;


useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


    return (
        <div className="first_container"id="ListeProduits">
        <div className="box-c">
                <span className="custom-underline">Nos produits</span>
        </div>

            <ul className="grid_element">
            {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              countInStock={product.countInStock}
              qty={product.qty}
            />
          ))
        )}
         
            </ul>
        </div>
    )
}

export default ProductPart
