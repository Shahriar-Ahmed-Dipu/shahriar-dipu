import { AnimatedSection } from './AnimatedSection';
export const About = () => {
  return <section id="about" className="relative overflow-hidden py-0">
      <div className="section-container">
        <AnimatedSection animation="fade-in-up" className="space-y-2 mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate software developer with a love for clean code and innovative solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <AnimatedSection animation="fade-in-up" delay={100} className="md:col-span-7 space-y-6">
            <h3 className="text-2xl font-semibold font-display">Bio</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I recently completed my advanced diploma in Computer Programming and Analysis at George Brown College, Toronto, Canada with an overall CGPA of 3.32. 
                My educational journey began in Bangladesh where I achieved a perfect GPA of 5 out of 5 in my higher secondary examination.
              </p>
              <p>
                I have a deep passion for coding and AI automation, with proficiency in JavaScript, PHP, CSS, Tailwind, HTML, and C#. 
                I enjoy solving complex problems and creating efficient, elegant solutions that deliver exceptional user experiences.
              </p>
            </div>

            <h3 className="text-2xl font-semibold font-display pt-4">Career Statement</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                "We are the facilitators of our own creative evolution" - Bill Hicks. 
                This quote resonates deeply with my approach to software development. I believe that as developers, 
                we don't just write code; we create solutions that evolve and shape the digital landscape.
              </p>
              <p>
                My goal is to continue growing as a developer by embracing new technologies and methodologies, 
                while maintaining a strong foundation in programming fundamentals. I am motivated by the opportunity 
                to create software that makes a meaningful impact, whether that's by improving efficiency, 
                enhancing user experiences, or solving real-world problems.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200} className="md:col-span-5">
            <div className="glass p-6 rounded-2xl space-y-6 border border-border/50">
              <h3 className="text-xl font-semibold font-display">Skills</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1.5">Programming Languages</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">JavaScript</span>
                    <span className="tag">PHP</span>
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">C#</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-1.5">Frameworks & Libraries</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">React</span>
                    <span className="tag">Tailwind CSS</span>
                    <span className="tag">Node.js</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-1.5">Tools & Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">Git</span>
                    <span className="tag">VS Code</span>
                    <span className="tag">AI Automation</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-semibold font-display mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">George Brown College, Toronto</p>
                    <p className="text-sm text-muted-foreground">Advanced Diploma in Computer Programming and Analysis</p>
                    <p className="text-sm text-primary mt-1">CGPA: 3.32 | 2023 - 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">Higher Secondary Education, Bangladesh</p>
                    <p className="text-sm text-muted-foreground">Science Group</p>
                    <p className="text-sm text-primary mt-1">GPA: 5.0/5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};