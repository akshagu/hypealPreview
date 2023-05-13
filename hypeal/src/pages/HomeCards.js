import React from 'react';
import { styled } from '@mui/system';
import {Grid, Typography} from '@mui/material';
import ProductCard from '../components/ProductCard';
import HButtonLight from '../components/HButtonLight';
import HButton from '../components/HButton';

const HomeCards = () => {

  const Heading = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
  }));

  const SubHeading = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
  }));

  const Content = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }));

  // Sample data for the products
  const products = [
    {
      id: 1,
      image: 'product1.jpg',
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$10',
      owners: 'John Doe',
    },
    {
      id: 2,
      image: 'product2.jpg',
      name: 'Product 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      price: '$15',
      owners: 'Jane Smith',
    },
    {
      id: 3,
      image: 'product3.jpg',
      name: 'Product 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      price: '$20',
      owners: 'Michael Johnson',
    },
  ];

  return (
    <>
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} textAlign="center">
        <Heading variant="h4">Book now, maximize your returns</Heading>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <SubHeading variant="h6">These are some of the companies that will present at our Demo Day.</SubHeading>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Content variant="body1">
          By booking your tokens now,
        </Content>
        <Content variant="body1">
          you get the best deals
        </Content>
        <Content variant="body1">
          and will have a higher chance of maximizing your ROI.
        </Content>
      </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            owners={product.owners}
          />
        </Grid>
      ))}
    </Grid>
    <CustomButtonGrid/>
    <HButton>See More</HButton>
    </>
  );
};

const ButtonGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const CustomButtonGrid = () => {
  return (
    <ButtonGrid container spacing={2}>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <HButtonLight>
            Web 3.0 acceleration
          </HButtonLight>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <HButtonLight>
            Acceleration
          </HButtonLight>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <HButtonLight>
            Transportation
          </HButtonLight>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <HButtonLight>
            Consultancy
          </HButtonLight>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <HButtonLight>
            Food
          </HButtonLight>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <HButtonLight>
            Fin-Tech
          </HButtonLight>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <HButtonLight>
            Ideas
          </HButtonLight>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <HButtonLight>
            HealthCare
          </HButtonLight>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <HButtonLight>
            Sport
          </HButtonLight>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <HButtonLight>
            Micro-mobility
          </HButtonLight>
        </Grid>
      </Grid>
    </ButtonGrid>
  );
};

export default HomeCards;
