
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Moments');

  const categories = ['All Moments', 'The Farm', 'Art of Plating', 'Our Space', 'Behind the Scenes'];

  const galleryItems = [
    {
      category: 'Art of Plating',
      title: 'Seasonal Texture Medley',
      desc: 'Local farm micro-greens with honey-glazed heirloom roots.',
      aspect: 'aspect-[4/5]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJNZhu3-RhShqAzcRwMqxljujuywsc8-NkkTsu6twA64W4_UEiu-6jdFI2P7CiQ28Nt_nkz39jKo_FZd2GpMHp0SHvdanAlPojUrkKVwz3hmInoK29wd_xmYIGnjPI1JiUgrSAuuNyZUb8WfFOBu-1mZH1n9_jFE5bOKUZCgCY_m0J6MHMayyK35QVMmWBj3pxGgQh01guJHLhvYxC_EhW-_zKWqUHxTVTPTLhbGaADLXXOBUxm0sqXVbcfpmnYV3hbcFcT86gkeM8'
    },
    {
      category: 'Our Space',
      title: 'Scandinavian Zen',
      desc: 'Designed for mindful consumption and natural light.',
      aspect: 'aspect-square',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy5imaurzhuH8b7m7aTGNhjRzJ-0vB7npa57Mw_x7LjJyBx8NsC_QmHI8oPhE1lIvzH0nyqfbEo8qUrAedpATvl6dGn2u4sWX7kBFW5_KGPuAE8t-581UUIjrz4UNYbNV-xWk-YQAfz_z1jPl3GpsZJSZ7gYaIY4oHYWG9eVNDjRUDcy9eD8yXVkdEE57yxq2lFCDgm7TTNqy5-2xriJyitq_1SARNLsb-Ohfwa0gj7g4I4tpMD_2z1UiH_C2S5ZWojRtZIVJrWbaO'
    },
    {
      category: 'The Farm',
      title: 'Dawn Harvest',
      desc: 'Sourced at peak ripeness from our backyard patch.',
      aspect: 'aspect-[3/4]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdm0hbiUJH6ieLmX5ZfH04qZ0LX-AoTIkKkIKSmAxFeCnbYqInokJs9yPVMsMVSmHMeWR_OrC3rH-0o0SGsAXJFSyD3gunQQYrqhgnwlOxjbbmH-LdVb9jUEme4oc1XWajZ7LEqvuf_UOyIyer059sNtaQKb24PGie5nYvKcpy0n9hiP8BHMfmbjy35kHzXNxkGq4fu25WjjcdtzIoiwKF9vvlLjrSNcjDaPdeaAwy9SMpp1wl4mOdUAkQhSE8jyp0pNktTMrJj8MG'
    },
    {
      category: 'Art of Plating',
      title: 'Ruby Beet Carpaccio',
      desc: 'Thinly sliced heritage beets with citrus zest.',
      aspect: 'aspect-square',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS70RvfcmRkwgc1norTeX9_JG8x_WGzVh4082h76goHcGui3RWv5cW-o_zgjmP6N9ZzZxPrLHE62E9zNhGp6yu9pPuJzoCpYu0mFpe1kqjp3cBDWe4ayctwGV1V1M8PbHov6Se3tRBOqgXCzjKXrgIKcIQeeOf50eTgdm5qFyjDco6nA4OI5QDGMqGA8VL7UjfLras7ypuaiB7O-R2wJ1V-zY-8jF1wXO4B9-u7zSLMo2ULZNnSKXVOh9zx2EVIHJLTdQDXN_uJ4Tj'
    },
    {
      category: 'Our Space',
      title: 'Natural Lighting',
      desc: 'Sun-drenched dining area for a peaceful meal.',
      aspect: 'aspect-video',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi74TeBfj7ttUHv2S_MDQ5zG3k0Y59wiaD2NW-qcJvWzIxzWQ5ulabWNrP1py5Z2OoBVDRlWb-ZNFent2S7IPGNvhhdVFrz1LcnwXrcDhtwYnx2X0GcT8cOOczX3O6L3hYGm_M4AUjKm-a8Mpc6Yz1QFvEXHY7Hv3_l3CaAsEjFZRKUGomgM12pwn5jiv12zmJRGl8jV2Zw9gSjiZTY7DZ7tirrqMgCBHjeo92XX-ZBGmlkJTC5kdZtzt-7BxWH6vGJvK1T0fOhFgM'
    },
    {
      category: 'Behind the Scenes',
      title: 'Micro-green Precision',
      desc: 'Expert care in every garnish we prepare.',
      aspect: 'aspect-[4/5]',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmiFze-Py8y72umRAsRHXAC9g9GxS3fkJ_zbKV2QwctAkE3szpcDZflRoIaUkoVMvmjTQeSi84urwujCgnQ73hBXi6l35idtH4VIU-GAnzQJRn0QbhEvCSK7X8M9xACTRV8nIkiZC2vDfAwgaCtjutqt3xjkXet36dzFY3IJFi-OnwvtBwYn4l2XtOT8b59jpRVGg-t_cIdo4VgAEd7CH5qssxKohZpJe3IaZSze3gl0GUDKqSkVl_CjUFSw2ZuBscnuZf9Nv4WFPP'
    }
  ];

  const filteredItems = activeFilter === 'All Moments' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-bg-beige min-h-screen">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="border-l-4 border-primary pl-8">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
            The Art of <br/><span className="text-primary">Freshness</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-grey font-medium leading-relaxed max-w-2xl">
            A curated exhibition of our farm-to-table philosophy. Experience the journey from sun-drenched soil to the final, vibrant plating.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeFilter === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'bg-white border border-primary/5 hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-primary/5 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className={`${item.aspect} w-full overflow-hidden`}>
                <img 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={item.img} 
                  alt={item.title} 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{item.category}</span>
                <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Mock */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-xs font-bold text-neutral-grey uppercase tracking-[0.3em]">Showing {filteredItems.length} of 42 moments</p>
          <button className="group flex items-center gap-3 rounded-xl bg-primary/10 px-10 py-4 text-sm font-black text-primary hover:bg-primary hover:text-white transition-all">
            Discover More
            <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">expand_more</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
