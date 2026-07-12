import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-10 px-4 relative overflow-hidden bg-background" id="contact">
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/5 text-primary text-xs font-semibold tracking-widest mb-6">
            CONTACT STUDIO
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight pb-2">
            Let's Talk About the Next{" "}
            <span className="text-gradient-blue animate-gradient">Sharp Build</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            A focused contact page with direct details and social links for serious project conversations. Share your product vision, data workflows, or AI ideas you want to bring to life.
          </p>
        </div>

        {/* Availability banner */}
        <div className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            AVAILABLE FOR NEW PROJECTS
          </div>
          <p className="text-muted-foreground text-sm">
            Currently accepting new projects and collaborations. Let's build something amazing together.
          </p>
        </div>

        {/* Connect card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 shadow-elegant border border-primary/20 hover:border-primary/40 transition-all duration-500">
            <div className="inline-block px-3 py-1 rounded-full border border-primary/40 bg-primary/5 text-primary text-[10px] font-semibold tracking-widest mb-4">
              GET IN TOUCH
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-3">Connect With Me</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of these channels. I'm always happy to discuss new opportunities and collaborations.
            </p>

            <div className="space-y-5">
              <a href="mailto:kirtikeshbhoyar15@gmail.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest font-semibold">EMAIL</p>
                  <p className="font-medium group-hover:text-primary transition-colors">kirtikeshbhoyar15@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919399027769" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest font-semibold">PHONE</p>
                  <p className="font-medium group-hover:text-primary transition-colors">+91 9399027769</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest font-semibold">LOCATION</p>
                  <p className="font-medium">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground tracking-widest font-semibold mb-4">SOCIAL LINKS</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Kirtikesh157"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kirtikesh-bhoyar-a5331a284"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/KirtikeshB60856"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="w-11 h-11 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
