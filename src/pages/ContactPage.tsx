import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 max-w-6xl mx-auto" />
      <Contact />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">© 2025 Kirtikesh Bhoyar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
