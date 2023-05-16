import React from 'react';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleHalfStroke, faCircleDot } from '@fortawesome/free-solid-svg-icons';

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: theme.spacing(2),
}));

const Caption = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  textAlign: 'center',
}));

const HomeVision = () => {
  return (
    <div className='my-16'>
      <div className='flex justify-center'>
        <p className='text-5xl font-bold max-w-2xl text-center mt-16'>
          Revolutionizing the world of ideas, startups, and company financing.
        </p>          
      </div>
      
      <div className='flex justify-evenly my-16'>
            {[
            {
              icon:<FontAwesomeIcon icon={faCircleCheck} size="5x" color='#FFEC01' />,
              text: "Safe"
            },
            {
              icon: <FontAwesomeIcon icon={faCircleHalfStroke} size="5x"  color='#FFEC01' />,
              text: "Easy"
            },
            {
              icon: <FontAwesomeIcon icon={faCircleDot} size="5x"  color='#FFEC01' />,
              text: "Global"

            }
            ].map((item => (

            <IconWrapper>
              {item.icon}
              <Caption variant="body2">{item.text}</Caption>
            </IconWrapper>
            )))}
      </div>
        
          
    </div>
  );
};

export default HomeVision;
