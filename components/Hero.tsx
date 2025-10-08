import React from 'react';

const Hero: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#menu')?.scrollIntoView({
          behavior: 'smooth'
        });
    };

  return (
    <section className="relative h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://i.postimg.cc/pTGBK61m/Google-AI-Studio-2025-10-07-T16-17-55-551-Z-1.png')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          Your Drink, <span className="text-brand-primary">Your Way.</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-light drop-shadow-md">
          Craft your perfect milkshake or fruity beverage with endless combinations. Fresh, fast, and uniquely yours.
        </p>
        <a 
          href="#menu"
          onClick={handleScroll} 
          className="bg-brand-secondary hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
        >
          Explore Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;