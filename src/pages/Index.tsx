import SocialLinks from "@/components/SocialLinks";
import Header from "@/components/Header";
import BentoGrid from "@/components/BentoGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gallery-bg">
      <div className="relative">
        <SocialLinks />
        <Header />
        <main className="max-w-7xl mx-auto">
          <BentoGrid />
        </main>
      </div>
    </div>
  );
};

export default Index;
