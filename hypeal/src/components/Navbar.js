import React from "react";
import {Grid, Box} from "@mui/material";
import HButton from "./HButton.js";
import hypealLogo from "./hypealLogo.webp"

export default function Navbar(props) {

  return (
    <div className="NavBar">
      <Box  padding={"8px 2.5vw"} backgroundColor={"black"}>
        <Grid container margin="auto" direction="row" justifyContent="space-between" alignItems="center">
          <Grid item>
            <img style={{width:"100px"}} src={hypealLogo} alt=""/>
          </Grid>
          <Grid item>
            <Grid container direction={"row"} columnGap={4} alignItems={"center"}>
              <Grid item>
                <HButton>Get started</HButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
