
import React from 'react';
import { Link } from 'react-router-dom';
import { SpecialItem } from '../types';

const Home: React.FC = () => {
  const specials: SpecialItem[] = [
    { id: '1', title: 'Volcano Cheese Pizza', description: 'Our signature melted cheese pull with fresh toppings.', price: '₹280', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop' },
    { id: '2', title: 'Cheese Chutney Sandwich', description: 'Neemuch specialty with tangy mint chutney and thick cheese.', price: '₹120', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop' },
    { id: '3', title: 'Double Cheese Burger', description: 'Two patties and layered cheese with Jaini special sauce.', price: '₹140', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop' },
    { id: '4', title: 'Cheese Dosa', description: 'Crispy rice crepe loaded with melted cheese and masala.', price: '₹160', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop' },
    { id: '5', title: 'Veg Fried Rice', description: 'Wok-tossed aromatic rice with fresh garden vegetables.', price: '₹150', image: 'https://images.unsplash.com/photo-1512058560366-cd24270083cd?q=80&w=600&auto=format&fit=crop' },
    { id: '6', title: 'Veg Noodles', description: 'Street-style spicy noodles with a crunch of fresh veggies.', price: '₹140', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop' }
  ];

  const testimonials = [
    { name: 'Devansh Sharma', text: 'Amazing variety and the ambience is perfect for families. The volcano pizza is a must-try!', rating: 5 },
    { name: 'Manisha Bhatnagar', text: 'Extreme cleanliness and very cooperative staff. The taste is authentic and fresh.', rating: 5 },
    { name: 'Kriti Sharma', text: 'Neemuch finally has a place for great sandwiches. Fast service and great quality.', rating: 4 },
    { name: 'Rohit Patidar', text: 'Best sandwiches in town. Affordable prices and very hygienic preparation.', rating: 5 },
    { name: 'Nishita Gattani', text: 'I love their fries and cheese chutney sandwich. Highly recommend Jaini Food!', rating: 5 },
    { name: 'Vatsal Rathore', text: 'Diverse selection and a great family-friendly experience. Order-on-time is true!', rating: 5 }
  ];

  return (
    <div className="pb-12 bg-bg-cream">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] bg-neutral-charcoal min-h-[640px] flex flex-col justify-center shadow-2xl">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
              <img alt="Hero" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1200&auto=format&fit=crop" />
            </div>
            <div className="relative z-20 px-8 md:px-16 max-w-2xl">
              <span className="inline-block px-5 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">Neemuch's Favorite Destination</span>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
                Fast Food. <br /><span className="text-primary italic font-accent lowercase normal-case">Fresh</span> Taste.
              </h1>
              <p className="text-xl text-white/80 font-medium leading-relaxed mb-10">Fast & Convenient dining that never compromises on quality. A venture by Amit Jain.</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://api.whatsapp.com/send?phone=919509205025" className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:scale-105 transition-all flex items-center gap-3">Order Now <span className="material-symbols-outlined">shopping_cart</span></a>
                <Link to="/gallery" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-black text-lg">View Menu</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-0 rounded-3xl overflow-hidden shadow-xl -mt-10 relative z-30">
        <div className="bg-primary p-6 flex items-center justify-center gap-4 text-white">
          <span className="material-symbols-outlined">location_on</span>
          <span className="font-bold text-sm">Bunglow no.23, LIC Road, Neemuch</span>
        </div>
        <div className="bg-secondary p-6 flex items-center justify-center gap-4 text-white">
          <span className="material-symbols-outlined">schedule</span>
          <span className="font-bold text-sm">Daily: 11 AM - 11 PM</span>
        </div>
        <div className="bg-accent p-6 flex items-center justify-center gap-4 text-neutral-charcoal">
          <span className="material-symbols-outlined">call</span>
          <span className="font-black text-sm">+91 95092 05025</span>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-primary font-accent text-3xl mb-4 lowercase">What We're Famous For</h2>
            <h3 className="text-5xl font-black tracking-tighter">Our Top <span className="text-primary underline decoration-accent decoration-4">Delicacies</span></h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specials.map((item) => (
              <div key={item.id} className="group bg-white p-6 rounded-[2.5rem] border border-primary/5 hover:border-primary/20 transition-all shadow-xl hover:shadow-primary/10">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-2xl font-black tracking-tight">{item.title}</h4>
                  <span className="text-primary font-black">{item.price}</span>
                </div>
                <p className="text-neutral-grey text-sm font-medium leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-secondary/5 border-y border-secondary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-secondary font-accent text-3xl mb-4 lowercase">Happy Customers</h2>
            <h3 className="text-5xl font-black tracking-tighter">Voices of <span className="text-secondary">Neemuch</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-secondary/5 relative">
                <div className="flex gap-1 text-accent mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-1">star</span>
                  ))}
                </div>
                <p className="text-neutral-grey font-medium leading-relaxed mb-8 italic">"{t.text}"</p>
                <h5 className="font-black text-neutral-charcoal uppercase tracking-widest text-xs">— {t.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
