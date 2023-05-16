import React from 'react';

const HomeInvest = () => {
  return (
    <div className='relative lg:mx-16 '>
      <img height={"500px"}
        // src={HomeSection1}
        src="https://static.wixstatic.com/media/11062b_e81e467b41f5440f92bab9ac565c7b28~mv2.jpg/v1/fill/w_1650,h_1256,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/11062b_e81e467b41f5440f92bab9ac565c7b28~mv2.jpg"
        alt="Hypeal" className='max-w-4xl h-auto' />
      <div className='bg-black max-w-2xl px-12 pt-12 pb-32 absolute top-[50%] right-10 ' style={{transform: "translate(0 ,-50%)"}}>
        <p className='text-6xl font-bold text-white max-w-sm'>
        Why <span className='text-[#FFEC01]'>invest</span> on Hypeal?
        </p>
        <p className='text-white font-semibold mt-8 text-lg'>On HYPEAL, you are rewarded for your knowledge. By investing in creators and founders from around the world, you can Monetize your investment quickly on our Trading platform or Hold and be rewarded as their business grows.</p>
      </div>
    </div>
  );
};

export default HomeInvest;
