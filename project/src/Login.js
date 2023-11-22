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
      }
    } catch (error) {
      console.error(error.response.data);
      // Handle error (show an error message, etc.)
    }
    const userEmail=email;
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

