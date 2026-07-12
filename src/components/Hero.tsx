import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Mail,
  ArrowDown,
  Code2,
  Brain,
  Database,
  Cpu,
  Sparkles,
  BarChart3,
  Server,
} from "lucide-react";

const roles = ["Data Scientist", "AI Engineer", "ABAP Developer"];


const techCards = [
  {
    title: "DataScience",
    icon: <BarChart3 className="w-12 h-12 text-primary" />,
  },
  {
    title: "Python",
    icon: <Code2 className="w-12 h-12 text-primary" />,
  },
  {
    title: "MachineLearning",
    icon: <Brain className="w-12 h-12 text-primary" />,
  },
  {
    title: "DeepLearning",
    icon: <Cpu className="w-12 h-12 text-primary" />,
  },
  {
    title: "GenerativeAI",
    icon: <Sparkles className="w-12 h-12 text-primary" />,
  },
  {
    title: "SAP ABAP",
    icon: <Server className="w-12 h-12 text-primary" />,
  },
  {
    title: "SQL",
    icon: <Database className="w-12 h-12 text-primary" />,
  },
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 60 : 120;
    const pauseBeforeDelete = 1800;
    const pauseBeforeNext = 400;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTimeout(() => {}, pauseBeforeNext);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);


  useEffect(() => {
  const interval = setInterval(() => {
    setCardIndex((prev) => (prev + 1) % techCards.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="min-h-screen flex items-center px-4 pt-28 pb-16 relative overflow-hidden bg-background">
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                Available for Opportunities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient-blue leading-[1.1] pb-2">
              Kirtikesh Bhoyar
            </h1>

            <p className="text-lg sm:text-xl text-primary font-mono mb-6 min-h-[1.75em]">
              <span className="text-muted-foreground">&gt;</span> {displayText}
              <span className="animate-pulse">_</span>
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I craft intelligent solutions with Machine Learning, Artificial Intelligence, and Data Analytics —
              turning complex data into real-world impact, while also exploring enterprise systems with SAP ABAP.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-hero animate-gradient hover:opacity-90 shadow-elegant" asChild>
                <a href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10" asChild>
                <a href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="hover:bg-primary/10" asChild>
                <a href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Decorative code card */}
          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="relative w-[300px] h-[300px] mx-auto rounded-3xl border border-primary/20 bg-gradient-card p-6 shadow-elegant overflow-hidden">
              <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>

              {/* corner dots */}
              <span className="absolute top-4 left-4 w-2 h-2 rounded-full bg-primary"></span>
              <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent"></span>
              <span className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-accent"></span>
              <span className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-primary"></span>

              {/* decorative lines */}
              <div className="absolute top-16 left-8 w-16 h-px bg-primary/40"></div>
              <div className="absolute bottom-16 right-8 w-20 h-px bg-accent/40"></div>

              {/* center icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700">

                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center backdrop-blur-sm animate-float mb-4">
                  {techCards[cardIndex].icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {techCards[cardIndex].title}
                </h3>

                <p className="text-sm text-muted-foreground text-center px-6">
                  {cardIndex === 0 &&
                    "Writing clean, scalable Python applications."}

                  {cardIndex === 1 &&
                    "Building intelligent machine learning models."}

                  {cardIndex === 2 &&
                    "Developing neural network based AI solutions."}

                  {cardIndex === 3 &&
                    "Transforming raw data into meaningful insights."}

                  {cardIndex === 4 &&
                    "Creating LLM and Generative AI applications."}

                  {cardIndex === 5 &&
                    "Developing enterprise applications using SAP ABAP."}

                  {cardIndex === 6 &&
                    "Managing relational databases and SQL queries."}
                </p>

              </div>

              {/* orbiting dot */}
              <span className="absolute top-1/4 left-8 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]"></span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-muted-foreground animate-in fade-in duration-1000 delay-500">
          <span className="text-xs tracking-[0.3em] uppercase">Scroll to Explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
