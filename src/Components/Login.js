import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://food-app-api-6ykw.onrender.com/api/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/menu');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h3>Welcome to FoodieEats</h3>
      <p>Login Here!</p>
      <div className="d-flex flex-column">
          <div className="form-group">
            <label for="username" className="form-label m-2 h5">Username:</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="Password" className="form-label m-2 h5">Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
      </div>
      <button className="btn btn-primary">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Login;
