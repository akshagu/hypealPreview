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
import HomeMetrics from "./HomeMetrics";
import HomePartners from "./HomePartners";
import HomeFooter from "./HomeFooter";
import HomeMain from "./HomeMain";

function Home() {

  return (
    <div className="Home">
      <HomeMain/>
      <HomeCards/>
      <HomeInvest/>
      <HomeLaunch/>
      <HomeFeature/>
      <HomeVision/>
      <HomeMetrics/>
      <HomePartners/>
      <HomeFooter/>
    </div>
  );
}

export default Home;
