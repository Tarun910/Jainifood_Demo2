
import React from 'react';
// Added Link import from react-router-dom
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-neutral-charcoal">
          <img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop" alt="Jaini Food" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 italic">Jaini <span className="text-primary font-accent lowercase normal-case">Food</span></h1>
          <p className="text-2xl font-bold uppercase tracking-widest">A Venture by Amit Jain</p>
        </div>
      </section>

      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-primary font-accent text-4xl mb-8 lowercase">Our Mission</h2>
        <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-12">Fast Food, <br/><span className="text-secondary">Done Right.</span></h3>
        <p className="text-xl text-neutral-grey font-medium leading-relaxed">
          At Jaini Food Neemuch, we believe that fast food should still be high quality. 
          Founded by Amit Jain, our restaurant has become the city's favorite spot for 
          mouthwatering pizzas, signature sandwiches, and fresh burgers. We focus on 
          cleanliness, speed, and unforgettable taste.
        </p>
      </section>

      <section className="py-32 px-6 bg-white border-y border-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Best Taste', icon: 'thumb_up', desc: 'Crafted with secret recipes and fresh ingredients.' },
            { title: 'Hygienic', icon: 'clean_hands', desc: 'Strict standards of cleanliness in our open kitchen.' },
            { title: 'Fast Delivery', icon: 'speed', desc: 'Committed to getting your food hot and fresh.' },
            { title: 'Cooperative Staff', icon: 'support_agent', desc: 'Helpful and friendly team to serve you better.' }
          ].map((v) => (
            <div key={v.title} className="bg-bg-cream p-12 rounded-[2.5rem] text-center border border-primary/5 group hover:border-primary/30 transition-all">
              <div className="size-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                <span className="material-symbols-outlined text-4xl">{v.icon}</span>
              </div>
              <h4 className="text-2xl font-black mb-4 tracking-tight uppercase">{v.title}</h4>
              <p className="text-sm text-neutral-grey font-medium leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-primary font-accent text-4xl mb-8 lowercase">Join Us</h2>
          <h3 className="text-5xl font-black mb-12 tracking-tight uppercase leading-none">Experience the Freshness</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://api.whatsapp.com/send?phone=919509205025" className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20">Order via WhatsApp</a>
            <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-secondary/20">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
