import { Box } from "@mui/material";
import React from "react";
import NotFound from "../../assets/notFound.png";
const index = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img src={NotFound} alt="NotFound" />
    </Box>
  );
};

export default index;
