import * as React from "react";
import "../HomePage/HomePage.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

// custom imports
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/379959.png")`,
      }}>
      <div className="navbar">
        <CatchingPokemonIcon
          className="icon"
          sx={{ color: "white", fontSize: "35px", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <ul className="homepage-list">
          <li
            className="homepage-list-item"
            onClick={() => navigate("/product")}>
            Products
          </li>
          <li className="homepage-list-item">About us</li>
        </ul>
        <div className="stack">
          <Button
            className="homepage-btn"
            variant="text"
            onClick={() => navigate("/login")}>
            login
          </Button>
          <Button
            className="homepage-btn"
            variant="contained"
            onClick={() => navigate("/register")}>
            register
          </Button>
        </div>
      </div>
      <div className="info">
        <h1>Pokemon Shop</h1>
        <h2>What is Pokemon?</h2>
        <h3>Mysterious Creatures You Catch with a Poké Ball</h3>
        <p className="homepage-p">
          Pokémon are mysterious creatures filled with many secrets. Some
          Pokémon live alongside humans and some live in the wild in grassy
          fields, caves, or the sea, but much about their ecology that remains
          unknown. One of their main features is that they can be caught using a
          Poké Ball, which allows them to be carried around.
        </p>
        <img
          className="homeimg"
          src="https://www.freepnglogos.com/uploads/pokemon-logo-transparent-png-2.png"
          alt="pokemon"
        />
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
