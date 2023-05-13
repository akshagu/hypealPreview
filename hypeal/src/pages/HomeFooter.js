import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

const SectionContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFC107',
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
        <Typography variant="h4" color="textPrimary" gutterBottom>
          Stay Tuned
        </Typography>
        <Typography variant="body1" color="textPrimary">
          All rights reserved
        </Typography>
      </TextContainer>
    </SectionContainer>
  );
};

export default HomeFooter;
