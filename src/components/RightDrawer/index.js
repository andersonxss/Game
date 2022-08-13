import * as React from "react";
import {
  Drawer,
  Button,
  ListSubheader,
  ListItemButton,
  List,
  ListItemText,
  Box,
} from "@mui/material";
import Hambuger from "../../assets/hambuger.svg";
import LogoLambadaXs from "../../assets/logo-lambada-xs.svg";

import "../../common/Colors.scss";

export default function Index() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button variant="text" onClick={() => setOpen(open ? false : true)}>
        <img src={Hambuger} alt="Hambuger" />
      </Button>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <List
          sx={{ width: "100%", minWidth: 250 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                bgcolor: "#334d80",
                color: "white",
              }}
            >
              <Box display="flex" alignItems="center" gap={2} p={1}>
                <img src={LogoLambadaXs} alt="LogoLambadaXs" />
                Menu
              </Box>
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemText primary="Sobre" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Contato" />
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
