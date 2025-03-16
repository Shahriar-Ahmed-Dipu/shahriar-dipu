import { AnimatedSection } from './AnimatedSection';
import { useState } from 'react';
import { cn } from '@/lib/utils';
type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: 'web' | 'mobile' | 'ai' | 'database';
};
export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const projects: Project[] = [{
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce website with product management, cart functionality, and secure checkout process.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1621570073702-43c600be192d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: 'web'
  }, {
    id: 2,
    title: "Hospital Management System",
    description: "A comprehensive solution for managing patient records, appointments, and hospital resources.",
    technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1603384737051-53a4a1fb5d85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: 'database'
  }, {
    id: 3,
    title: "AI-Powered Content Generator",
    description: "An application that uses AI to generate content for blogs, articles, and social media posts.",
    technologies: ["Python", "TensorFlow", "React", "Flask"],
    image: "https://images.unsplash.com/photo-1625014618611-fb129c2a9ee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: 'ai'
  }, {
    id: 4,
    title: "Budget Tracker Mobile App",
    description: "A mobile application to help users track expenses, set budgets, and visualize spending patterns.",
    technologies: ["React Native", "Firebase", "JavaScript"],
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: 'mobile'
  }, {
    id: 5,
    title: "Student Portal",
    description: "A comprehensive portal for students to access course materials, submit assignments, and track grades.",
    technologies: ["JavaScript", "PHP", "MySQL", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    category: 'web'
  }];
  const filters = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'web',
    label: 'Web'
  }, {
    id: 'mobile',
    label: 'Mobile'
  }, {
    id: 'ai',
    label: 'AI'
  }, {
    id: 'database',
    label: 'Database'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <AnimatedSection animation="fade-in-up" className="space-y-2 mb-12">
          <h2 className="section-title">Academic Work Experience</h2>
          <p className="section-subtitle">
            A collection of projects showcasing my technical skills and problem-solving abilities
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={100} className="mb-12">
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={cn("px-4 py-2 rounded-full text-sm font-medium transition-colors", activeFilter === filter.id ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80 text-muted-foreground")}>
                {filter.label}
              </button>)}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => <AnimatedSection key={project.id} animation="fade-in-up" delay={100 + index * 50} className="group">
              <div className="glass rounded-2xl overflow-hidden border border-border/50 h-full flex flex-col transition-all hover:shadow-md hover:translate-y-[-2px]">
                
                <div className="p-6 flex-1 flex flex-col">
                  
                  
                </div>
              </div>
            </AnimatedSection>)}
        </div>

        <AnimatedSection animation="fade-in-up" delay={300} className="mt-16 glass rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-semibold font-display mb-6">Capstone Project</h3>
          
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-6 space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Project Summary</h4>
                <p className="text-muted-foreground text-sm">
                  A comprehensive healthcare management system designed to streamline patient care, 
                  appointment scheduling, and medical record management for small to medium-sized clinics.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Project Vision</h4>
                <p className="text-muted-foreground text-sm">
                  To create an accessible, secure, and efficient digital solution that enhances 
                  healthcare delivery and improves the patient experience through intuitive design 
                  and powerful functionality.
                </p>
              </div>
              
              <div className="pt-2">
                <h4 className="text-lg font-medium mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Express</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">JWT Authentication</span>
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
                    <span>Patient management and electronic health records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Appointment scheduling and reminder system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Billing and insurance claim processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Secure messaging between patients and providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-primary shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Analytics dashboard for clinic performance metrics</span>
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