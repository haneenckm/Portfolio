import { Trophy, Star, Zap, Target } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      icon: Trophy,
      title: '100+ DSA Problems Solved',
      description: 'Successfully solved over 100 Data Structures and Algorithms problems on platforms such as LeetCode and GeeksforGeeks, demonstrating strong coding efficiency and problem-solving capabilities.',
      year: '2025',
    },
  ];

  const stats = [
    {
      number: '100+',
      label: 'DSA Problems Solved',
    },
    {
      number: '3',
      label: 'Featured Projects',
    },
    {
      number: '11',
      label: 'Certifications',
    },
    {
      number: '10+',
      label: 'Core Technologies',
    },
  ];

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-12">Achievements</h2>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors"
            >
              <h3 className="text-3xl font-bold text-accent mb-2">{stat.number}</h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-primary">{achievement.title}</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-primary mb-6">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Technical Excellence</h4>
              <ul className="space-y-2 text-foreground text-sm">
                <li>✓ Improved session continuity by 40% with cart implementation</li>
                <li>✓ Boosted user engagement by 30% with AI chatbot integration</li>
                <li>✓ Reduced bounce rate by 30% through responsive UI design</li>
                <li>✓ Reduced authentication issues by 35% using Clerk</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Project Impact</h4>
              <ul className="space-y-2 text-foreground text-sm">
                <li>✓ Developed 3 diverse web applications from concept to production</li>
                <li>✓ Built 26+ product e-commerce platform with AI integration</li>
                <li>✓ Developed 20+ menu items food delivery system</li>
                <li>✓ Strengthening full stack skills across modern frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
