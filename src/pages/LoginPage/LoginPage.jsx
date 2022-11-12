import React from 'react';
import { useAuth } from '../../contexts/AuthContextProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPage/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { login } = useAuth();
  return (
    <div className="loginpage">
      <form className="login-form">
        <h2>Login</h2>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            login(username, password);
            navigate('/product');
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
