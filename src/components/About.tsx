import { GraduationCap, School, Calendar } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-background" id="about">
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero heading */}
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-widest mb-6">
            ABOUT ME
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight pb-2">
            A Data Scientist Who Turns{" "}
            <span className="text-gradient-blue animate-gradient">Data</span> Into{" "}
            <span className="text-gradient-blue animate-gradient">Decisions.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kirtikesh blends analytical thinking with hands-on engineering — building
            machine learning models, AI applications, and data pipelines that deliver
            measurable outcomes.
          </p>
        </div>

        {/* Personal Information */}
        <div className="bg-card/80 rounded-2xl p-6 sm:p-8 border border-primary/20 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Personal Information</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Name", value: "Kirtikesh Bhoyar" },
              { label: "Focus", value: "Data Science, AI, ABAP" },
              { label: "Availability", value: "Open to Opportunities" },
              { label: "Current Location", value: "Hyderabad, Telangana" },
              { label: "Native Place", value: "Seoni, Madhya Pradesh" },
            ].map((item) => (
            <div
              key={item.label}
              className="w-full sm:w-[300px] rounded-xl border border-border/60 bg-background/40 p-4"
            >
             <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
               {item.label}
             </p>
             <p className="font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div> 
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "5+", label: "Projects Completed" },
            { num: "10+", label: "Technologies" },
            { num: "3+", label: "AI/ML Apps Built" },
            { num: "2025", label: "BCA Graduate" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-primary/20 bg-card/60 p-6 text-center hover:border-primary/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold text-gradient-blue mb-2">{s.num}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-widest mb-4">
              EDUCATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">My Graduation</h2>
          </div>
          <div className="bg-card/80 rounded-2xl p-6 sm:p-8 border border-primary/20 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Bachelor of Computer Application (BCA)
                </h3>
                <p className="flex items-center gap-2 text-muted-foreground mb-1">
                  <School className="w-4 h-4 text-primary" />
                  Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal (MP)
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  Graduated 2025
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Built a strong foundation in programming, databases, and software
                  development while independently pursuing Data Science, Machine
                  Learning, and AI through hands-on projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Approach + What Drives Me */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card/60 rounded-2xl p-6 sm:p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe great data work starts with asking the right question. Every
              model, dashboard, or pipeline I build begins with understanding the
              problem — then choosing the simplest tool that solves it well.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I focus on clean data, reproducible workflows, and results that
              non-technical stakeholders can actually use.
            </p>
          </div>
          <div className="bg-card/60 rounded-2xl p-6 sm:p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">What Drives Me</h3>
            <ul className="space-y-3">
              {[
                "Turning messy data into clear insights",
                "Building AI apps that solve real problems",
                "Learning across the data + enterprise stack",
                "Bridging Data Science with SAP ABAP",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Competencies */}
        <div>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-widest mb-4">
              CORE COMPETENCIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">A Versatile Data & AI Practitioner</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From data wrangling to model deployment and enterprise systems — a
              well-rounded toolkit for modern data problems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Data Science", items: "Python, Pandas, NumPy, EDA" },
              { title: "Machine Learning", items: "Scikit-learn, Regression, Classification" },
              { title: "Deep Learning", items: "TensorFlow, Neural Networks" },
              { title: "Generative AI", items: "LLMs, Prompt Engineering, Gemini API" },
              { title: "Data Visualization", items: "Power BI, Matplotlib, Seaborn" },
              { title: "Enterprise", items: "SAP ABAP, SQL, MySQL" },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border/60 bg-card/60 p-5 hover:border-primary/50 transition-colors">
                <h4 className="font-bold mb-2">{c.title}</h4>
                <p className="text-sm text-muted-foreground">{c.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
