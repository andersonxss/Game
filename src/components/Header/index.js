import * as React from "react";
import LogoLambda from "../../assets/logo-lambda3.svg";
import { AppBar, Container, Toolbar, Box, Link } from "@mui/material";
import { Icones, Menu } from "components";
import "./Header.scss";
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="header">
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ mr: 5 }}>
              <Link
                href="https://www.lambda3.com.br/"
                target="_blank"
                underline="none"
              >
                <img src={LogoLambda} alt="logo Lambda3" />
              </Link>
            </Box>

            <Menu />
            <Icones />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
