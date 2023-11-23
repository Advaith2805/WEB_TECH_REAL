import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import HomePage from './Home';
import ProductPage from './Product';
import Cart from './Cart';
import AboutUs from './About';
import Navbar from './Navbar';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
};

export default App;