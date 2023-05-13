import React from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';
import HomeSection1 from "../components/HomeSection1.webp"
import HButton from "../components/HButton"

const SectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4),
  backgroundColor: '#F8F8F8',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  left: "20vw",
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const OverlayBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: "10%",
  left: "-10vw",
  width: '50%',
  height: '80%',
  backgroundColor: '#000000',
  zIndex: 1,
  opacity: 0.8,
}));

const TextContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '90%',
  height: '100%',
  zIndex: 2,
  padding: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const Description = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  marginBottom: theme.spacing(2),
}));

const HomeLaunch = () => {
  return (
  <div className='relative lg:mx-16 my-16'>
    <img height={"500px"}
      src="https://static.wixstatic.com/media/11062b_518e16b449c74e648b16526713fc627b~mv2.jpg/v1/fill/w_1650,h_1256,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_518e16b449c74e648b16526713fc627b~mv2.jpg"
      alt="Hypeal" className='max-w-4xl h-auto ml-auto' />
    <div className='bg-black max-w-2xl px-12 pt-12 pb-32 absolute top-[50%] left-10 ' style={{transform: "translate(0 ,-50%)"}}>
      <p className='text-6xl font-bold text-white max-w-sm'>
      Why <span className='text-[#FFEC01]'>launch</span> on Hypeal?
      </p>
        <p className='text-white font-semibold mt-8 text-lg'>Raising funds is hard and time-consuming, besides expensive. Bring your raise on Hypeal and show your idea, startup, or business to the world stage. VCs, private investors and entrepreneurs are here, looking for the next big thing. Don't miss the Hypeal.</p>
        <HButton className='mt-8'>Get started</HButton>
    </div>
  </div>
  );
};

export default HomeLaunch;
