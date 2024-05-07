import React from 'react';

const ProductDesc = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 dark:text-gray-100">Introducing Our Advanced Pollen Identification System</h1>
        
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How It Works:</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Effortless Identification: Simply upload or enter data about your honey sample, including its characteristics and geographical origin.</li>
            <li className="mb-2">Advanced Algorithms: Our system utilizes sophisticated algorithms to analyze your input and match it with our extensive pollen library, ensuring precise identification.</li>
            <li>User-Friendly Interface: Our intuitive interface guides you through the identification process, making it accessible for both experts and novices.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8  dark:bg-gray-950">
          <h2 className="text-xl font-semibold mb-4">Key Features:</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Accuracy: Our system has been rigorously tested and proven to deliver reliable results, safeguarding the quality and authenticity of your honey.</li>
            <li className="mb-2">Speed: Say goodbye to time-consuming manual identification processes. Our platform delivers fast and efficient results, saving you valuable time and effort.</li>
            <li>Accessibility: Whether you&apos;re a small-scale producer or a large honey distributor, our platform is designed to meet your needs, offering accessibility and scalability.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 dark:bg-gray-950">
          <h2 className="text-xl font-semibold mb-4">Benefits:</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">Consumer Confidence: Empower your customers with transparent information about the honey they consume, fostering trust and loyalty.</li>
            <li className="mb-2">Industry Impact: Contribute to the fight against honey adulteration, promoting integrity and sustainability within the apiculture industry.</li>
            <li>Global Reach: With our platform, you can confidently export your honey products, knowing that they meet international standards and regulations.</li>
          </ul>
        </div>

        
      </div>
    </div>
  );
};

export default ProductDesc;
