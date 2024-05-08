import React from 'react';
import PricingPlan from '../PricingPlan';

const Pricing = () => {
  return (
    <section
      id='pricing'
      className='px-10 pt-20 w-full flex justify-center mb-40'
    >
      <div className='const-div w-full flex flex-col items-center'>
        <h2 className='text-3xl font-bold text-start w-full'>Pricing</h2>
        <PricingPlan />
      </div>
    </section>
  );
}



export default Pricing;
