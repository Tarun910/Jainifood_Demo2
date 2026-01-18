
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { locationData } from './Locations';

const LocationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = locationData.find((l) => l.id === id);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-6 bg-bg-beige">
        <h2 className="text-3xl font-bold">Location not found</h2>
        <Link to="/locations" className="text-primary font-bold underline">Back to all locations</Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-beige min-h-screen">
      <main className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link to="/locations" className="inline-flex items-center gap-2 text-neutral-grey hover:text-primary transition-colors text-sm font-bold">
            <span className="material-symbols-outlined text-sm font-bold">arrow_back</span>
            Back to Sanctuaries
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative group h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
            style={{ 
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 50%), url("${location.image}")` 
            }}
          ></div>
          <div className="absolute bottom-12 left-12 text-white max-w-2xl">
            <span className="bg-primary/90 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block backdrop-blur-sm">
              Featured Sanctuary
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">
              Jaini Food — {location.city}
            </h1>
            <p className="text-xl text-white/80 font-medium leading-relaxed">
              {location.district}. {location.fullDescription || "An oasis of plant-based culinary art and serene minimalist design."}
            </p>
          </div>
        </div>

        {/* Essential Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white p-10 rounded-3xl border border-primary/5 shadow-xl shadow-primary/5 group hover:border-primary/20 transition-all">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">location_on</span>
            <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Find Us</h3>
            <p className="text-sm font-medium leading-relaxed text-neutral-grey">{location.address}<br />{location.city}</p>
            <button className="inline-block mt-6 text-[10px] font-black tracking-widest border-b-2 border-primary/20 hover:border-primary transition-colors uppercase">
              Get Directions
            </button>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-primary/5 shadow-xl shadow-primary/5 group hover:border-primary/20 transition-all">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">schedule</span>
            <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Sanctuary Hours</h3>
            <div className="space-y-2 text-sm font-medium text-neutral-grey">
              <div className="flex justify-between"><span>Mon - Thu</span><span>11:00 — 22:00</span></div>
              <div className="flex justify-between"><span>Fri - Sat</span><span>11:00 — 23:00</span></div>
              <div className="flex justify-between font-bold text-neutral-charcoal"><span>Sunday</span><span>10:00 — 21:00</span></div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-primary/5 shadow-xl shadow-primary/5 group hover:border-primary/20 transition-all">
            <span className="material-symbols-outlined text-primary mb-6 text-3xl">call</span>
            <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-3">Connect</h3>
            <p className="text-sm font-medium text-neutral-grey mb-1">{location.phone || "+1 (555) 000-HERB"}</p>
            <p className="text-sm font-medium text-neutral-grey mb-6">{location.email}</p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-lg opacity-40 cursor-pointer hover:text-primary transition-colors">public</span>
              <span className="material-symbols-outlined text-lg opacity-40 cursor-pointer hover:text-primary transition-colors">share</span>
            </div>
          </div>
        </div>

        {/* Local Favorites */}
        {location.outletSpecials && location.outletSpecials.length > 0 && (
          <section className="mb-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-black tracking-tighter mb-3">Local Favorites</h2>
                <p className="text-neutral-grey font-medium">Exclusively curated seasonal dishes for our {location.city} guests.</p>
              </div>
              <button className="text-primary font-bold text-sm flex items-center gap-2 group hover:gap-3 transition-all">
                View Full Menu <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {location.outletSpecials.map((spec) => (
                <div key={spec.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 shadow-lg">
                    <img 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      src={spec.image} 
                      alt={spec.title} 
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest shadow-sm">
                      VEGAN
                    </div>
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{spec.title}</h4>
                      <p className="text-sm text-neutral-grey leading-relaxed">{spec.description}</p>
                    </div>
                    <span className="font-black text-primary text-lg">{spec.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Atmosphere Gallery */}
        {location.gallery && location.gallery.length > 0 && (
          <section className="mb-24">
            <h2 className="text-4xl font-black tracking-tighter mb-10 text-center md:text-left">The Space</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[650px]">
              <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-xl group">
                <img 
                  src={location.gallery[0]} 
                  alt="Main dining area"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              {location.gallery.slice(1, 5).map((img, idx) => (
                <div key={idx} className="relative rounded-3xl overflow-hidden shadow-xl group">
                  <img 
                    src={img} 
                    alt={`Atmosphere ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              ))}
              {/* If fewer than 5 images in gallery, add placeholders to keep layout stable */}
              {location.gallery.length < 5 && Array.from({ length: 5 - location.gallery.length }).map((_, idx) => (
                <div key={`placeholder-${idx}`} className="bg-primary/5 rounded-3xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary/20 text-4xl">eco</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Map Section */}
        <section className="mb-12" id="map">
          <h2 className="text-3xl font-black tracking-tighter mb-8">Location & Navigation</h2>
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-inner bg-white border border-primary/5 group">
            <div 
              className="absolute inset-0 grayscale opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-60" 
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop")',
                backgroundSize: 'cover'
              }}
            ></div>
            
            {/* Mock Map Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-primary text-white p-4 rounded-full shadow-2xl animate-bounce-slow">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <div className="bg-white px-5 py-3 mt-4 rounded-xl shadow-2xl text-[10px] font-black tracking-widest whitespace-nowrap border border-primary/10 uppercase">
                Herb & Hearth — {location.city}
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 flex flex-col gap-3">
              <button className="bg-white size-12 rounded-xl shadow-xl flex items-center justify-center font-bold text-xl hover:bg-primary hover:text-white transition-all">+</button>
              <button className="bg-white size-12 rounded-xl shadow-xl flex items-center justify-center font-bold text-xl hover:bg-primary hover:text-white transition-all">−</button>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-15%); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LocationDetail;
