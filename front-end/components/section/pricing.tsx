import React from 'react';

const Pricing = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Flexible plan</p>
        </div>
        <div className="flex flex-col md:flex-row md:max-w-3xl mx-auto">
          <PricingCard title="Basic" price="$10" features={['feature', 'feature', 'feature']} />
          <PricingCard title="PRO" price="$20" features={['feature', 'feature', 'feature', 'feature']} popular />
          {/* Add more PricingCards here if needed */}
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, popular }) => {
  return (
    <div className="p-4 w-screen md:w-screen ">
      <div className={`h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden`}>
        
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium dark:text-gray-300">{title}</h2>
        <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none dark:text-gray-300">{price}</h1>
        {features.map((feature, index) => (
          <p key={index} className="flex items-center text-gray-600 mb-2 dark:text-gray-300">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-yellow-600 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>{feature}
          </p>
        ))}
        <button className="flex items-center mt-auto text-white bg-yellow-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-yellow-400  rounded">Buy plan
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Pricing;
