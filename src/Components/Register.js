import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://food-app-api-6ykw.onrender.com/api/auth/register', {
        username,
        password
      });
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3>Welcome to Food Ordering App</h3>
      <p>Register here!</p>
      <div className="d-flex flex-column">
        <div className="form-group">
          <label for="username" className="form-label m-2 h5">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label for="Password" className="form-label m-2 h5">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
      </div>  
      <button className="btn btn-primary">Submit</button>
      <hr />
      <span>Already have an account? | <Link to="/login">Sign In</Link></span>
    </form>
  );
}

export default Register;

