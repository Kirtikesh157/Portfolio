import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 max-w-6xl mx-auto" />
      <Skills />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">© 2025 Kirtikesh Bhoyar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SkillsPage;
