import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"
import { useUser } from './UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const { updateUserEmail } = useUser();


  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Check if email and password are not empty
    if (!email || !password) {
      console.error('Email and password are required');
      alert("PLEASE ENTER THE REQUIRED CREDENTIALS");
      // Optionally, show a message to the user indicating that fields are required
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
  
      console.log(response.data);
  
      if (response.data.message === 'Login successful') {
        // Redirect to the homepage ("/Home" in this case)
        navigate('/Home', { state: { id: email } });
      } else {
        // Handle other success scenarios or show a message
        console.log('Login unsuccessful. Unexpected response:', response.data);
        // Show a message to the user
      }
    } catch (error) {
      console.error('Error during login:', error);
  
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with status code:', error.response.status);
        console.error('Error details:', error.response.data);
        alert("INVALID CREDENTIALS");
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
  
    const userEmail = email;
    updateUserEmail(userEmail);
  };
  
  

  return (
    <body>
    
     <div>
      <div class="oval">
      <h1>THE GAMING HUB</h1>
      </div>
      <form onSubmit={handleLogin}>
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
        <button class="submitbutton" type="submit">Login</button>
      </form>

      <p class="signupq">
        Not signed up? <Link to="/signup" >Sign up here </Link>
      </p>
    </div>
    </body>
  );
};

export default Login;

