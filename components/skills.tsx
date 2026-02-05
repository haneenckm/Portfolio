export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'SQL', 'C++', 'C', 'PHP'],
    },
    {
      category: 'Frameworks',
      skills: ['HTML and CSS', 'React.js', 'NodeJS', 'Express.js', 'Next.js'],
    },
    {
      category: 'Tools & Version Control',
      skills: ['Visual Studio Code', 'Eclipse', 'Postman', 'Git', 'MySQL', 'MongoDB'],
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Docker', 'AWS', 'Microsoft Azure'],
    },
    {
      category: 'Soft Skills',
      skills: ['Team Collaboration', 'Project Management', 'Adaptability', 'Effective Communication'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-accent/5 to-accent/10 p-8 rounded-lg border border-accent/20">
          <h3 className="text-xl font-semibold text-primary mb-4">Proficiency Levels</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">Frontend Development</span>
                <span className="text-muted-foreground">90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">Backend Development</span>
                <span className="text-muted-foreground">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">Database Design</span>
                <span className="text-muted-foreground">80%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">DevOps & Deployment</span>
                <span className="text-muted-foreground">75%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
