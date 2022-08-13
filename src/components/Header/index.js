import * as React from "react";
import LogoLambda from "../../assets/logo-lambda3.svg";
import { AppBar, Container, Toolbar, Box, Hidden } from "@mui/material";
import { Icones, Menu, RightDrawer } from "components";

import "./Header.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="header">
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ mr: 5 }}>
              <NavLink to="/" underline="none">
                <img src={LogoLambda} alt="logo Lambda3" />
              </NavLink>
            </Box>
            <Hidden only="xs">
              <Menu />
              <Icones />
            </Hidden>

            <Hidden smUp={true}>
              <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="end">
                <RightDrawer />
              </Box>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
