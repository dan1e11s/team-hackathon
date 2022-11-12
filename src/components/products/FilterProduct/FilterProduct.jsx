import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CategoryIcon from '@mui/icons-material/Category';
import { useProducts } from '../../../contexts/ProductContextProvider';

const FilterProduct = ({ open }) => {
  const { fetchByParams, getProducts } = useProducts();
  const [category, setCategory] = useState(false);
  const color = { color: '#999999' };

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{ px: 2.5 }}
        onClick={() => setCategory(!category)}
        className="list-item-btn"
      >
        <ListItemIcon
          sx={{
            color,
          }}
        >
          <CategoryIcon category={category} setCategory={setCategory} />
        </ListItemIcon>
        <ListItemText sx={{ opacity: open ? 1 : 0 }}>Category</ListItemText>
        {category ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={category}
        timeout="auto"
        onChange={() => {
          getProducts();
          setCategory(false);
        }}
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          sx={{ pl: 5 }}
          onChange={(e) => fetchByParams('category', e.target.value)}
        >
          <FormControlLabel
            value="all"
            control={<Radio sx={color} />}
            label="All"
          />
          <FormControlLabel
            value="seed"
            control={<Radio sx={color} />}
            label="Seed Pokemon"
          />
          <FormControlLabel
            value="flame"
            control={<Radio sx={color} />}
            label="Flame Pokemon"
          />
          <FormControlLabel
            value="turtle"
            control={<Radio sx={color} />}
            label="Turtle Pokemon"
          />
          <FormControlLabel
            value="mouse"
            control={<Radio sx={color} />}
            label="Mouse Pokemon"
          />
          <FormControlLabel
            value="bird"
            control={<Radio sx={color} />}
            label="Bird Pokemon"
          />
          <FormControlLabel
            value="cocoon"
            control={<Radio sx={color} />}
            label="Cocoon Pokemon"
          />
        </RadioGroup>
      </Collapse>
    </ListItem>
  );
};

export default FilterProduct;
