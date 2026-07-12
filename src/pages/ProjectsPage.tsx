import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 max-w-6xl mx-auto" />
      <Projects />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">© 2025 Kirtikesh Bhoyar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProjectsPage;
