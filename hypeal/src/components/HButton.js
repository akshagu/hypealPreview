import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const YellowButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFEB3B',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
}));

const HButton = ({children}) => {
  return (
    <YellowButton variant="contained">
      {children}
    </YellowButton>
  );
};

export default HButton;
