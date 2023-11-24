import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Check if email and password are not empty
    if (!email || !password) {
      console.error('Email and password are required');
      alert("PLEASE FILL REQUIRED FIELDS");
      // Optionally, show a message to the user indicating that fields are required
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3001/signup', {
        email,
        password,
      });
  
      console.log(response.data);
  
      if (response.data.message === 'Signup successful') {
        // Redirect to the homepage ("/Home" in this case) after successful signup
        navigate('/Home', { state: { id: email } });
      } else if (response.data.message === 'User already exists') {
        // Handle the case where the user already exists (show a message, etc.)
        console.log('User already exists');
        alert('User already exists');
      } else {
        // Handle other success scenarios or show a message
        console.log('Unexpected response during signup:', response.data);
        alert("PLEASE ENTER VALID CREDENTIALS");
      }
    } catch (error) {
      console.error('Error during signup:', error);
  
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with status code:', error.response.status);
        console.error('Error details:', error.response.data);
        alert("USER ALREADY EXISTS");
        // Show a message to the user based on the error response
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
        // Show a message to the user indicating a network issue
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
        // Show a generic error message to the user
      }
    }
  };
  

  return (
    <div>
      <h1 class="header">Signup Page</h1>
      <form onSubmit={handleSignup}>
        <input
        class="emailbox"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        class="passwordbox"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button class="submitbutton" type="submit">Sign up</button>
      </form>

      <p class="loginq">
        Already signed up? <Link to="/">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;