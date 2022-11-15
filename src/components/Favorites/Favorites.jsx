import React, { useEffect } from "react";
import { useFavorites } from "../../contexts/FavoritesContextProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import "../../components/Favorites/Favorites.css";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { getFavorites, favorites, deleteFavorites } = useFavorites();
  const navigate = useNavigate();

  useEffect(() => {
    getFavorites();
  }, []);
  //   console.log(
  //     favorites.favorites.map((item) => {
  //       return item.item.id;
  //     })
  //   );

  function favoritesCleaner() {
    localStorage.removeItem("favorites");
    getFavorites();
  }

  return (
    <div className="favoritepage">
      <CatchingPokemonIcon
        sx={{
          fontSize: "35px",
          ml: "6%",
          mt: "2.5%",
          cursor: "pointer",
          color: "white",
        }}
        onClick={() => navigate("/product")}
      />
      <div
        className="fronfavorite"
        style={{
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2%",
        }}>
        <h2>Your favorite list!</h2>
        <Box className="favoritebox">
          {favorites?.favorites.map(elem => (
            <Card
              className="favoriteCard"
              key={elem.item.id}
              sx={{ maxWidth: 345, marginBottom: "40px" }}>
              <CardMedia
                component="img"
                height="140"
                image={elem.item.image.front}
                alt="pokemon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elem.item.title}
                </Typography>
                <Typography variant="body2" className="favoriteprice">
                  Price: {elem.item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <button
                  className="delete"
                  onClick={() => deleteFavorites(elem.item.id)}>
                  Delete
                </button>
                <button className="button" onClick={favoritesCleaner}>
                  Learn More
                </button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Favorites;
