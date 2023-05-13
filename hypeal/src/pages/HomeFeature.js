import React from 'react';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';
import FeatureCard from '../components/FeatureCard';

const CardGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const products = [
  {
    id: 1,
    title: "Pre Demo-Day: Book your Tokens",
    description: 'By joining Hypeal before Demo Day you can book your Tokens at the best prices, and be in the best position for Live Time.',
  },
  {
    id: 2,
    title: "Live Time: Trade them",
    description: 'Live Time is when the game happens: once creators show their update, its 30 days of trading, where you can buy and sell your tokens.',
  },
  {
    id: 3,
    title: "Company updates: Vest or Back off",
    description: 'When companies share updates, you can confirm your investments or trade your tokens during Live Time.',
  },
];

const HomeFeature = () => {
  return (
    <CardGrid container spacing={2}>
      {products.map((product) => (
      <Grid item xs={12} sm={6} md={4}>
        <FeatureCard title={product.title} description={product.description}/>
      </Grid>
      ))}
    </CardGrid>
  );
};

export default HomeFeature;
