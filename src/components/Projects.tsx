import { AnimatedSection } from './AnimatedSection';
import { useState } from 'react';
import { cn } from '@/lib/utils';
type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: 'web' | 'mobile';
  link?: string;
};
export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const projects: Project[] = [{
    id: 1,
    title: "E-Commerce Website",
    description: "A modern one-page e-commerce website with product showcase, categories, and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: 'web',
    link: "https://shahriar-ahmed-dipu.github.io/OnePage-E-commerce_website/"
  }, {
    id: 2,
    title: "Biker Zone Website",
    description: "A responsive landing page for a bike selling business with showcase of different models.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: 'web',
    link: "https://shahriar-ahmed-dipu.github.io/biker-zone-responsive-landing-page/"
  }];
  const filters = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'web',
    label: 'Web'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className="relative overflow-hidden py-12 bg-gradient-to-r from-amber-50 to-yellow-50">
      <div className="section-container">
        <AnimatedSection animation="fade-in-up" className="space-y-2 mb-8">
          <h2 className="section-title">Academic Work Experience</h2>
          <p className="section-subtitle">
            A collection of projects showcasing my technical skills and problem-solving abilities
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={100} className="mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={cn("px-4 py-2 rounded-full text-sm font-medium transition-colors", activeFilter === filter.id ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80 text-muted-foreground")}>
                {filter.label}
              </button>)}
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in-up" delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map(project => <div key={project.id} className="glass p-5 rounded-2xl border border-border/50 bg-white/70 transition-all hover:shadow-lg overflow-hidden group">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, i) => <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{tech}</span>)}
              </div>
              
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                  Visit Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>}
            </div>)}
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={300} className="glass rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-semibold font-display mb-6">Capstone Project</h3>
          
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-6 space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Project Summary</h4>
                <p className="text-muted-foreground text-sm">A modern parking spot rental system designed to connect parking spot owners with users who need temporary parking. The system allows real-time booking, anti-theft protection, and additional services like EV charging and emergency car services.</p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Project Vision</h4>
                <p className="text-muted-foreground text-sm">To create a secure, efficient, and user-friendly parking rental solution that:                                                               ✔️ Helps owners list and monetize their parking spots   ✔️ Allows users to book spots per hour or second          ✔️ Enhances security with an anti-theft tracking system ✔️ Supports EV users with charging stations                    ✔️ Provides an emergency car service for immediate assistance</p>
              </div>
              
              <div className="pt-2">
                <h4 className="text-lg font-medium mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">TAILWIND</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">PHP</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-6 space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Key Features</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Parking Spot Listing & Booking – Owners can list spots, and users can rent on demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Emergency Car Service – Users can request immediate help for car issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>EV Charging Stations – Enables electric vehicle users to find and book charging spots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Location Lock System (Anti-Theft) – Alerts owners if a car moves unexpectedly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    
                    <span>
                  </span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-2">
                <h4 className="text-lg font-medium mb-2">Project Status</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>85% Complete</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{
                    width: '85%'
                  }}></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors text-primary-foreground text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                    <span>View Demo</span>
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};