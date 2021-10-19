import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/eshop.png'; 
import { HashLink } from 'react-router-hash-link';
import {useSelector} from 'react-redux';

function Navbar() {
  const  cart=useSelector(state=>state.cart);
  const {cartItems}=cart;
  const getCartCount=()=> {
    return cartItems.reduce((qty,item)=>Number(qty+item.qty),0)
  }

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img className="logoImage" src={logo} alt="Logo" />
            BestShop
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <div className="searchBar">
          <div className="search-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search..." className="input-search"  name="search"/>
                  <button type="submit"><i className="fa fa-search"></i></button>
                </form>
          </div>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink to='/#Home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink to="/#Categories"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Catégories
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink to="/#ListeProduits"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Produits
              </HashLink>
            </li>
           
            <li className='nav-item'>
              <Link to="/cart" className='nav-cart' onClick={closeMobileMenu}>
                  <i className="fas fa-shopping-cart"></i>
                  <div className="cartlogo-badge">
                    <span>{getCartCount()}</span>
                  </div>
              </Link>
              
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--primary'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
