const SocialLinks = () => {
  return (
    <div className="absolute top-8 left-8 z-10 flex gap-6">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-primary font-light text-sm tracking-wide"
      >
        IN
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-primary font-light text-sm tracking-wide"
      >
        LI
      </a>
    </div>
  );
};

export default SocialLinks;