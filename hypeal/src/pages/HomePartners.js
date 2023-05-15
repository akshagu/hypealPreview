import React from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';
import discovery from "../components/discovery.webp"
import bbc from "../components/bbc.webp"
import tedx from "../components/tedx.webp"
import forbes from "../components/forbes.webp"
import SlideRightWhenVisible from '../hooks/SlideRightWhenVisible';


const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "black"
}));

const CellContainer = styled(Box)(({ theme }) => ({
  border: '1px solid #E0E0E0',
  height: "250px",
  width: "250px",
}));

const HomePartners = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-black px-8 py-16'>
        

      <div className='flex items-center justify-center border-gray-400 border-[0.25px]'>
      <SlideRightWhenVisible>
        <p className='text-5xl mx-auto font-semibold text-white'>Our <span className='block text-[#FFEC01]'>Partners</span></p>
        </SlideRightWhenVisible>
        </div>
        
        
      {[discovery, bbc, tedx, forbes].map((item => (
        <div className='flex items-center justify-center border-gray-400 border-[0.25px]'>
          <SlideRightWhenVisible>
            

          <img src={item} alt="logo" className='w-[60%] mx-auto'/>
      </SlideRightWhenVisible>
        </div>
      )))}

    </div>
  );
};

export default HomePartners;
