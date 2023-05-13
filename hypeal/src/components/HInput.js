import React, { useState } from 'react';
import { styled } from '@mui/system';
import Input from '@mui/material/Input';

const Custom = styled(Input)(({ theme, hasText }) => ({
  backgroundColor: hasText ? '#000000' : '#808080',
  border: '1px solid #FFFFFF',
  borderRadius: '5px',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#000000',
    borderColor: '#FFFFFF',
  },
  '&:focus': {
    backgroundColor: '#000000',
    borderColor: '#FFFFFF',
    boxShadow: 'none',
  },
}));

const HInput = ({tw}) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <Custom
      className={tw}
      value={inputText}
      onChange={handleInputChange}
      hasText={inputText !== ''}
    />
  );
};

export default HInput;
