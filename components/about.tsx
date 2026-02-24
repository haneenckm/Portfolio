export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-accent/20 group">
              <img
                src="/profile.jpg"
                alt="Haneen"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Haneen&background=random&size=512';
                }}
              />
              <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              I'm a passionate full stack developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create seamless digital experiences
              that solve real-world problems.
            </p>

            <p>
              My journey in tech started with a curiosity about how digital products are built. I've been
              consistently honing my skills across various technologies including React, Next.js, Node.js, and databases.
              I believe in writing clean, maintainable code and always staying eager to learn the latest industry trends.
            </p>

            <p>
              When I'm not coding, I enjoy contributing to open source projects, learning new technologies, and sharing
              knowledge with the developer community. I'm always eager to take on challenging projects that push me to grow.
            </p>

            <p>
              I'm currently available for freelance projects and full-time opportunities. Feel free to reach out if you'd like
              to discuss how I can help bring your ideas to life.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
            <p className="text-muted-foreground">Self-taught & Passionate Student</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-primary mb-2">Projects</h3>
            <p className="text-muted-foreground">3 Core Projects Developed</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold text-primary mb-2">Learning</h3>
            <p className="text-muted-foreground">10+ Technologies Explored</p>
          </div>
        </div>
      </div>
    </section>
  );
}
