import { SiSap } from "react-icons/si";

import {
  Brain,
  Database,
  BarChart3,
  Code2,
  FileCode,
  LineChart,
  Code,
  Palette,
  Layers,
  MessageSquare,
  Sparkles,
  Wand2,
  Bot,
  Search,
  Server,
  Cloud,
  Monitor,
  Braces,
  NotebookPen,
  Laptop,
  Eclipse,
} from "lucide-react";



const orbitOuter = [
  { icon: Code2, label: "Python" },
  { icon: Brain, label: "ML" },
  { icon: Layers, label: "DL" },
  { icon: Sparkles, label: "AI" },
  { icon: Wand2, label: "GenAI" },
  { icon: Bot, label: "LLMs" },
  { icon: Search, label: "RAG" },
  { icon: MessageSquare, label: "NLP" },
];

const orbitInner = [
  { icon: BarChart3, label: "Data" },
  { icon: Database, label: "SQL" },
  { icon: LineChart, label: "Power BI" },
  { icon: Server, label: "SAP" },
  { icon: FileCode, label: "ABAP" },
  { icon: Code, label: "HTML" },
];

const modules = [
  {
    id: "MOD.01",
    title: "Data Science & ML",
    icon: Brain,
    items: [
      { icon: Brain, name: "Machine Learning" },
      { icon: Layers, name: "Deep Learning" },
      { icon: BarChart3, name: "Data Analysis" },
      { icon: MessageSquare, name: "NLP" },
    ],
  },
  {
    id: "MOD.02",
    title: "AI & Generative AI",
    icon: Sparkles,
    items: [
      { icon: Sparkles, name: "Artificial Intelligence" },
      { icon: Wand2, name: "Generative AI" },
      { icon: Bot, name: "LLMs" },
      { icon: Search, name: "RAG" },
    ],
  },
  {
    id: "MOD.03",
    title: "Programming & Data",
    icon: Code2,
    items: [
      { icon: Code2, name: "Python" },
      { icon: Database, name: "SQL" },
      { icon: FileCode, name: "SAP ABAP" },
    ],
  },
  {
    id: "MOD.04",
    title: "Web & Visualization",
    icon: LineChart,
    items: [
      { icon: LineChart, name: "Power BI" },
      { icon: Code, name: "HTML" },
      { icon: Palette, name: "CSS" },
    ],
  },
];

const stackRow = [
  { icon: Brain, name: "Machine Learning" },
  { icon: Layers, name: "Deep Learning" },
  { icon: Sparkles, name: "AI" },
  { icon: Wand2, name: "Generative AI" },
  { icon: Bot, name: "LLMs" },
  { icon: Search, name: "RAG" },
  { icon: MessageSquare, name: "NLP" },
  { icon: BarChart3, name: "Data Analysis" },
  { icon: Code2, name: "Python" },
  { icon: Database, name: "SQL" },
  { icon: LineChart, name: "Power BI" },
  { icon: Code, name: "HTML" },
  { icon: Palette, name: "CSS" },
  { icon: Server, name: "ERP" },
  { icon: SiSap, name: "SAP" },
  { icon: FileCode, name: "SAP ABAP" },

  // Added Technologies & Tools
  { icon: Cloud, name: "SAP BTP" },
  { icon: Monitor, name: "SAP GUI" },
  { icon: Braces, name: "VS Code" },
  { icon: NotebookPen, name: "Jupyter Notebook" },
  { icon: Laptop, name: "Google Colab" },
  { icon: Eclipse, name: "Eclipse IDE" },

];

const proficiency = [
  { min: "90%+", label: "Expert", color: "bg-primary" },
  { min: "80%+", label: "Advanced", color: "bg-accent" },
  { min: "70%+", label: "Intermediate", color: "bg-primary-glow" },
  { min: "60%+", label: "Proficient", color: "bg-primary/60" },
];

const Skills = () => {
  return (
    <section className="px-4 py-10 relative overflow-hidden bg-background" id="skills">
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        {/* Hero */}
        <div className="text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">
              Technical Skills
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] pb-2">
            A Practical Stack for <br />
            <span className="text-gradient-blue">Real-World Problems</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            Machine learning, deep learning, generative AI, and clean analytics — combined with
            enterprise-grade tooling to turn raw data into products people can use.
          </p>
        </div>


        {/* Modules grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map(({ id, title, icon: Icon, items }) => (
            <div
              key={id}
              className="rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground tracking-widest">
                  {id}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {items.map(({ icon: ItemIcon, name }) => (
                  <div
                    key={name}
                    className="p-3 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:bg-card transition-all group text-center"
                  >
                    <div className="w-9 h-9 mx-auto mb-2 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ItemIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-xs font-medium leading-tight">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency legend */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Skill Proficiency Levels</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {proficiency.map((p) => (
              <div key={p.label} className="flex items-center gap-2">
                <span className="text-sm font-mono text-primary">{p.min}</span>
                <span className={`h-1 w-10 rounded-full ${p.color}`} />
                <span className="text-sm text-muted-foreground">{p.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology stack row */}
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-xs font-semibold text-primary tracking-[0.2em] uppercase">
              Technology Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-2">
            Languages, Frameworks & Tools I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            A comprehensive set of technologies that let me take an idea from raw data to a
            deployed, usable product.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {stackRow.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 hover:border-primary/50 hover:bg-card transition-all"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
