import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowBack from "../../assets/ArrowBack.svg";
import { Link } from "react-router-dom";
import "./ButtonBack.scss";
const index = () => {
  return (
    <Box className="containerButtonBack">
      <Link to="/" className="buttonBack">
        <img src={ArrowBack} alt="ArrowBack" />
        <Typography className="buttonBack">Voltar para o início</Typography>
      </Link>
    </Box>
  );
};

export default index;
