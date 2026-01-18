
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-primary/5 pt-24 pb-12 rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined">restaurant</span>
              </div>
              <span className="text-2xl font-black text-neutral-charcoal uppercase italic tracking-tighter">Jaini <span className="text-primary font-accent lowercase normal-case text-3xl ml-[-4px]">Food</span></span>
            </div>
            <p className="text-neutral-grey font-medium text-sm leading-relaxed mb-8">
              Neemuch's premier fast food destination. Freshly crafted burgers, pizzas, and sandwiches. A venture by Amit Jain.
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest text-primary">GST: 23DUCPA6387M1ZE</p>
          </div>

          <div>
            <h6 className="text-primary font-accent text-2xl mb-8 lowercase">Contact</h6>
            <ul className="space-y-4 text-sm font-bold text-neutral-grey">
              <li className="flex gap-3 items-start"><span className="material-symbols-outlined text-primary">location_on</span>Bunglow no.23, LIC Road, Neemuch</li>
              <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary">call</span>+91 95092 05025</li>
              <li className="flex gap-3 items-center"><span className="material-symbols-outlined text-primary">mail</span>Jainifood3@gmail.com</li>
            </ul>
          </div>

          <div>
            <h6 className="text-primary font-accent text-2xl mb-8 lowercase">Quick Links</h6>
            <ul className="space-y-4 text-sm font-bold text-neutral-grey">
              <li><a href="#" className="hover:text-primary transition-colors">Order Online</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Menu Gallery</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Family Space</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Amit Jain</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-primary font-accent text-2xl mb-8 lowercase">Support</h6>
            <p className="text-sm font-medium text-neutral-grey mb-6">Have feedback or questions? We are always here to help.</p>
            <a href="https://api.whatsapp.com/send?phone=919509205025" className="inline-block w-full py-4 bg-primary text-white rounded-2xl font-black text-sm text-center shadow-lg shadow-primary/30 uppercase tracking-widest">Chat on WhatsApp</a>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-neutral-grey/60 font-black uppercase tracking-widest">
          <p>© 2024 Jaini Food Neemuch. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-primary">Clean & Hygienic</a>
            <a href="#" className="hover:text-primary">Cooperative Staff</a>
            <a href="#" className="hover:text-primary">Best Taste</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
