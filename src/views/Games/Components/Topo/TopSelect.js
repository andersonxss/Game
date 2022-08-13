import React from "react";
import { Box, Hidden, Typography } from "@mui/material";
import ButtonGenerateGames from "./ButtonGenerateGames";
import { GamesHooks } from "hooks";
import "../../Games.scss";

const TopSelect = () => {
  const { listCheckGames } = GamesHooks();
  let countItemGameChecked = listCheckGames.length;
  return (
    <Box className="topSelect">
      <Typography className="select">
        <span>{countItemGameChecked} de 8</span>selecionados
      </Typography>
      <Hidden only="xs">
        <ButtonGenerateGames />
      </Hidden>
    </Box>
  );
};

export default TopSelect;
