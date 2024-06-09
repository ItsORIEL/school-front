import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const navigateTo = (path: string) => {
    navigate(path);
    handleDrawerClose();
  };

  return (
    <div className="navbar">
      <div className="burgir">
        <button onClick={handleDrawerOpen} className="svg-background">
          <img src="/coolicon.svg" alt="Cool Icon" className="svg-background" />
        </button>
      </div>
      <div className="title">Shob Classes</div>
      <div className="victor">
        <button onClick={handleDrawerClose} className="svg-background">
          <img src="/vector.svg" alt="Cool Icon" className="svg-background" />
        </button>
      </div>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem button onClick={() => navigateTo("/")}>
            <ListItemText primary="Classes" />
          </ListItem>
          <ListItem button onClick={() => navigateTo("/students")}>
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem button onClick={() => navigateTo("/create")}>
            <ListItemText primary="Create" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
