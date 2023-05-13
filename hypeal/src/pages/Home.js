import React from "react";
import HomeSection1 from "../components/HomeSection1.webp"
import {Grid, Typography, TextField} from "@mui/material";
import HButton from "../components/HButton.js";
import HInput from "../components/HInput";
import HomeCards from "./HomeCards"
import HomeInvest from "./HomeInvest";
import HomeLaunch from "./HomeLaunch";
import HomeFeature from "./HomeFeature";
import HomeVision from "./HomeVision"

function Home() {

  return (
    <div className="Home">
      <div className="Section">
        <Grid container width={"60vw"} spacing={2} alignItems="flex-start">
          <Grid item xs={12}>
            <Typography color={"white"} variant="h6">Don't miss the Hypeal.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color={"white"} variant="body1">Join our Demo Day on March 15th, 2024.
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={2} alignItems="center">
            <Grid item xs={8}>
              <HInput/>
            </Grid>
            <Grid item xs={4}>
              <HButton variant="contained" color="primary" fullWidth>
                KEEP ME POSTED
              </HButton>
            </Grid>
          </Grid>
        </Grid>
        <img className="Background" src={HomeSection1}/>
      </div>
      <HomeCards/>
      <HomeInvest/>
      <HomeLaunch/>
      <HomeFeature/>
      <HomeVision/>
    </div>
  );
}

export default Home;
