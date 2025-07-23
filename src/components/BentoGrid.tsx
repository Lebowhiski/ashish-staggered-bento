import { useEffect, useState } from "react";
import ArtworkTile from "./ArtworkTile";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";

const artworks = [
  {
    id: 1,
    src: artwork1,
    title: "Organic Flow",
    year: "2024",
    medium: "Digital Art",
    height: 300
  },
  {
    id: 2,
    src: artwork2,
    title: "Geometric Harmony",
    year: "2024",
    medium: "Mixed Media",
    height: 400
  },
  {
    id: 3,
    src: artwork3,
    title: "Vibrant Expression",
    year: "2023",
    medium: "Acrylic on Canvas",
    height: 500
  },
  {
    id: 4,
    src: artwork4,
    title: "Dreamscape",
    year: "2024",
    medium: "Digital Photography",
    height: 350
  },
  {
    id: 5,
    src: artwork5,
    title: "Textural Layers",
    year: "2023",
    medium: "Collage",
    height: 450
  },
  {
    id: 6,
    src: artwork6,
    title: "Light & Shadow",
    year: "2024",
    medium: "Photography",
    height: 600
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
    const distributedColumns = Array.from({ length: columns }, () => [] as typeof artworks);
    const heights = Array(columns).fill(0);

    artworks.forEach((artwork) => {
      const shortestIndex = heights.indexOf(Math.min(...heights));
      distributedColumns[shortestIndex].push(artwork);
      heights[shortestIndex] += artwork.height + 24; // Add gap
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
                  style={{ height: `${artwork.height}px` }}
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