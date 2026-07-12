import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";

const Resume = () => {
  const resumes = [
    {
      title: "Data Science",
      description: "Comprehensive resume showcasing data science expertise and projects",
      file: "/resumes/Kirtikesh-DataScience_Resume.pdf"
    },
    {
      title: "Data Analyst",
      description: "Resume highlighting data analysis skills and experience",
      file: "/resumes/Kirtikesh-Resume-analyst.pdf"
    },
    {
      title: "SAP ABAP",
      description: "SAP ABAP development experience and technical skills",
      file: "/resumes/Kirtikesh-ABAP-resume.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase">Professional Resume</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-normal pb-2">
            <span className="text-foreground">My Professional </span>
            <span className="text-gradient-blue animate-gradient">Resumes</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            View and download my tailored resumes for Data Science, Data Analyst, and SAP ABAP roles. Each resume highlights the relevant skills, projects, and experience for that career track.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resumes.map((resume, index) => (
            <Card key={index} className="shadow-card border-border hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">{resume.title}</CardTitle>
                <CardDescription className="text-center">
                  {resume.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full bg-gradient-hero hover:opacity-90 transition-opacity" 
                  asChild
                >
                  <a href={resume.file} target="_blank" rel="noopener noreferrer">
                    View Resume
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-2" 
                  asChild
                >
                  <a href={resume.file} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">© 2025 Kirtikesh Bhoyar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;
