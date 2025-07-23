import { useState } from "react";

interface ArtworkTileProps {
  src: string;
  title: string;
  year: string;
  medium: string;
  className?: string;
}

const ArtworkTile = ({ src, title, year, medium, className = "" }: ArtworkTileProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`group relative overflow-hidden rounded-lg bg-gallery-tile border border-border transition-all duration-300 hover:border-text-secondary hover:shadow-lg ${className}`}>
      <div className="relative">
        <img
          src={src}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        
        {/* Overlay with artwork info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-medium text-sm">{title}</h3>
            <p className="text-xs text-white/80">{medium}, {year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkTile;