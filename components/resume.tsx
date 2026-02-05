import { Download } from 'lucide-react';

export default function Resume() {
  const experience = [
    {
      id: 1,
      title: 'C Programming and Problem-Solving',
      company: 'Internship',
      period: 'June 2025 - July 2025',
      description: 'Acquired in-depth knowledge of core C concepts including data types, memory management, pointers, structures, and file operations. Strengthened analytical and critical-thinking skills through structured programming exercises.',
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      institution: 'Lovely Professional University',
      year: 'August 2023 - Present',
      details: 'Phagwara, Punjab | CGPA: 7.0',
    },
    {
      id: 2,
      degree: 'Intermediate',
      institution: 'MES Central School',
      year: 'June 2020 - March 2022',
      details: 'Tirur, Kerala | Percentage: 75',
    },
    {
      id: 3,
      degree: 'Matriculation',
      institution: 'MES Central School',
      year: 'June 2019 - March 2020',
      details: 'Tirur, Kerala | Percentage: 86',
    },
  ];

  return (
    <section id="resume" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Resume</h2>
          <a
            href="/Haneen_CV.pdf"
            download
            className="mt-4 sm:mt-0 flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-6">Professional Experience</h3>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.id} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                    <p className="text-accent font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 sm:mt-0">{job.period}</span>
                </div>
                <p className="text-foreground text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-accent font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 sm:mt-0">{edu.year}</span>
                </div>
                <p className="text-foreground text-sm">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
