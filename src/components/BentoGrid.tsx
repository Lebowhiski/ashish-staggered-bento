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
    className: "aspect-video"
  },
  {
    id: 2,
    src: artwork2,
    title: "Geometric Harmony",
    year: "2024",
    medium: "Mixed Media",
    className: "aspect-square"
  },
  {
    id: 3,
    src: artwork3,
    title: "Vibrant Expression",
    year: "2023",
    medium: "Acrylic on Canvas",
    className: "aspect-[3/4]"
  },
  {
    id: 4,
    src: artwork4,
    title: "Dreamscape",
    year: "2024",
    medium: "Digital Photography",
    className: "aspect-[8/5]"
  },
  {
    id: 5,
    src: artwork5,
    title: "Textural Layers",
    year: "2023",
    medium: "Collage",
    className: "aspect-square"
  },
  {
    id: 6,
    src: artwork6,
    title: "Light & Shadow",
    year: "2024",
    medium: "Photography",
    className: "aspect-[2/3]"
  }
];

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 pt-24">
      {artworks.map((artwork, index) => (
        <div
          key={artwork.id}
          className={`${
            index % 3 === 1 ? 'lg:mt-12' : index % 3 === 2 ? 'lg:mt-24' : ''
          }`}
        >
          <ArtworkTile
            src={artwork.src}
            title={artwork.title}
            year={artwork.year}
            medium={artwork.medium}
            className={artwork.className}
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;