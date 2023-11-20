// Cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';

const Cart = () => {
  const { userEmail } = useUser();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/cart?userEmail=${userEmail}`)
      .then((response) => {
        setCartItems(response.data || []);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }, [userEmail]);

 // Cart.js

// ...

const handleRemoveItem = async (itemId) => {
  try {
    await axios.delete(`http://localhost:3001/cart/remove/${itemId}?userEmail=${userEmail}`);
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
  } catch (error) {
    console.error('Error removing item from cart:', error);
  }
};

// ...


  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.productId, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              <p>Product ID: {item.productId}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.quantity * item.productId}</p>
              <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* Display the total amount */}
      <p>Total Amount: {totalAmount}</p>
    </div>
  );
};

export default Cart;




