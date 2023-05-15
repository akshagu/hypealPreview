import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import HInput from '../components/HInput';
import HButtonLight from '../components/HButtonLight';

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFEC01',
  padding: theme.spacing(4),
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const HomeFooter = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <p className='text-5xl font-bold mt-8 mb-16'>
          Stay Tuned!
        </p>
        <div className="mt-8 w-full max-w-4xl ml-4">

      <p className="text-gray-700 text-sm ">Enter your email here *</p>

        <div className="flex flex-col sm:flex-row w-full gap-2">
            <HInput tw="flex-1" />
            <HButtonLight variant="contained" color="#000000" fullWidth>
                  Join Now
            </HButtonLight>
        </div>
      </div>    
        <p className='mt-4 text-gray-700'>
        © 2023 | All rights reserved
          </p>
      </TextContainer>
    </SectionContainer>
  );
};

export default HomeFooter;
