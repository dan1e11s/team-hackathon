import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { useProducts } from '../../../contexts/ProductContextProvider';

const ProductCard = () => {
  const { products, deleteProduct } = useProducts();

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {products.map((item) => (
        <Card sx={{ maxWidth: '20%' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default ProductCard;
