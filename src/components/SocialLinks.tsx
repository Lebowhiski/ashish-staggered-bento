import { useState, useEffect } from "react";

const SocialLinks = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-8 left-8 z-10 flex gap-6 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-primary hover:text-text-secondary transition-colors duration-200 font-light text-sm tracking-wide"
      >
        IN
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-primary hover:text-text-secondary transition-colors duration-200 font-light text-sm tracking-wide"
      >
        LI
      </a>
    </div>
  );
};

export default SocialLinks;