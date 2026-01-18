
import React from 'react';
import { Link } from 'react-router-dom';
import { Location } from '../types';

export const locationData: Location[] = [
  {
    id: 'neemuch-main',
    city: 'Neemuch',
    district: 'LIC Road Opp. IDBI Bank',
    address: 'Bunglow no.23, LIC Road Opp. IDBI Bank, Neemuch (M.P)',
    status: 'Open Now',
    hours: '11:00 AM - 11:00 PM',
    icon: 'restaurant',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=800&auto=format&fit=crop'
    ],
    fullDescription: 'Our signature outlet in Neemuch specializes in fast food crafted with clean and hygienic practices. We provide a separate space for families and groups, bookable in advance.',
    phone: '+91 95092 05025',
    email: 'jainifood3@gmail.com',
    outletSpecials: [
      { id: 'j1', title: 'Volcano Cheese Pizza', description: 'Our bestseller with intense cheese levels.', price: '₹280', image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=600&auto=format&fit=crop' },
      { id: 'j2', title: 'Cheese Chutney Sandwich', description: 'Iconic spicy chutney layered with premium cheese.', price: '₹120', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop' },
      { id: 'j3', title: 'Double Cheese Burger', description: 'Two patties and 4 slices of cheese.', price: '₹140', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' }
    ]
  }
];

const Locations: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <section className="mb-16 border-l-8 border-primary pl-8">
        <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-6 leading-[0.9]">
          Find Our <span className="text-primary italic font-accent lowercase normal-case">Sanctuary</span>
        </h1>
        <p className="text-xl text-neutral-grey font-medium max-w-xl">
          Visit us at LIC Road for the best fast food experience in Neemuch.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {locationData.map((loc) => (
          <div key={loc.id} className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-primary/5 transition-all hover:-translate-y-2">
            <div className="relative aspect-video">
              <img src={loc.image} alt={loc.city} className="w-full h-full object-cover" />
              <div className="absolute top-6 right-6 bg-white/90 rounded-full px-4 py-1.5 flex items-center gap-2">
                <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest">Open Now</span>
              </div>
            </div>
            <div className="p-12">
              <h3 className="text-4xl font-black mb-2">{loc.city} Outlet</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-8">{loc.district}</p>
              <div className="space-y-4 mb-10 text-neutral-grey font-medium">
                <div className="flex items-center gap-4"><span className="material-symbols-outlined text-primary">location_on</span>{loc.address}</div>
                <div className="flex items-center gap-4"><span className="material-symbols-outlined text-primary">schedule</span>{loc.hours}</div>
              </div>
              <Link to={`/locations/${loc.id}`} className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3">
                View More Info <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
        <div className="bg-accent rounded-[3rem] p-12 text-neutral-charcoal flex flex-col justify-center items-center text-center gap-8 shadow-xl">
          <span className="material-symbols-outlined text-6xl">groups</span>
          <div>
            <h4 className="text-4xl font-black mb-4">FAMILY SPACE</h4>
            <p className="font-bold">Book our separate dedicated area for family gatherings and group parties in advance.</p>
          </div>
          <a href="tel:+919509205025" className="bg-neutral-charcoal text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest">Call to Book</a>
        </div>
      </section>
    </div>
  );
};

export default Locations;
