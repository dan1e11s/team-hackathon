import React, { useEffect } from 'react';
import { useFavorites } from '../../contexts/FavoritesContextProvider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const Favorites = () => {
  const { getFavorites, favorites, deleteFavorites } = useFavorites();

  useEffect(() => {
    getFavorites();
  }, []);
  //   console.log(
  //     favorites.favorites.map((item) => {
  //       return item.item.id;
  //     })
  //   );

  function favoritesCleaner() {
    localStorage.removeItem('favorites');
    getFavorites();
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',

        overflow: 'hidden',
        // display: 'flex',
        // justifyContent: 'center',
        // // alignItems: 'center',
      }}
    >
      <h3>Your favorite list!</h3>
      <Box
        sx={{
          maxWidth: '1120px',
          border: '1px solid red',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {favorites?.favorites.map((elem) => (
          <Card key={elem.item.id} sx={{ maxWidth: 345, marginBottom: '40px' }}>
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
              <Typography variant="body2" color="text.secondary">
                Price: {elem.item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => deleteFavorites(elem.item.id)}
              >
                Delete
              </Button>
              <Button size="small" onClick={favoritesCleaner}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Favorites;
