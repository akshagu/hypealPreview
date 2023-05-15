import React from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import SlideRightWhenVisible from '../hooks/SlideRightWhenVisible';

const CustomCard = styled(Card)(({ theme }) => ({
  background: '#000000',
  color: '#FFFFFF',
  position: 'relative',
  height: "450px",
  width: "350px",
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  position: "absolute",
  color: '#FFFFFF',
  fontWeight: 'bold',
  top: "150px",
  left: "50px",
  width: "250px"
}));

const Description = styled(Typography)(({ theme }) => ({
  color: '#BDBDBD',
  position: "absolute",
  top: "250px",
  left: "50px",
  width: "250px"
}));

const YellowBar = styled(Box)(({ theme }) => ({
  width: '60%',
  height: '4px',
  backgroundColor: '#FFC107',
  position: 'absolute',
  bottom: 30,
}));

const IconContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  left: '10px',
  color: '#FFC107',
}));

const FeatureCard = (props) => {
  return (
    <CustomCard >
        <SlideRightWhenVisible>

      <CustomCardContent>
        <IconContainer>
          <FontAwesomeIcon icon={faLightbulb} size="lg" />
        </IconContainer>
          
        <Title variant="h6" gutterBottom>
        {props.title}
        </Title>
        <Description variant="body2" gutterBottom>
        {props.description}
        </Description>
      </CustomCardContent>
      </SlideRightWhenVisible>
      <div className='flex justify-center'>

        <YellowBar />
      </div>
    </CustomCard>
  );
};

export default FeatureCard;
