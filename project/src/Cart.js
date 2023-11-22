// Cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';

const Cart = () => {
  const { userEmail } = useUser();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items when the component mounts
    axios.get(`http://localhost:3001/cart?userEmail=${userEmail}`)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }, [userEmail]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            <p>Product ID: {item.productId}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.productId}*{item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
