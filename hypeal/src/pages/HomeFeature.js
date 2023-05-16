import React from 'react';
import FeatureCard from '../components/FeatureCard';

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

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
      {products.map((product) => (
        <FeatureCard title={product.title} description={product.description} />
      ))}
    </div>  
  );
};

export default HomeFeature;
