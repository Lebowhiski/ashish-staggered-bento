import { ExternalLink } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="fixed top-8 left-8 z-10 flex flex-col gap-2">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 bg-gallery-tile hover:bg-social-hover transition-all duration-300 rounded-lg border border-border"
      >
        <span className="text-text-primary font-medium text-sm group-hover:scale-110 transition-transform duration-200">
          IN
        </span>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 bg-gallery-tile hover:bg-social-hover transition-all duration-300 rounded-lg border border-border"
      >
        <span className="text-text-primary font-medium text-sm group-hover:scale-110 transition-transform duration-200">
          LI
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;