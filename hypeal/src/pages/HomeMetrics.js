import React from 'react';
import { styled } from '@mui/system';
import { Grid, Typography, Box } from '@mui/material';

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
          <Typography color={"white"} variant="h4" gutterBottom>
            Tackling a huge market opportunity, with credentials
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <MetricContainer>
            <Typography color={"white"}  variant="h6" gutterBottom>
              $560B
            </Typography>
            <Typography color={"white"}  variant="subtitle1" gutterBottom>
              Market opportunity
            </Typography>
          </MetricContainer>
        </Grid>
        <Grid item xs={6} sm={3}>
          <MetricContainer>
            <Typography color={"white"}  variant="h6" gutterBottom>
              $5M
            </Typography>
            <Typography color={"white"}  variant="subtitle1" gutterBottom>
              Already raised
            </Typography>
          </MetricContainer>
        </Grid>
        <Grid item xs={6} sm={3}>
          <MetricContainer>
            <Typography color={"white"}  variant="h6" gutterBottom>
              20+
            </Typography>
            <Typography color={"white"}  variant="subtitle1" gutterBottom>
              Products launched
            </Typography>
          </MetricContainer>
        </Grid>
        <Grid item xs={6} sm={3}>
          <MetricContainer>
            <Typography color={"white"}  variant="h6" gutterBottom>
              500K
            </Typography>
            <Typography color={"white"}  variant="subtitle1" gutterBottom>
              Community reach
            </Typography>
          </MetricContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default HomeMetrics;
