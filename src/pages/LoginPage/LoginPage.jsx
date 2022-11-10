import React from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  return (
    <>
      <form>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={e => {
            e.preventDefault();
            login(username, password);
          }}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginPage;
