import React from "react";
import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import "../../Games.scss";
const SkeletonGames = () => {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <Box className="containerCardsGames">
      {items.map((elem) => {
        return (
          <Box key={elem}>
            <Skeleton
              variant="rounded"
              width={141}
              height={200}
              sx={{ bgcolor: "#bdbdbd" }}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", bgcolor: "#bdbdbd" }}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "1rem", bgcolor: "#bdbdbd" }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default SkeletonGames;
