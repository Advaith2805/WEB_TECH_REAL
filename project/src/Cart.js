import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useUser } from './UserContext';
import './Cart.css';
import Navbar from './Navbar';
import qr from './QR.jpg';

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

  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/cart/remove/${itemId}?userEmail=${userEmail}`);
      setCartItems([]);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleClearCart = async () => {
    try {
      await axios.delete(`http://localhost:3001/cart/clear?userEmail=${userEmail}`);
      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.productId, 0);

  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <div className='oval12'>
        <h2 className='carttitle'>Shopping Cart and Checkout</h2>
      </div>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              <div className='productholder'>
                <p className='productprice'>Product Price: {item.productId}</p>
                <p className='productquan'>Quantity: {item.quantity}</p>
                <p className='totalpriceind'>Price: {item.quantity * item.productId}</p>
              </div>
              <button className='Removebutton' onClick={() => handleRemoveItem(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* Display the total amount */}
      <div className='totalamountoval'>
        <p className='totalamount'>Total Amount: {totalAmount}</p>
      </div>

      <div className='QRCODE'>
        <p className='qrtext'>PAY HERE</p>
        <img className='qrimage' src={qr} alt='QR Code' />
        <div className='oval13'>
          <div className='summarylink'>
            <Link to='/summary' onClick={handleClearCart}>CLICK AFTER PAYING</Link>
          </div>
        </div>
      </div>
=======
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
>>>>>>> f8e52e23a75e665c59a1af7e40f8e3b65ea62423
    </div>
  );
};

export default Cart;
