import React from 'react';

const FeatureIcon1: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);
const FeatureIcon2: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const FeatureIcon3: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    { icon: <FeatureIcon1 />, title: 'Endless Creativity', description: 'With dozens of flavors and toppings, your perfect combination is waiting to be discovered.' },
    { icon: <FeatureIcon2 />, title: 'Ultimate Convenience', description: 'Our revolutionary device-based ordering means no more waiting in line. Just tap, create, and go.' },
    { icon: <FeatureIcon3 />, title: 'Premium Ingredients', description: 'We use only the freshest fruits and richest ingredients to ensure every sip is of the highest quality.' },
  ];

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase text-brand-accent tracking-widest mb-2">The YourMix Difference</h2>
          <h3 className="text-4xl font-bold">More Than Just a Drink</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-brand-dark/50 rounded-lg">
              <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full bg-brand-primary text-white">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;