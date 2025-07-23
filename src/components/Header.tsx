const Header = () => {
  return (
    <div className="fixed top-8 right-8 z-10">
      <div className="bg-gallery-tile/80 backdrop-blur-sm border border-border rounded-lg px-6 py-4">
        <h1 className="text-text-primary font-light text-sm tracking-wide">
          ashish—collection of works{" "}
          <span className="text-text-secondary">25</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;