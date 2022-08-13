import React from "react";
import { Box, Typography } from "@mui/material";
import "../../Games.scss";
const TopTitleGames = () => {
  return (
    <Box className="titleGames">
      <Typography className="select">1. Seleção</Typography>
      <Typography className="title">
        Para começar, selecione 8 jogos para entrar na competição e depois
        clique em Gerar Campeonato para prosseguir.
      </Typography>
    </Box>
  );
};

export default TopTitleGames;
