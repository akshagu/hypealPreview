import React from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import HButton from './HButton';

const CustomCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 400,
  borderRadius: 16,
}));

const CustomCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9 aspect ratio for the image
}));

const ProductCard = ({ image, name, description, price, owners }) => {
  return (
    <CustomCard>
      <CustomCardMedia image={image} title={name} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Price: {price}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Owners: {owners}
        </Typography>
        <HButton>
          Buy Now
        </HButton>
      </CardContent>
    </CustomCard>
  );
};

export default ProductCard;
