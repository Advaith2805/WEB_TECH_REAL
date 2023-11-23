import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import HomePage from './Home';
import HomePage2 from './Home2';
import HomePage3 from './Home3';
import ProductPage from './Product';
import Cart from './Cart';
const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        
        <Route path="/Home" element={<HomePage />} />
        <Route path="/home2" element={<HomePage2/>}/>
        <Route path="/home3" element={<HomePage3/>}/>
        
        
        <Route path="/product/:productId" element={<ProductPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  );
};

export default App;
