import React from 'react';
import { styled } from '@mui/system';
import { Grid, Typography, Box } from '@mui/material';
import SlideRightWhenVisible from '../hooks/SlideRightWhenVisible';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#000000',
}));

const MetricContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: theme.spacing(2),
}));

const HomeMetrics = () => {
  return (
    <SectionContainer>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} textAlign="center">
    
          <p className='text-white font-bold text-4xl max-w-3xl mx-auto'>

            Tackling a huge market opportunity, with credentials
            </p>

        </Grid>
        
        <div className='grid grid-cols-2 md:grid-cols-4 justify-between w-full gap-4 my-8'  >

        {[
        {title:"Market opportunity",value:"$560B"},
        {title:"Already raised",value:"$5M"},
        {title:"Products launched",value:"20+"},
        {title:"Community reach",value:"500K"},
          ].map((item => (
            <div className='text-white'>
              <SlideRightWhenVisible>

              <p className='text-[#FFEC01] text-6xl text-center'>{item.value}</p>
                <p className='text-center'>{item.title}</p>
              </SlideRightWhenVisible>
                
            </div>
          )))}
          </div>



      </Grid>
    </SectionContainer>
  );
};

export default HomeMetrics;
