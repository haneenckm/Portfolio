import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Creative Services Website | FirstSketch',
      description: 'Designed and delivered a revenue-based website for an architecture firm to showcase projects, services, and brand identity. Developed a responsive, mobile-first interface with clear navigation to support client engagement. Implemented structured service sections, portfolio displays, and contact workflows to improve lead generation and user engagement. Deployed the production-ready application on Vercel with version control and collaboration through GitHub.',
      technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
      link: 'https://first-sketch-concepts.vercel.app/',
      github: 'https://github.com/haneenckm/firstsketch-concepts',
      date: 'Nov 2025 - Jan 2026',
    },
    {
      id: 2,
      title: 'Clothing E-commerce Platform | Alyara',
      description: 'Developed a responsive Arabian clothing e-commerce platform with 26+ products and dynamic category browsing. Implemented a real-time cart with LocalStorage support, improving session continuity by 40%. Integrated Gemini AI chatbot, boosting user engagement by 30%.',
      technologies: ['Next.js 16', 'React 18', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Google Gemini AI', 'React Context API'],
      link: 'https://alyaraclothing.vercel.app/',
      github: 'https://github.com/haneenckm/arabian-clothing',
      date: 'Jun 2025 - Jul 2025',
    },
    {
      id: 3,
      title: 'Online Food Delivery Web Application | Thunder',
      description: 'Designed an end-to-end food delivery workflow with dedicated admin and user interfaces, including menu pages, cart system, and order tracking UI. Implemented secure login, real-time order updates, and backend processing using PHP & MySQL, along with structured development via GitHub (15+ commits). Improved platform performance by delivering a fully responsive interface that increased user interaction and reduced bounce rate by 30%.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      link: '#',
      github: 'https://github.com/haneenckm/food-delivery-project',
      date: 'Nov 2024 - Jan 2025',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors group">
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded ml-2 whitespace-nowrap">
                    {project.date}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 flex-grow text-sm">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent/10 text-accent border border-accent/30 rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border text-foreground rounded hover:bg-muted transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
