import React from "react";
import HomeSection1 from "../components/HomeSection1.webp"
import {Grid} from "@mui/material";
import HButton from "../components/HButton.js";
import HInput from "../components/HInput";
import SlideRightWhenVisible from "../hooks/SlideRightWhenVisible";

function HomeMain() {

  return (
    <div className="Section">
      <Grid container width={"60vw"} spacing={2} alignItems="flex-start">
        <SlideRightWhenVisible>
          
        <Grid item xs={12}>
          <p className="text-[#FFF5F0] text-6xl font-semibold">Don't miss the Hypeal.</p>
        </Grid>
        <Grid item xs={12}>
        <p className="text-gray-200 text-2xl">Join our Demo Day on March 15th, 2024.</p>
        </Grid>

        <div className="mt-8 w-full ml-4">

        <p className="text-gray-300 text-sm ">Enter your email here *</p>

          <div className="flex flex-col sm:flex-row w-full gap-2">
            

        <HInput tw="flex-1" />
        <HButton variant="contained" color="primary" fullWidth>
              KEEP ME POSTED
        </HButton>
        </div>
        </div>

        </SlideRightWhenVisible>

      </Grid>
      <img className="Background" src={HomeSection1} alt=""/>
    </div>
  );
}

export default HomeMain;
