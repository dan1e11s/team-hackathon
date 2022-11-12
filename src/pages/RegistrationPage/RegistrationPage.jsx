import React from 'react';
import { useAuth } from '../../contexts/AuthContextProvider';
import { useState } from 'react';
import '../RegistrationPage/RegistrationPage.css';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const { usernameCheck } = useAuth();

  return (
    <div className="registerpage">
      <form className="register-form">
        <h2>Register User</h2>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Check password"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
        <div>
          <label className="register-label">Admin</label>
          <input
            className="checkbox"
            type="checkbox"
            value={isAdmin}
            onChange={(e) => setIsAdmin(!isAdmin)}
          />
        </div>
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            usernameCheck(username, age, password, checkPassword, isAdmin);
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
