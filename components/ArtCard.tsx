
import React from 'react';
import { Artwork } from '../types';

interface ArtCardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

const ArtCard: React.FC<ArtCardProps> = ({ artwork, onClick }) => {
  return (
    <div
      className="masonry-item group cursor-pointer overflow-hidden bg-white shadow-sm border border-stone-100"
      onClick={() => onClick(artwork)}
    >
      <div className="relative overflow-hidden aspect-auto bg-stone-100">
        <img
          src={artwork.url}
          alt={artwork.title}
          className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-stone-900 group-hover:text-stone-700 transition-colors serif">
            {artwork.title}
          </h3>
          <span className="text-[9px] px-2 py-0.5 border border-stone-200 rounded-full text-stone-400 uppercase tracking-widest font-bold flex-shrink-0 ml-2">
            {artwork.category}
          </span>
        </div>
        <p className="text-stone-500 text-[10px] uppercase tracking-widest font-medium">Nangialai Bahadery</p>
      </div>
    </div>
  );
};

export default ArtCard;
