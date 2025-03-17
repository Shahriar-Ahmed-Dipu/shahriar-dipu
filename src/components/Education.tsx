
import { AnimatedSection } from './AnimatedSection';

export const Education = () => {
  const certificates = [{
    title: "Computer Programming and Analysis - Advanced Diploma",
    institution: "George Brown College, Toronto",
    period: "2023 - 2025",
    description: "Advanced programming concepts, system analysis, database management, and software development methodologies."
  }, {
    title: "Website Design and Development",
    institution: "Soft Tech IT, Bangladesh",
    period: "2022",
    description: "HTML5, CSS3, JavaScript, and responsive design principles for modern web applications."
  }, {
    title: "Introduction to AI and Machine Learning",
    institution: "Online Certification",
    period: "2023",
    description: "Fundamentals of artificial intelligence, machine learning algorithms, and neural networks."
  }];

  return <section id="education" className="bg-gradient-to-r from-purple-50 to-indigo-50 relative overflow-hidden py-16">
      <div className="section-container">
        <AnimatedSection animation="fade-in-up" className="space-y-2 mb-12">
          <h2 className="section-title">Academic Credentials</h2>
          <p className="section-subtitle">
            Education, certificates and academic achievements that have shaped my career
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-12 gap-8">
          <AnimatedSection animation="fade-in-up" delay={100} className="md:col-span-6 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold font-display">Academic Achievements</h3>
              
              <div className="glass p-6 rounded-2xl space-y-5 border border-border/50 shadow-md bg-white/60">
                <div>
                  <p className="font-medium text-lg">George Brown College</p>
                  <p className="text-muted-foreground">Advanced Diploma in Computer Programming and Analysis</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall GPA</span>
                      <span className="font-medium">3.32/4.0</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{
                      width: '83%'
                    }}></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium text-lg">Higher Secondary Certificate</p>
                  <p className="text-muted-foreground">Science Group, Bangladesh</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>GPA</span>
                      <span className="font-medium">5.0/5.0</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{
                      width: '100%'
                    }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="font-medium">Academic Honors</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Dean's List for Academic Excellence (Fall 2023)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Perfect Attendance Award (Winter 2024)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Excellence in Programming Competition (2024)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl border border-border/50 shadow-md bg-white/60">
              <h3 className="text-xl font-semibold font-display mb-4">Transcript</h3>
              <p className="text-muted-foreground mb-4">
                My academic transcript details the courses taken and grades received during my educational journey.
              </p>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-white transition-colors text-sm font-medium text-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span className="">View Transcript</span>
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200} className="md:col-span-6 space-y-6">
            <h3 className="text-2xl font-semibold font-display">Certificates & Degrees</h3>
            
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div key={index} className="glass p-6 rounded-2xl border border-border/50 transition-all hover:shadow-md bg-white/60">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-lg">{cert.title}</h4>
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">{cert.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{cert.institution}</p>
                  <p className="text-sm">{cert.description}</p>
                </div>
              ))}
              
              <div className="glass p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-blue-50 to-purple-50 shadow-md">
                <h4 className="font-medium text-lg">Additional Learning</h4>
                <p className="text-muted-foreground text-sm mt-2 mb-4">
                  Continuous self-education through online platforms and resources.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M9 9h6v6H9z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Data Structures & Algorithms</p>
                      <p className="text-xs text-muted-foreground">Self-paced online course</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">UI/UX Design Fundamentals</p>
                      <p className="text-xs text-muted-foreground">Design principles and user experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
                        <line x1="2" x2="22" y1="20" y2="20" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Responsive Web Design</p>
                      <p className="text-xs text-muted-foreground">Mobile-first and adaptive layouts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
