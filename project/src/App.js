import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import HomePage from './Home';
import ProductPage from './Product';
import Cart from './Cart';
import AboutUs from './About';
import HomePage2 from './Home2';
import HomePage3 from './Home3';
import './App.css'


const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Home2" element={<HomePage2/>}/>
        <Route path="/Home3" element={<HomePage3/>}/>
        
        
        <Route path="/product/:productId" element={<ProductPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
};

export default App;