import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Projects = () => {
  const dataAnalystProjects = [
    {
      title: "Olympic Data Analysis",
      description: "Olympic Data Analysis project using Python, NumPy, Pandas, Matplotlib, Seaborn, and deployed with Streamlit",
      tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
      githubUrl: "https://github.com/Kirtikesh157/Olympic-Data-Analysis",
      demoUrl: "https://kirtikesh157-olympic-data-analysis-app-p6othi.streamlit.app/",
    },
  ];

  const dataScienceProjects = [
    {
      title: "Prompt Engineering Assistant",
      description: "Streamlit app that transforms vague prompts into clear, LLM-ready prompts using the Gemini API",
      tags: ["Python", "Streamlit", "google-genai", "Prompt Engineering", "python-dotenv"],
      githubUrl: "https://github.com/Kirtikesh157/Prompt--Assistant",
      demoUrl: "https://prompt--assistant.streamlit.app/",
    },
    {
      title: "AI Content Moderation System",
      description: "ML-powered web app that classifies user-generated text as Safe or Harmful using NLP and TF-IDF, deployed with Flask",
      tags: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Flask", "HTML/CSS/JS"],
      githubUrl: "https://github.com/Kirtikesh157/CMS",
      demoUrl: "https://github.com/Kirtikesh157/CMS",
    },
    {
      title: "NLP Text Processing – IMDB",
      description: "This project focuses on building a sentiment analysis model using the IMDB dataset",
      tags: ["Python", "Scikit-learn", "NLTK", "NLP"],
      githubUrl: "https://github.com/Kirtikesh157/NLP-Text-Processing-IMDB-Dataset-",
      demoUrl: "https://github.com/Kirtikesh157/NLP-Text-Processing-IMDB-Dataset-",
    },
    {
      title: "House Price Prediction",
      description: "Machine learning model to predict house prices using regression techniques",
      tags: ["Python", "NumPy", "Pandas", "Machine Learning"],
      githubUrl: "https://github.com/Kirtikesh157/House-Price-Prediction",
      demoUrl: "https://github.com/Kirtikesh157/House-Price-Prediction",
    },
    {
      title: "Car Price Prediction",
      description: "Machine learning model to predict car prices using Linear Regression algorithm",
      tags: ["Python", "NumPy", "Pandas", "Linear Regression"],
      githubUrl: "https://github.com/Kirtikesh157/Car-Price-Prediction",
      demoUrl: "https://github.com/Kirtikesh157/Car-Price-Prediction",
    },
  ];

  const ProjectCard = ({ project }: { project: { title: string; description: string; tags: string[]; githubUrl?: string; demoUrl?: string } }) => (
    <Card className="h-full flex flex-col shadow-card hover:shadow-elegant transition-all duration-500 border-border hover:border-primary/60 hover:-translate-y-1 bg-gradient-card group">
      <CardHeader>
        <CardTitle className="flex items-start justify-between">
          {project.title}
        </CardTitle>
        <CardDescription className="mt-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {(project.githubUrl || project.demoUrl) && (
          <div className="flex gap-2 mt-auto">
            {project.githubUrl && (
              <Button size="sm" variant="outline" className="flex-1" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button size="sm" className="flex-1 bg-gradient-hero hover:opacity-90" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section className="py-10 px-4 relative overflow-hidden bg-background" id="projects">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>


      <div className="max-w-6xl mx-auto relative z-10">
        {/* Projects Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase">My Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-blue animate-gradient leading-normal pb-2">
            Data-Driven Projects with Real-World Impact
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A curated collection of data science and data analysis projects built with Python, machine learning, and modern analytics tools. Each project represents hands-on problem solving, from predictive modeling to interactive dashboards.
          </p>
        </div>

        {/* Data Science Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-primary">Data Science</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {dataScienceProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Data Analysis Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-primary">Data Analysis</h3>
          {dataAnalystProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {dataAnalystProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">Coming soon...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
