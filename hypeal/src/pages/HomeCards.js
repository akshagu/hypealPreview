import React from 'react';
import { styled } from '@mui/system';
import {Grid} from '@mui/material';
import ProductCard from '../components/ProductCard';
import HButtonLight from '../components/HButtonLight';
import HButton from '../components/HButton';

import product1 from "../components/product1.webp"
import product2 from "../components/product2.webp"
import product3 from "../components/product3.webp"

const HomeCards = () => {

  // Sample data for the products
  const products = [
    {
      id: 1,
      image: product1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$10',
      owners: 'John Doe',
    },
    {
      id: 2,
      image: product2,
      name: 'Product 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      price: '$15',
      owners: 'Jane Smith',
    },
    {
      id: 3,
      image: product3,
      name: 'Product 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      price: '$20',
      owners: 'Michael Johnson',
    },
  ];

  return (
    <div>
    <Grid container spacing={2} justifyContent="center" py={16}>
      <Grid item xs={12} textAlign="center">
          <p className="text-6xl font-bold text-gray-900 mx-4">Book now, maximize your returns</p>
      </Grid>
      <Grid item xs={12} textAlign="center">
          <p className='text-gray-500 text-lg'>These are some of the companies that will present at our Demo Day.</p>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <p className='text-gray-500 text-lg'>
          By booking your tokens now,
        </p>
        <p className='text-gray-500 text-lg'>
          you get the best deals
        </p>
        <p className='text-gray-500 text-lg'>
            and will have a <span className='font-bold'>
            higher chance of maximizing your ROI.
            </span>
        </p>
      </Grid>
    </Grid>
      {/* <Grid container spacing={2} justifyContent="center"> */}
      <div className='flex justify-center'>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-4 my-8">

      {products.map((product) => (
          <ProductCard
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            owners={product.owners}
          />
      ))}
      </div>
          
        </div>
          
      <CustomButtonGrid />
      <div className="flex justify-center my-8 ">
        <HButton>See More</HButton>
      </div>
    </div>
  );
};

const ButtonGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));


const customButtons = [
  "Web 3.0",
  "Acceleration",
  "Transportation",
  "Consultancy",
  "Food",
  "Fin-Tech",
  "Ideas",
  "HealthCare",
  "Sport",
  "Micro-mobility"
]

const CustomButtonGrid = () => {
  return (
    <ButtonGrid container spacing={2}>
      <div className='grid grid-cols-5 gap-4 justify-center w-full px-4 sm:px-8 lg:px-16 xl:px-32'>

        {customButtons.map(item => (
          <HButtonLight
            tw="py-4 "
            key={item}>
        {item}
      </HButtonLight>))}
      </div>

    </ButtonGrid>
  );
};

export default HomeCards;
