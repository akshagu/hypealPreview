import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  background: '#FFFFFF',
  border: '1px solid #E0E0E0',
  color: '#000000',
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    background: '#000000',
    color: '#FFFFFF',
  },
}));

const HButtonLight = ({children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};

export default HButtonLight;
