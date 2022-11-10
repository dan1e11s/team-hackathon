import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import '../ProductSideBar/ProductSideBar.css';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { grey } from '@mui/material/colors';

const drawerWidth = 200;

const openedMixin = (theme) => ({
  color: '#999999',
  backgroundColor: '#101011',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  color: '#999999',
  backgroundColor: '#101011',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  position: 'absolute',
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const color = { color: '#999999' };

export default function ProductSideBar() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(false);

  return (
    <Drawer
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => {
        setOpen(false);
      }}
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <IconButton>
          <Diversity2Icon sx={{ color: '#fff' }} />
        </IconButton>
      </DrawerHeader>
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            className="list-item-btn"
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color,
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Home</ListItemText>
          </ListItemButton>
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
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Category</ListItemText>
            {category ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={category}
            timeout="auto"
            onChange={() => setCategory(false)}
          >
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              sx={{ pl: 5 }}
            >
              <FormControlLabel
                value="item 1"
                control={<Radio sx={color} />}
                label="Item 1"
              />
              <FormControlLabel
                value="item 2"
                control={<Radio sx={color} />}
                label="Item 2"
              />
              <FormControlLabel
                value="item 3"
                control={<Radio sx={color} />}
                label="Item 3"
              />
            </RadioGroup>
          </Collapse>
          <ListItemButton
            className="list-item-btn"
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color,
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <CommentIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Comments</ListItemText>
          </ListItemButton>
          <ListItemButton
            className="list-item-btn"
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color,
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <BookmarkIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Bookmark</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider color={grey[600]} />
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            className="list-item-btn"
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color,
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Home</ListItemText>
          </ListItemButton>
          <ListItemButton
            className="list-item-btn"
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color,
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <CommentIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Comments</ListItemText>
          </ListItemButton>
          <ListItemButton
            className="list-item-btn"
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                color,
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <BookmarkIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Bookmark</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
