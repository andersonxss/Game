import React from "react";
import { Box, Link } from "@mui/material";
import "./Menu.scss";
const Menu = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="menuContainer">
      <Link href="#" underline="none">
        Sobre
      </Link>
      <Link href="#" underline="none">
        Contato
      </Link>
    </Box>
  );
};

export default Menu;
