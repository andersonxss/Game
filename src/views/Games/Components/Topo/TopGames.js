import React from "react";
import { TopHeaderBack } from "components";
import { Typography } from "@mui/material";
import "../../Games.scss";
const TopGames = () => {
  return (
    <TopHeaderBack color="grey">
      <Typography className="topGamesDescricao">
        <span>Copa</span>Games
      </Typography>
    </TopHeaderBack>
  );
};

export default TopGames;
