import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
// import { useProducts } from '../../../contexts/ProductContextProvider';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';

const ProductCard = ({ item }) => {
  // const { deleteProduct } = useProducts();
  const [like, setLike] = useState(false);

  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: '350px',
        margin: '0 25px 0 0',
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
      <CardActions sx={{ displa: 'flex', justifyContent: 'space-between' }}>
        <Tooltip title="Details">
          <IconButton onClick={() => navigate(`details/${item.id}`)}>
            <ReadMoreIcon sx={{ color: '#999999' }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add to cart">
          <IconButton>
            <AddShoppingCartIcon sx={{ color: '#999999' }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add to favorites">
          <IconButton>
            <BookmarkAddIcon sx={{ color: '#999999' }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Like">
          <IconButton onClick={() => setLike(!like)}>
            <FavoriteIcon sx={{ color: `${like ? 'red' : '#999999'}` }} />
          </IconButton>
        </Tooltip>
        {/* <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
        <button onClick={() => deleteProduct(item.id)}>Delete</button> */}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
