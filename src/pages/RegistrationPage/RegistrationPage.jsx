import React from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useState } from "react";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const { usernameCheck } = useAuth();

  return (
    <>
      <form>
        <h2>Register User</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Check password"
          value={checkPassword}
          onChange={e => setCheckPassword(e.target.value)}
        />
        <input
          type="checkbox"
          value={isAdmin}
          onChange={e => setIsAdmin(!isAdmin)}
        />
        <label>Admin</label>

        <button
          onClick={e => {
            e.preventDefault();
            usernameCheck(username, age, password, checkPassword, isAdmin);
          }}>
          Register
        </button>
      </form>
    </>
  );
};

export default RegistrationPage;
