import { useEffect, useState } from "react";
import ArtworkTile from "./ArtworkTile";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";

interface Artwork {
  id: number;
  src: string;
  title: string;
  year: string;
  medium: string;
  aspectRatio: number;
  calculatedHeight?: number;
}

const artworks: Artwork[] = [
  {
    id: 1,
    src: artwork1,
    title: "Organic Flow",
    year: "2024",
    medium: "Digital Art",
    aspectRatio: 16/9 // width/height
  },
  {
    id: 2,
    src: artwork2,
    title: "Geometric Harmony",
    year: "2024",
    medium: "Mixed Media",
    aspectRatio: 1/1 // square
  },
  {
    id: 3,
    src: artwork3,
    title: "Vibrant Expression",
    year: "2023",
    medium: "Acrylic on Canvas",
    aspectRatio: 3/4 // portrait
  },
  {
    id: 4,
    src: artwork4,
    title: "Dreamscape",
    year: "2024",
    medium: "Digital Photography",
    aspectRatio: 8/5 // landscape
  },
  {
    id: 5,
    src: artwork5,
    title: "Textural Layers",
    year: "2023",
    medium: "Collage",
    aspectRatio: 1/1 // square
  },
  {
    id: 6,
    src: artwork6,
    title: "Light & Shadow",
    year: "2024",
    medium: "Photography",
    aspectRatio: 2/3 // portrait
  }
];

const BentoGrid = () => {
  const [columns, setColumns] = useState<number>(3);
  const [columnHeights, setColumnHeights] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setColumns(1);
        setColumnHeights([0]);
      } else if (width < 1024) {
        setColumns(2);
        setColumnHeights([0, 0]);
      } else {
        setColumns(3);
        setColumnHeights([0, 0, 0]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getShortestColumnIndex = () => {
    return columnHeights.indexOf(Math.min(...columnHeights));
  };

  const distributeArtworks = () => {
    const distributedColumns = Array.from({ length: columns }, () => [] as Artwork[]);
    const heights = Array(columns).fill(0);
    const baseWidth = 300; // Base width for calculations

    artworks.forEach((artwork) => {
      const shortestIndex = heights.indexOf(Math.min(...heights));
      const calculatedHeight = baseWidth / artwork.aspectRatio;
      
      distributedColumns[shortestIndex].push({
        ...artwork,
        calculatedHeight
      });
      heights[shortestIndex] += calculatedHeight + 24; // Add gap
    });

    return distributedColumns;
  };

  const artworkColumns = distributeArtworks();

  return (
    <div className="p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className={`flex gap-6 ${columns === 1 ? 'flex-col' : ''}`}>
          {artworkColumns.map((columnArtworks, columnIndex) => (
            <div
              key={columnIndex}
              className="flex-1 flex flex-col gap-6"
            >
              {columnArtworks.map((artwork) => (
                <div
                  key={artwork.id}
                  style={{ height: `${artwork.calculatedHeight}px` }}
                >
                  <ArtworkTile
                    src={artwork.src}
                    title={artwork.title}
                    year={artwork.year}
                    medium={artwork.medium}
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;