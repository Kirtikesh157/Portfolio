import { Zap, Palette, Wrench, Bot, Github, Linkedin, Mail } from "lucide-react";

const stats = [
  { value: "6+", label: "Projects Completed" },
  { value: "12+", label: "Technologies" },
  { value: "4+", label: "ML / AI Apps Built" },
  { value: "2025", label: "BCA Graduate" },
];

const highlights = [
  { icon: Zap, title: "Data-Driven Thinking", desc: "Turning raw datasets into clear insights and reliable predictions" },
  { icon: Palette, title: "Clean Presentation", desc: "Polished dashboards and visuals that make complex data easy to read" },
  { icon: Wrench, title: "End-to-End Delivery", desc: "From data cleaning to model deployment on the web" },
  { icon: Bot, title: "AI Integration", desc: "Building practical ML and NLP systems with real-world use cases" },
];

const philosophy = [
  { color: "bg-primary", text: "Data should tell a clear, honest story" },
  { color: "bg-accent", text: "Models must be practical, not just accurate" },
  { color: "bg-primary-glow", text: "Interfaces should feel intuitive and fast" },
  { color: "bg-primary", text: "Continuous learning is non-negotiable" },
];

const Highlights = () => {
  return (
    <>
      {/* Stats */}
      <section className="px-4 py-16 border-t border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="space-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-gradient-blue pb-1">{s.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground tracking-wider uppercase max-w-[140px] mx-auto">
                {s.label}
              </div>
              <div className="h-px w-16 mx-auto bg-gradient-hero"></div>
            </div>
          ))}
        </div>
      </section>

      {/* What Makes My Work Stand Out */}
      <section className="px-4 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-xs font-semibold text-primary tracking-wider uppercase">Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-blue pb-2 mb-4">
              What Makes My Work Stand Out
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clean analysis, thoughtful models, honest visualizations, and AI tools that actually solve real problems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-border bg-gradient-card hover:border-primary/50 hover:shadow-card transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-4 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-2">
              Building Smart <br />
              <span className="text-gradient-blue">Data Experiences</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              I focus on creating end-to-end data science solutions — combining clean analysis, machine learning models,
              and simple web interfaces so anyone can benefit from the results.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              With a growing toolkit across Python, ML, NLP, SQL, Power BI, and SAP ABAP, I bridge the gap between data
              and real product value.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-gradient-card shadow-card">
            <h3 className="text-xl font-semibold mb-6">My Development Philosophy</h3>
            <ul className="space-y-4">
              {philosophy.map((p) => (
                <li key={p.text} className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${p.color} shadow-[0_0_12px_hsl(var(--primary))]`}></span>
                  <span className="text-sm sm:text-base text-foreground/90">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <section className="px-4 py-16 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/Kirtikesh157"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl border border-border bg-gradient-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-card transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/kirtikesh-bhoyar-a5331a284"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl border border-border bg-gradient-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-card transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/KirtikeshB60856"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl border border-border bg-gradient-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-card transition-all"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlights;
