import React from 'react';
import type { MenuItem } from '../constants';
import { toppings } from '../constants';

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
    <img src={item.imgSrc} alt={item.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-4">
      <h4 className="font-semibold text-brand-dark">{item.name}</h4>
    </div>
  </div>
);

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm font-bold uppercase text-brand-secondary tracking-widest mb-2">Endless Possibilities</h2>
        <h3 className="text-4xl font-bold text-brand-dark mb-12">Craft Your Creation</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            <img 
              src="https://i.imgur.com/5CbshM1.png" 
              alt="Creamy Milkshake" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h4 className="text-2xl font-bold text-brand-dark">Creamy Milkshakes</h4>
              <p className="text-gray-600 mt-2">Start with our rich, smooth milkshake base and build your dream dessert drink.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
            <img 
              src="https://i.imgur.com/horP2jq.png" 
              alt="Fruity Beverage" 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h4 className="text-2xl font-bold text-brand-dark">Fruity Beverages</h4>
              <p className="text-gray-600 mt-2">Choose our refreshing fruity base for a vibrant, light, and delicious custom drink.</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-brand-dark mb-6">Add Premium Toppings</h4>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {toppings.map((topping) => (
              <MenuCard key={topping.name} item={topping} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Menu;
