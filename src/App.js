import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import ProductScreen from './components/pages/ProductScreen';
import Categories from './components/category';
import SpecCategory from './components/pages/SpecifyCategory';
import CartPage from './components/pages/CartPage';
import Footer from './components/Footer';
function App() {
  return (
    <>   
      <Router>
        <Navbar />
        <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/product/:id' exact component={ProductScreen} />
         <Route path='/Categories' exact component={Categories} />
         <Route path='/SpecifyCategory' exact component={SpecCategory} />
         <Route path='/cart' exact component={CartPage} />
          
        </Switch>
        
        <Footer/>
      </Router>
    </>
  );
}

export default App;
