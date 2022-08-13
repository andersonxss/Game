import React from "react";
import IconeTwitter from "../../../assets/icone/icon-twitter.png";
import IconeFaceBook from "../../../assets/icone/icon-facebook.png";
import IconeInstagram from "../../../assets/icone/icon-instagram.png";
import { Box, Link } from "@mui/material";
import "./Icones.scss";

const Icones = () => {
  return (
    <Box className="containerIcones">
      <Link href="#" underline="none">
        <img src={IconeTwitter} alt="Icone Twitter" />
      </Link>
      <Link href="#" underline="none">
        <img src={IconeFaceBook} alt="Icone Facebook" />
      </Link>
      <Link href="#" underline="none">
        <img src={IconeInstagram} alt="Icone Instagram" />
      </Link>
    </Box>
  );
};

export default Icones;
