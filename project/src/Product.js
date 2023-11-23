// ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useUser } from './UserContext';
import Navbar from './Navbar';

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
      <h1>Product Page</h1>
      {/* Display product details */}
      <p>Product Price: Rs. {productId}</p>
     

      {/* Add to Cart section */}
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      {/* Link to view the shopping cart */}
      <div>
        <Link to="/cart">View Shopping Cart</Link>
      </div>
    </div>
  );
};

export default ProductPage;


