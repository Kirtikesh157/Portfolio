import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Highlights />

      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          © 2025 Kirtikesh Bhoyar. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
