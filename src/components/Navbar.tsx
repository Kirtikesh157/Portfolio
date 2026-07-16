import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X, Home, User, Code, Folder, FileText, Mail, Moon,Sun, } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const iconMap = {
  Home,
  User,
  Code,
  Folder,
  FileText,
  Mail,
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") ?? "dark";
});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
     const html = document.documentElement;

      if (theme === "dark") {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }

      console.log("HTML class:", html.className);

      localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Changing theme to:", newTheme);
    setTheme(newTheme);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: iconMap.Home },
    { href: "/about", label: "About", icon: iconMap.User },
    { href: "/skills", label: "Skills", icon: iconMap.Code },
    { href: "/projects", label: "Projects", icon: iconMap.Folder },
    { href: "/resume", label: "Resume", icon: iconMap.FileText },
    { href: "/contact", label: "Contact", icon: iconMap.Mail },
  ];



  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-300 rounded-full border border-border ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-card"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="px-4 py-2 flex items-center justify-between w-full">
        <a
          href="/"
          className="flex items-center gap-2.5 group shrink-0"

        >
          <img
            src={logo}
            alt="KB Logo"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-border group-hover:ring-primary/50 transition-colors"
          />
          <span className="text-lg font-bold tracking-tight text-gradient-blue leading-normal pb-1">
            Kirtikesh Bhoyar
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.href}
                to={link.href}
                activeClassName="bg-primary/20 text-primary border border-primary/40 shadow-lg"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </NavLink>
            );
          })}

            <button
              onClick={toggleTheme}
               className="ml-2 p-2 rounded-full border border-border hover:bg-primary/10 transition-all"
             >
              {theme === "dark" ? (
               <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
               <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
          

        </div>
      
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 shrink-0">

          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:bg-primary/10"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-primary" />
            )}
          </button>

          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
             )}
          </Button>

        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-md border border-border rounded-2xl animate-fade-in overflow-hidden">
          <div className="px-3 py-3 flex flex-col gap-1">

            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </NavLink>
              );
            })}



          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;