import React from 'react';
import './categoryCard.css';
import {Link} from 'react-router-dom';
import clothes from '../images/clothes.jpg'
import chaussure from '../images/chaussures.jpg';
import montre from '../images/montres.jpg';
import appareil from '../images/appareils.jpg';
import accessoires from '../images/accessoires.jpg';
import maison from '../images/maison.jpg';

function categoryCard() {
    return (
        <div className="category__container">
            <ul className="cards">
             <li>
                <Link to="/SpecifyCategory" className="card">
                <img src={clothes} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">                     
                    <div className="card__header-text">
                        <h3 className="card__title">Vêtements</h3>            
                    </div>
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </Link>      
            </li>
            <li>
            <Link to="/SpecifyCategory" className="card">
                <img src={chaussure} className="card__image" alt="" />
                <div className="card__overlay">        
                    <div className="card__header">     
                    <div className="card__header-text">
                        <h3 className="card__title">Chaussures</h3>
                    </div>
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </Link>
            </li>
            <li>
            <Link to="/SpecifyCategory" className="card">
                <img src={montre} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">                     
                    <div className="card__header-text">
                        <h3 className="card__title">Montres</h3>          
                    </div>
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </Link>
            </li>
            <li>
            <Link to="/SpecifyCategory" className="card">
                <img src={appareil} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">                
                    <div className="card__header-text">
                        <h3 className="card__title">Appareils</h3>
                    </div>          
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </Link>
            </li>  

            <li>
            <Link to="/SpecifyCategory" className="card">
                <img src={accessoires} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">                    
                    <div className="card__header-text">
                        <h3 className="card__title">Accessoires</h3>            
                    </div>
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </Link>      
            </li>

            <li>
            <Link to="/SpecifyCategory" className="card">
                <img src={maison} className="card__image" alt="" />
                <div className="card__overlay">
                    <div className="card__header">                    
                    <div className="card__header-text">
                        <h3 className="card__title">Articles maison</h3>            
                    </div>
                    </div>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                </Link>      
            </li>
    
    </ul>


        </div>
    )
}

export default categoryCard


