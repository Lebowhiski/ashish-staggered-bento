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
    <div className={`relative overflow-hidden bg-gallery-tile ${className}`}>
      <div className="relative">
        <img
          src={src}
          alt={title}
          className={`w-full h-full object-cover ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
      </div>
    </div>
  );
};

export default ArtworkTile;