import React from "react";
import { AppBar, Box } from "@mui/material";
import ButtonGenerateGames from "./Topo/ButtonGenerateGames";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "#ffffff",
        height: 89,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <ButtonGenerateGames />
      </Box>
    </AppBar>
  );
};

export default Footer;
