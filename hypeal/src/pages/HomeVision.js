import React from 'react';
import { styled } from '@mui/system';
import { Grid, Typography, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleHalfStroke, faCircleDot } from '@fortawesome/free-solid-svg-icons';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#F8F8F8',
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

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
    <SectionContainer>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4" gutterBottom>
            Revolutionizing the world of ideas, startups, and company financing.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <IconContainer>
            <IconWrapper>
              <FontAwesomeIcon icon={faCircleCheck} size="3x" />
              <Caption variant="body2">Safe</Caption>
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faCircleHalfStroke} size="3x" />
              <Caption variant="body2">Easy</Caption>
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faCircleDot} size="3x" />
              <Caption variant="body2">Global</Caption>
            </IconWrapper>
          </IconContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default HomeVision;
