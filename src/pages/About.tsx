import Navbar from "@/components/Navbar";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20" />
      <About />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">© 2025 Kirtikesh Bhoyar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
