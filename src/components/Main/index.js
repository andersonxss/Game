import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import "./Main.scss";
import { Box } from "@mui/material";

const Main = (props) => {
  const { children } = props;
  const [bgTemplate, setBgTemplate] = useState("bg-blue");
  let location = useLocation();
  React.useEffect(() => {
    const page = location.pathname;
    setBgTemplate(page === "/Games" ? "bg-grey" : "bg-blue");
  }, [location]);

  return <Box className={`main ${bgTemplate}`}>{children}</Box>;
};

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
