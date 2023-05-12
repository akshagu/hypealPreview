import React, {useState, useEffect} from "react";
import {Grid, Box, Button} from "@mui/material";
import hypealLogo from "./hypealLogo.webp"

export default function Navbar(props) {

  return (
    <div className="NavBar">
      <Box  padding={"8px 2.5vw"} backgroundColor={"black"}>
        <Grid container margin="auto" direction="row" justifyContent="space-between" alignItems="center">
          <Grid item>
            <img style={{width:"100px"}} src={hypealLogo}/>
          </Grid>
          <Grid item>
            <Grid container direction={"row"} columnGap={4} alignItems={"center"}>
              <Grid item>
                <Button style={{backgroundColor:"yellow", color:"black"}} variant="contained">Get started</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
