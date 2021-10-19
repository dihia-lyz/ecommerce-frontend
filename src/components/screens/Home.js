import React from 'react';
import fond1 from '../../images/fond1.jpg';
import '../../App.css';
import ProductPart  from '../ProductPart';
import Category from '../category';


export default function  Home(){  
    return (
        <>
        <img id="Home" className="SlideImage" src={fond1} alt="fond"/>
        
            <Category />
            <ProductPart />
          
        
        </>
    );
  }
