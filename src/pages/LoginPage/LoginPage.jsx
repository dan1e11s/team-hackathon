import React from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginPage/LoginPage.css";

// custom imports
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();
  return (
    <div className="loginmain">
      <CatchingPokemonIcon
        sx={{ fontSize: "35px", ml: "6%", mt: "2.5%", cursor: "pointer" }}
        onClick={() => navigate("/")}
      />
      <div className="loginpage">
        <form className="login-form">
          <h2>Login</h2>
          <input
            className="input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="button"
            onClick={e => {
              e.preventDefault();
              login(username, password);
              navigate("/product");
            }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
