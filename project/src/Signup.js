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
      } else {
        // Handle other success scenarios or show a message
      }
    } catch (error) {
      console.error(error.response.data);
      // Handle error (show an error message, etc.)
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