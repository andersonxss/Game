import React from "react";
import { ButtonBack } from "components";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./TopHeaderBack.scss";

const Index = (props) => {
  const { children } = props;
  return (
    <Container fixed={true}>
      <Box className="topHeaderBack">
        <Grid container className="topHeaderBackContainer">
          <Grid item xs={2}>
            <ButtonBack />
          </Grid>
          <Grid item xs={8}>
            <Box
              display="flex"
              justifyContent="center"
              className="topHeaderDescricao"
            >
              {children}
            </Box>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Index;
