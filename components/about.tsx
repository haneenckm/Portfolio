export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>

        <div className="space-y-6 text-lg text-foreground leading-relaxed">
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
