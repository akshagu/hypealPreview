import React from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';
import HomeSection1 from "../components/HomeSection1.webp"

const SectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4),
  backgroundColor: '#F8F8F8',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const OverlayBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: "10%",
  left: "60vw",
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

const HomeInvest = () => {
  return (
    <SectionContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <ImageContainer>
          <img height={"500px"} src={HomeSection1} alt="Hypeal" />
            <OverlayBox>
            <TextContainer>
              <Title variant="h4" gutterBottom>
                Why invest in Hypeal?
              </Title>
              <Description variant="body1" gutterBottom>
                On HYPEAL, you are rewarded for your knowledge.
              </Description>
              <Description variant="body1" gutterBottom>
                By investing in creators and founders from around the world, you can monetize your investment quickly on our trading platform or hold and be rewarded as their business grows.
              </Description>
            </TextContainer>
            </OverlayBox>
          </ImageContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default HomeInvest;
