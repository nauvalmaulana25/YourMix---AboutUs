import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://i.postimg.cc/LXwNrWkc/Google-AI-Studio-2025-10-07-T16-14-10-027-Z-1.png" 
              alt="YourMix kiosk" 
              className="rounded-xl shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">Our Story</h2>
            <h3 className="text-4xl font-bold text-brand-dark mb-6">Reimagining Refreshment</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              YourMix was born from a simple idea: beverages should be as unique as the people who drink them. We got tired of limited menus and the hassle of manual ordering. So, we created a revolutionary system that puts you in the driver's seat.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to blend technology with taste, providing a seamless, fun, and delicious experience. From our touch-screen kiosks to our premium ingredients, every detail is designed to give you the perfect sip, every single time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;