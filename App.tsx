
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light text-brand-dark overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Menu />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
