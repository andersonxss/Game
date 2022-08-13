import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./ButtonBack.scss";
const index = ({ color }) => {
  console.log(color);
  return (
    <Box className="containerButtonBack">
      <Link
        to="/"
        className={`buttonBack ${color !== undefined ? color : "grey"}`}
      >
        <svg
          width="12"
          height="21"
          viewBox="0 0 12 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.279 19.5124C11.4334 19.6689 11.52 19.88 11.52 20.0998C11.52 20.3197 11.4334 20.5307 11.279 20.6872C11.2031 20.7643 11.1126 20.8256 11.0128 20.8674C10.913 20.9091 10.8058 20.9307 10.6976 20.9307C10.5894 20.9307 10.4823 20.9091 10.3825 20.8674C10.2827 20.8256 10.1922 20.7643 10.1162 20.6872L0.720238 11.1976C0.56583 11.0411 0.479259 10.8301 0.479259 10.6102C0.479259 10.3904 0.56583 10.1793 0.720238 10.0228L10.1162 0.53323C10.1922 0.456131 10.2827 0.394903 10.3825 0.35311C10.4823 0.311318 10.5894 0.289795 10.6976 0.289795C10.8059 0.289795 10.913 0.311318 11.0128 0.35311C11.1126 0.394903 11.2031 0.456131 11.279 0.53323C11.4334 0.689747 11.52 0.900768 11.52 1.12063C11.52 1.34049 11.4334 1.55151 11.279 1.70803L2.70984 10.6108L11.279 19.5124Z"
            fill="#37414E"
          />
        </svg>

        <Typography>Voltar para o início</Typography>
      </Link>
    </Box>
  );
};

export default index;
