
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import ArtCard from './components/ArtCard';
import DiscountPopup from './components/DiscountPopup';
import { ARTWORKS, LOGO_URL } from './constants';
import { Artwork } from './types';

const App: React.FC = () => {
  const [selectedArt, setSelectedArt] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState<'All' | 'Landscape' | 'Architecture' | 'Mural'>('All');

  const filteredArtworks = useMemo(() => {
    return filter === 'All'
      ? ARTWORKS
      : ARTWORKS.filter(art => art.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#fcfbf7]">
      <Navbar />
      <DiscountPopup />

      {/* Hero Section */}
      <section id="hero" className="pt-20 lg:pt-0 lg:h-screen flex flex-col lg:flex-row items-stretch">
        <div className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-24 bg-stone-50">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.4em] text-stone-400 mb-6 block font-bold italic">Custom Art Commissions</span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-stone-900 serif">
              Art Crafted <span className="italic">for You</span>.
            </h1>
            <p className="text-stone-600 text-lg mb-10 leading-relaxed font-light">
              Explore the masterworks of <strong>Nangialai Bahadery</strong>, an Afghan fine arts artist based in the UAE. Commission custom paintings on canvas or have stunning murals painted directly at your location — anywhere in the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#gallery" className="bg-stone-900 text-white px-10 py-5 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-xl inline-block">
                View Collection
              </a>
              <a href="#services" className="bg-transparent border border-stone-300 text-stone-800 px-10 py-5 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-stone-100 transition-all inline-block">
                Our Services
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden bg-stone-200">
          <img
            src="/artworks/IMG_1143.JPG"
            alt="Nangialai Bahadery Masterpiece"
            className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-stone-900/5" />
        </div>
      </section>

      {/* Collection Section */}
      <section id="gallery" className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-stone-100 pb-12">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-stone-900 mb-6 serif uppercase tracking-tighter">The Collection</h2>
              <p className="text-stone-500 max-w-lg text-lg font-light">
                A living archive of Afghan landscapes, architectural heritage, and hand-painted murals. Each piece is crafted with lasting cultural significance.
              </p>
            </div>

            <div className="flex gap-8 flex-wrap">
              {(['All', 'Landscape', 'Architecture', 'Mural'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all pb-3 border-b-2 ${
                    filter === cat
                      ? 'text-stone-900 border-stone-900'
                      : 'text-stone-300 border-transparent hover:text-stone-500'
                  }`}
                >
                  {cat === 'Mural' ? 'Wall Art' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="masonry-grid min-h-[600px]">
            {filteredArtworks.length > 0 ? (
              filteredArtworks.map((art) => (
                <ArtCard
                  key={art.id}
                  artwork={art}
                  onClick={setSelectedArt}
                />
              ))
            ) : (
              <div className="col-span-full py-32 text-center text-stone-300 uppercase tracking-widest text-sm font-bold">
                No artworks in this category yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[11px] uppercase tracking-[0.5em] text-stone-400 mb-4 block font-bold">Bespoke Art Services</span>
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 serif text-stone-900">How It Works</h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg font-light">
              Every artwork is custom-made to your vision. The artist paints based on your order — choose canvas delivery or an on-site painting experience. Prices vary based on ink type, size, and surface.
            </p>
            <div className="w-32 h-px bg-stone-300 mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1: Canvas & Delivery */}
            <div className="bg-white p-10 lg:p-14 shadow-sm border border-stone-100 group hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-stone-50 flex items-center justify-center mb-8 border border-stone-100">
                <svg className="w-7 h-7 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold serif text-stone-900 mb-4">Canvas Painting & Delivery</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                The artist creates your custom painting at his studio on premium canvas. Once completed, the artwork is carefully packaged and shipped directly to your doorstep. Hang it on your wall or display it anywhere you prefer.
              </p>
              <ul className="space-y-3 text-stone-500 text-sm mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-stone-900 rounded-full flex-shrink-0" />
                  <span>Custom sizes available — from small canvases to large-scale murals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-stone-900 rounded-full flex-shrink-0" />
                  <span>Premium oil paints and professional-grade canvases</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-stone-900 rounded-full flex-shrink-0" />
                  <span>Global shipping — delivered anywhere in the world</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-stone-900 rounded-full flex-shrink-0" />
                  <span>Secure packaging for safe transit</span>
                </li>
              </ul>
              <a href="#contact" className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-900 border-b-2 border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors">
                Request a Quote
              </a>
            </div>

            {/* Service 2: On-Site Painting */}
            <div className="bg-white p-10 lg:p-14 shadow-sm border border-stone-100 group hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-stone-50 flex items-center justify-center mb-8 border border-stone-100">
                <svg className="w-7 h-7 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold serif text-stone-900 mb-4">On-Site Wall Painting</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                The artist travels to your home, office, or any preferred location in the UAE and paints directly on your walls or any surface. Transform your space with a one-of-a-kind, hand-painted masterpiece.
              </p>
              <ul className="space-y-3 text-stone-500 text-sm mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-stone-900 rounded-full flex-shrink-0" />
                  <span>Paint on walls, ceilings, archways, or any surface</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-stone-900 rounded-full flex-shrink-0" />
                  <span>Available across the UAE — homes, offices, hotels, restaurants</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-stone-900 rounded-full flex-shrink-0" />
                  <span>Consultation to match your space and style</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-stone-900 rounded-full flex-shrink-0" />
                  <span>Durable, high-quality paints suited for each surface</span>
                </li>
              </ul>
              <a href="#contact" className="text-[11px] uppercase tracking-[0.2em] font-bold text-stone-900 border-b-2 border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors">
                Book a Consultation
              </a>
            </div>
          </div>

          {/* Pricing Note */}
          <div className="mt-16 text-center bg-white p-10 border border-stone-100 shadow-sm">
            <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">Pricing</h4>
            <p className="text-stone-600 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              Each commission is unique — pricing depends on <strong className="text-stone-900">ink type</strong>, <strong className="text-stone-900">size</strong>, and <strong className="text-stone-900">surface material</strong>. Contact us to discuss your vision and receive a personalized quote.
            </p>
            <a href="#contact" className="inline-block mt-8 bg-stone-900 text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg">
              Get in Touch
            </a>
          </div>

          {/* Mural Gallery Preview */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-[3/4] overflow-hidden bg-stone-200">
              <img src="/artworks/whatsapp_01.jpeg" alt="Wall Mural - Old City Market" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-stone-200">
              <img src="/artworks/whatsapp_03.jpeg" alt="Wall Mural - Village Watchtower" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-stone-200">
              <img src="/artworks/whatsapp_04.jpeg" alt="Wall Mural - Mountain Stream" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[3/4] overflow-hidden bg-stone-200">
              <img src="/artworks/whatsapp_02.jpeg" alt="Wall Mural - Market Scene" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold text-center mt-4">Examples of On-Site Wall Paintings</p>
        </div>
      </section>

      {/* Biography Section */}
      <section id="about" className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[11px] uppercase tracking-[0.5em] text-stone-400 mb-4 block font-bold">Cultural Memory & Documentation</span>
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 serif text-stone-900">Artist Biography</h2>
            <div className="w-32 h-px bg-stone-300 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-8 text-stone-800 leading-relaxed font-light text-lg">
              <p className="text-2xl font-normal text-stone-900 serif italic mb-10">
                "Land as a living archive shaped by history, displacement, and collective experience."
              </p>
              <p>
                <strong>Nangialai Bahadery</strong> is an Afghan fine arts artist based in the United Arab Emirates and a <strong>UAE Golden Visa holder</strong> in the Creative and Cultural category.
              </p>
              <p>
                Bahadery's work explores land not only as geography, but as a living archive shaped by history, displacement, and collective experience. Through carefully composed paintings, he preserves narratives embedded in Afghan landscapes — spaces marked by continuity, loss, and endurance — translating them into a contemporary visual language that resonates internationally.
              </p>
              <p>
                He has participated in international exhibitions including <strong>"Ramadan and More"</strong> in Dubai, and the <strong>Global Canvas Art Festival</strong>, a Guinness World Record-associated event. He holds <strong>Gold Membership</strong> at the Collage International Artist Club and serves as <strong>Afghanistan Department Art Director</strong> for International Action Art.
              </p>

              <div className="bg-stone-50 p-10 shadow-sm border border-stone-200 mt-12">
                 <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-6">Professional Recognitions</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-600 font-medium">
                    <div className="flex items-center space-x-3">
                       <span className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                       <span>UAE Golden Visa - Creative Category</span>
                    </div>
                    <div className="flex items-center space-x-3">
                       <span className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                       <span>Delhi Collage of Art Recognition</span>
                    </div>
                    <div className="flex items-center space-x-3">
                       <span className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                       <span>Intl Action Art - Dept Director</span>
                    </div>
                    <div className="flex items-center space-x-3">
                       <span className="w-1.5 h-1.5 bg-stone-900 rounded-full" />
                       <span>Gold Member, Collage Intl Artist Club</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
               <div className="aspect-[4/5] bg-stone-200 overflow-hidden shadow-2xl group">
                  <img
                    src="/artworks/IMG_0927.JPG"
                    alt="Nangialai Bahadery with his artwork"
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               <div className="aspect-[4/3] bg-stone-200 overflow-hidden shadow-xl">
                  <img
                    src="/artworks/IMG_1144.JPG"
                    alt="Nangialai Bahadery painting in his studio"
                    className="w-full h-full object-cover grayscale-[30%]"
                  />
               </div>
               <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold text-center">Documentation of Artistic Resilience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-10 serif text-stone-900 uppercase tracking-tighter">Commission Your Artwork</h2>
            <div className="space-y-10 text-stone-600 font-light text-lg leading-relaxed">
              <p>
                Ready to bring your vision to life? Whether you want a custom canvas painting delivered to your door or a hand-painted mural at your space — let's talk. Every project starts with a conversation.
              </p>
              <div className="space-y-6 pt-6 border-t border-stone-200">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-white flex items-center justify-center rounded-none border border-stone-100 shadow-sm">
                    <svg className="w-5 h-5 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Email Us</h4>
                    <p className="text-xl font-medium text-stone-900">contact@bahadery.art</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-white flex items-center justify-center rounded-none border border-stone-100 shadow-sm">
                    <svg className="w-5 h-5 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Studio Location</h4>
                    <p className="text-xl font-medium text-stone-900">Dubai, United Arab Emirates</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-white flex items-center justify-center rounded-none border border-stone-100 shadow-sm">
                    <svg className="w-5 h-5 text-stone-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Shipping</h4>
                    <p className="text-xl font-medium text-stone-900">Worldwide Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-stone-900 p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-800 rounded-full -mr-16 -mt-16 opacity-20" />
            <h3 className="text-2xl font-bold mb-3 serif uppercase tracking-tight">Request a Quote</h3>
            <p className="text-stone-400 text-sm mb-8 font-light">Tell us about your project and we'll get back to you with a personalized quote.</p>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full bg-stone-800 border-none p-5 text-sm focus:ring-1 focus:ring-white transition-all text-white placeholder-stone-500" />
              <input type="email" placeholder="Email Address" className="w-full bg-stone-800 border-none p-5 text-sm focus:ring-1 focus:ring-white transition-all text-white placeholder-stone-500" />
              <select className="w-full bg-stone-800 border-none p-5 text-sm focus:ring-1 focus:ring-white transition-all text-stone-400 appearance-none">
                <option>Canvas Painting & Delivery</option>
                <option>On-Site Wall Painting (UAE)</option>
                <option>Custom Art Consultation</option>
                <option>General Inquiry</option>
              </select>
              <textarea rows={4} placeholder="Describe your vision — size, style, surface, location..." className="w-full bg-stone-800 border-none p-5 text-sm focus:ring-1 focus:ring-white transition-all text-white placeholder-stone-500"></textarea>
              <button className="w-full bg-white text-stone-900 py-6 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-stone-100 transition-all shadow-xl">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-stone-950 text-stone-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center space-x-5">
            <img src={LOGO_URL} alt="Bahadery Logo" className="h-16 w-16 object-contain" />
            <div className="flex flex-col border-l border-stone-800 pl-5">
              <span className="text-2xl font-bold tracking-widest uppercase text-white serif leading-none">Bahadery</span>
              <span className="text-[9px] uppercase tracking-[0.5em] text-stone-600 font-bold mt-1">Art Gallery</span>
            </div>
          </div>
          <div className="text-center md:text-right space-y-4">
            <p className="text-[10px] uppercase tracking-[0.5em] text-stone-600 leading-relaxed">
              &copy; 2025 Nangialai Bahadery. All Rights Reserved. <br/>
              UAE Golden Visa Category: Creative & Cultural Arts.
            </p>
            <div className="flex justify-center md:justify-end space-x-8">
              <span className="text-white hover:text-stone-400 cursor-pointer text-[10px] font-bold uppercase tracking-widest transition-colors">Instagram</span>
              <span className="text-white hover:text-stone-400 cursor-pointer text-[10px] font-bold uppercase tracking-widest transition-colors">LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Artwork Detail Modal */}
      {selectedArt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 overflow-y-auto">
          <div className="fixed inset-0 bg-stone-950/95 backdrop-blur-xl" onClick={() => setSelectedArt(null)} />
          <div className="relative bg-white w-full max-w-6xl overflow-hidden shadow-2xl flex flex-col lg:flex-row my-auto border border-stone-200">
            <button
              className="absolute top-6 right-6 z-20 bg-stone-50 hover:bg-stone-100 p-4 text-stone-900 transition-all shadow-sm border border-stone-100"
              onClick={() => setSelectedArt(null)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="lg:w-2/3 bg-[#f8f7f5] flex items-center justify-center p-6 lg:p-20 min-h-[50vh]">
              <img
                src={selectedArt.url}
                alt={selectedArt.title}
                className="max-h-[75vh] w-auto object-contain shadow-[0_45px_100px_-20px_rgba(0,0,0,0.4)] ring-[12px] ring-white"
              />
            </div>
            <div className="lg:w-1/3 p-10 lg:p-16 flex flex-col justify-center bg-white">
              <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-6 block font-bold border-b border-stone-50 pb-3">{selectedArt.category}</span>
              <h3 className="text-4xl font-bold mb-8 serif text-stone-900 leading-tight">{selectedArt.title}</h3>
              <div className="text-stone-600 mb-12 space-y-4">
                 <p className="text-lg font-light leading-relaxed italic border-l-2 border-stone-900 pl-6">"{selectedArt.description}"</p>
                 <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Artist: Nangialai Bahadery</p>
              </div>
              <a
                href="#contact"
                onClick={() => setSelectedArt(null)}
                className="w-full bg-stone-900 text-white py-6 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-stone-800 transition-all shadow-lg text-center block"
              >
                Commission Similar Work
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
