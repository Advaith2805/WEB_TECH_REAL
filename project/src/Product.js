// ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useUser } from './UserContext';
import Navbar from './Navbar';
import './Product.css'
const ProductPage = () => {
  const { productId } = useParams();

  const [quantity, setQuantity] = useState(1);
  const { userEmail } = useUser();
 


  const handleAddToCart = () => {
    axios.post('http://localhost:3001/cart/add', {
      productId,
      quantity,
      userEmail,
      
      
    })
    .then((response) => {
      console.log('Product added to cart:', response.data);
    })
    .catch((error) => {
      console.error('Error adding product to cart:', error);
    });
  };

  return (
    
    <div>
      <Navbar/>
     
      <div className='oval8'>
       <h1 className='producttitle'>Product Details</h1>
      </div>
      {/* Display product details */}
      <div className='oval9'>
      <p className='pricepara'>Product Price: Rs. {productId}</p>
      </div>
     

      {/* Add to Cart section */}
      <div>
        <div className='oval10'>
         <label className='quan'>Quantity:</label>
       
        <input
         className='inputbox'
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        </div>

        <button className='addbutton'onClick={handleAddToCart}>Add to Cart</button>

      </div>

      {/* Link to view the shopping cart */}
      <div>
        <div className='oval11'>
          <div className='viewcart'>
        <Link to="/cart">View Shopping Cart</Link>
        </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default ProductPage;


