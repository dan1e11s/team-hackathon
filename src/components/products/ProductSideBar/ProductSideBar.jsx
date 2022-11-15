import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "../ProductSideBar/ProductSideBar.css";
import { grey } from "@mui/material/colors";
import FilterProduct from "../FilterProduct/FilterProduct";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useEffect } from "react";

const drawerWidth = "15%";

const openedMixin = theme => ({
  color: "#999999",
  backgroundColor: "#101011",
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = theme => ({
  backgroundColor: "#101011",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  position: "absolute",
  zIndex: "2",
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const color = { color: "#999999" };

export default function ProductSideBar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");

  const username = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    username ? setUser(username.isAdmin) : setUser(false);
  }, [user]);

  const navigate = useNavigate();

  return (
    <Drawer
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      variant="permanent"
      open={open}>
      <DrawerHeader>
        <IconButton>
          <CatchingPokemonIcon sx={{ color: "white" }} />
        </IconButton>
      </DrawerHeader>
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            className="list-item-btn"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => navigate("/product")}>
            <ListItemIcon
              sx={{
                color,
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Home</ListItemText>
          </ListItemButton>
          <FilterProduct open={open} />
          <ListItemButton
            className="list-item-btn"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}>
            <ListItemIcon
              sx={{
                color,
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}>
              <BookmarkIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
              Favorites
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            className="list-item-btn"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}>
            <ListItemIcon
              sx={{
                color,
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText sx={{ opacity: open ? 1 : 0 }}>Comments</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider color={grey[600]} />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            className="list-item-btn"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
            onClick={() => navigate("/admin")}>
            <ListItemIcon
              sx={{
                color,
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                display: `${user === true ? "block" : "none"}`,
              }}>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            <ListItemText
              sx={{
                opacity: open ? 1 : 0,
                display: `${user === true ? "block" : "none"}`,
              }}>
              Admin Panel
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
