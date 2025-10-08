
import React from 'react';

const StepIcon1: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);
const StepIcon2: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
);
const StepIcon3: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
);
const StepIcon4: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
);


const HowItWorks: React.FC = () => {
  const steps = [
    { icon: <StepIcon1 />, title: 'Tap to Start', description: 'Begin your creation on our intuitive touch-screen device. No lines, no waiting.' },
    { icon: <StepIcon2 />, title: 'Mix & Match', description: 'Choose your base—creamy milkshake or refreshing fruity—and up to two delicious flavors.' },
    { icon: <StepIcon3 />, title: 'Customize It', description: 'Dial in your perfect sweetness and ice levels, then add premium toppings for an extra treat.' },
    { icon: <StepIcon4 />, title: 'Tap & Enjoy', description: 'Pay securely on the device and watch as our beverage expert crafts your unique beverage in minutes.' },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">Simple & Fast</h2>
        <h3 className="text-4xl font-bold text-brand-dark mb-12">Your Perfect Drink in 4 Easy Steps</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full bg-brand-primary/20 text-brand-primary">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
