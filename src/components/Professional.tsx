
import { AnimatedSection } from './AnimatedSection';

export const Professional = () => {
  return (
    <section id="professional" className="py-24 bg-secondary/50 relative overflow-hidden">
      <div className="section-container">
        <AnimatedSection animation="fade-in-up" className="space-y-2 mb-12">
          <h2 className="section-title">Professional Summary</h2>
          <p className="section-subtitle">
            Exploring my professional contributions, achievements, and community service
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-12 gap-8">
          <AnimatedSection 
            animation="fade-in-up" 
            delay={100}
            className="md:col-span-7 space-y-8"
          >
            <h3 className="text-2xl font-semibold font-display">Work Experience</h3>
            
            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl border border-border/50">
                <div className="flex flex-wrap gap-2 justify-between mb-2">
                  <h4 className="font-medium text-lg">Junior Web Developer</h4>
                  <span className="tag bg-secondary">2023 - Present</span>
                </div>
                <p className="text-primary text-sm mb-3">TechSolutions Inc., Toronto</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Working on front-end development for client websites using modern JavaScript frameworks
                  and responsive design principles.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Responsibilities:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>Developing responsive web interfaces using React and Tailwind CSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>Collaborating with design team to implement UI/UX improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>Writing clean, maintainable JavaScript code</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-border/50">
                <div className="flex flex-wrap gap-2 justify-between mb-2">
                  <h4 className="font-medium text-lg">Web Development Intern</h4>
                  <span className="tag bg-secondary">Summer 2022</span>
                </div>
                <p className="text-primary text-sm mb-3">Digital Solutions Agency, Toronto</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Gained hands-on experience in building responsive websites while working closely with senior developers.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Responsibilities:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>Assisted in developing website front-end components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>Learned and implemented best practices in web development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>Participated in client meetings and project planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold font-display pt-4">Professional Work Samples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-5 rounded-2xl border border-border/50 relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="font-medium">E-Commerce Website Redesign</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Redesigned the user interface for an e-commerce platform to improve user experience and conversion rates.
                  </p>
                  <button className="mt-4 text-sm font-medium text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              
              <div className="glass p-5 rounded-2xl border border-border/50 relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="font-medium">Mobile App UI Design</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Created a clean, intuitive user interface for a health tracking mobile application.
                  </p>
                  <button className="mt-4 text-sm font-medium text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection 
            animation="fade-in-up" 
            delay={200}
            className="md:col-span-5 space-y-8"
          >
            <h3 className="text-2xl font-semibold font-display">Community Service</h3>
            <div className="glass p-6 rounded-2xl border border-border/50">
              <div className="space-y-5">
                <div>
                  <h4 className="font-medium">Tech Mentor</h4>
                  <p className="text-sm text-primary">Local Community Center</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Volunteered as a mentor for youths interested in programming, 
                    teaching basic coding concepts and helping with projects.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium">Web Development Workshop Leader</h4>
                  <p className="text-sm text-primary">Public Library Coding Program</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Conducted free workshops on web development basics for beginners, 
                    focusing on HTML, CSS, and introductory JavaScript.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold font-display">Awards & Recognition</h3>
            <div className="glass p-6 rounded-2xl border border-border/50">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                      <path d="M4 22h16"/>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Coding Competition Winner</h4>
                    <p className="text-sm text-muted-foreground">
                      First place in Toronto College Coding Challenge 2024
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4"/>
                      <path d="m16.24 7.76-2.12 2.12"/>
                      <path d="M19 12h-4"/>
                      <path d="m16.24 16.24-2.12-2.12"/>
                      <path d="M12 18v4"/>
                      <path d="m7.76 16.24 2.12-2.12"/>
                      <path d="M5 12h4"/>
                      <path d="m7.76 7.76 2.12 2.12"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Innovation Award</h4>
                    <p className="text-sm text-muted-foreground">
                      For developing an AI-assisted learning platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold font-display">Recommendations</h3>
            <div className="glass p-6 rounded-2xl border border-border/50">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="font-medium text-sm">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">Senior Developer, TechSolutions Inc.</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Nazim is an exceptionally talented developer with a keen eye for detail. 
                    His ability to quickly learn new technologies and apply them effectively is impressive."
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="font-medium text-sm">JS</span>
                    </div>
                    <div>
                      <p className="font-medium">Jane Smith</p>
                      <p className="text-xs text-muted-foreground">Project Manager, Digital Solutions</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Working with Nazim was a pleasure. He consistently delivered high-quality work and 
                    was always willing to go the extra mile to ensure project success."
                  </p>
                </div>
              </div>

              <button className="mt-6 text-sm font-medium text-primary inline-flex items-center gap-1.5">
                <span>View all recommendations</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
