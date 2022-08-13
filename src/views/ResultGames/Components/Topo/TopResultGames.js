import React from "react";
import { TopHeaderBack } from "components";
import "../../ResultGames.scss";
import { Typography } from "@mui/material";

const TopResultGames = () => {
  return (
    <TopHeaderBack>
      <Typography className="resultGamesTopDescricao">
        Seu resultado!
      </Typography>
    </TopHeaderBack>
  );
};

export default TopResultGames;
