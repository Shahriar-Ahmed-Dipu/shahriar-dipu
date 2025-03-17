
import { AnimatedSection } from './AnimatedSection';

export const Professional = () => {
  return <section id="professional" className="bg-secondary/50 relative overflow-hidden py-8">
      <div className="section-container">
        <AnimatedSection animation="fade-in-up" className="space-y-2 mb-8">
          <h2 className="section-title">Professional Summary</h2>
          <p className="section-subtitle">
            Exploring my professional contributions, achievements, and community service
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-12 gap-8">
          <AnimatedSection animation="fade-in-up" delay={100} className="md:col-span-7 space-y-8">
            <h3 className="text-2xl font-semibold font-display">Work Experience</h3>
            
            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl border border-border/50">
                <div className="flex flex-wrap gap-2 justify-between mb-2">
                  <h4 className="font-medium text-lg">Junior Frontend Designer</h4>
                  <span className="tag bg-secondary">2022 - Present</span>
                </div>
                <p className="text-primary text-sm mb-3">Fiverr.com</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Working on front-end development for client websites using modern JavaScript frameworks
                  and responsive design principles.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Responsibilities:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Developing responsive web interfaces using React and Tailwind CSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Collaborating with design team to implement UI/UX improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Writing clean, maintainable JavaScript code</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200} className="md:col-span-5 space-y-8">
            <h3 className="text-2xl font-semibold font-display">Awards & Recognition</h3>
            <div className="glass p-6 rounded-2xl border border-border/50">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Coding Competition Winner</h4>
                    <p className="text-sm text-muted-foreground">Third place in Canada at IEEE Extreme 2023 coding competition</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4" />
                      <path d="m16.24 7.76-2.12 2.12" />
                      <path d="M19 12h-4" />
                      <path d="m16.24 16.24-2.12-2.12" />
                      <path d="M12 18v4" />
                      <path d="m7.76 16.24 2.12-2.12" />
                      <path d="M5 12h4" />
                      <path d="m7.76 7.76 2.12 2.12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Dean's Award 2023</h4>
                    <p className="text-sm text-muted-foreground">For maintaining a good a CGPA</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
