import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import { useCart } from '../../../contexts/CartContextProvider';
import { useFavorites } from '../../../contexts/FavoritesContextProvider';

const ProductCard = ({ item }) => {
  const [like, setLike] = useState(false);
  const { addProductToCart, checkProductInCart } = useCart();
  const { addFavorites, checkFavorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <Card
      className="product-card"
      sx={{
        maxWidth: '480px',
        margin: '0 25px 40px 0',
        padding: '20px',
        backgroundColor: '#101011',
        color: '#999999',
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.image.front}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="#999999">
          Price: {item.price}$
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tooltip title="Details">
          <IconButton onClick={() => navigate(`/details/${item.id}`)}>
            <ReadMoreIcon sx={{ color: '#999999' }} />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={`${
            checkProductInCart(item.id) ? 'Delete to cart' : 'Add to cart'
          }`}
        >
          <IconButton onClick={() => addProductToCart(item)}>
            <AddShoppingCartIcon
              sx={{
                color: `${checkProductInCart(item.id) ? '#388E3C' : '#999999'}`,
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={`${
            checkFavorites(item.id) ? 'Delete to Favorites' : 'Add to Favorites'
          }`}
        >
          <IconButton onClick={() => addFavorites(item)}>
            <BookmarkAddIcon
              sx={{
                color: `${checkFavorites(item.id) ? '#388E3C' : '#999999'}`,
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Like">
          <IconButton onClick={() => setLike(!like)}>
            <FavoriteIcon sx={{ color: `${like ? 'red' : '#999999'}` }} />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
