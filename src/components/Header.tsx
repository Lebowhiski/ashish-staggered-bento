import { useState, useEffect } from "react";

const Header = () => {
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
    <div className={`fixed top-8 right-8 z-10 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-text-primary font-light text-sm tracking-wide">
        ashish—collection of works{" "}
        <span className="text-text-secondary">25</span>
      </h1>
    </div>
  );
};

export default Header;