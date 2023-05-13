import React from 'react';
import { styled } from '@mui/system';
import { Box, Grid, Typography } from '@mui/material';
import discovery from "../components/discovery.webp"
import bbc from "../components/bbc.webp"
import tedx from "../components/tedx.webp"
import forbes from "../components/forbes.webp"


const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "black"
}));

const CellContainer = styled(Box)(({ theme }) => ({
  border: '1px solid #E0E0E0',
  height: "250px",
  width: "250px",
}));

const HomePartners = () => {
  return (
    <SectionContainer>
      <Box border="0px solid #E0E0E0" borderRadius="0px">
        <Grid container spacing={0}>
          <Grid item>
            <CellContainer>
              <Typography color={"white"}>Our Partners</Typography>
            </CellContainer>
          </Grid>
          <Grid item>
            <CellContainer>
              <img style={{height:"90px"}} src={forbes} alt="1" />
            </CellContainer>
          </Grid>
          <Grid item>
            <CellContainer>
              <img style={{height:"40px"}} src={tedx} alt="2" />
            </CellContainer>
          </Grid>
          <Grid item>
            <CellContainer>
              <img style={{height:"40px"}} src={bbc} alt="3" />
            </CellContainer>
          </Grid>
          <Grid item>
            <CellContainer>
              <img style={{height:"40px"}} src={discovery} alt="4" />
            </CellContainer>
          </Grid>
        </Grid>
      </Box>
    </SectionContainer>
  );
};

export default HomePartners;
