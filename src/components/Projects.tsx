import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag, Filter } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import Card from './ui/Card';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  technologies: string[];
  repoUrl: string;
  demoUrl?: string;
  featured: boolean;
  category: string;
  year: string;
  status: 'completed' | 'in-development' | 'planning';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "KODEX",
      description: "AI-powered documentation platform combining GitHub-style version control with intelligent content generation and collaborative editing features.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["AI", "Documentation", "Collaboration"],
      technologies: ["React", "TypeScript", "TailwindCSS", "AI Integration"],
      repoUrl: "https://github.com/Azyura203/KODEX",
      demoUrl: "https://kodexx.netlify.app/",
      featured: true,
      category: "Web Application",
      year: "2024",
      status: "completed"
    },
    {
      id: 2,
      title: "Wallnance Tycoon",
      description: "Trading strategy game teaching financial literacy through gamified crypto economy simulation with AI-powered market dynamics.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Game", "FinTech", "Education"],
      technologies: ["React Native", "Expo", "TypeScript", "Crypto APIs"],
      repoUrl: "https://github.com/Azyura203/WallnanceTycoon",
      demoUrl: "https://wallnancetycoon.netlify.app/",
      featured: true,
      category: "Mobile Game",
      year: "2024",
      status: "completed"
    },
    {
      id: 3,
      title: "echOS",
      description: "Minimalist operating system built from scratch using Assembly and C with custom kernel, memory management, and shell interface.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["OS", "Low-Level", "System Programming"],
      technologies: ["Assembly", "C", "GRUB", "Custom Kernel"],
      repoUrl: "https://github.com/Azyura203/echOS",
      featured: true,
      category: "Operating System",
      year: "2024",
      status: "in-development"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(project => project.featured) 
      : projects.filter(project => 
          project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())) ||
          project.technologies.some(tech => tech.toLowerCase().includes(filter.toLowerCase())) ||
          project.category.toLowerCase().includes(filter.toLowerCase())
        );
  
  const categories = ['all', 'featured', ...Array.from(new Set(projects.map(project => project.category)))];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'in-development':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'planning':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      default:
        return 'bg-zinc-500/10 text-zinc-600 border-zinc-500/20';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-development':
        return 'In Development';
      case 'planning':
        return 'Planning';
      default:
        return '';
    }
  };

  return (
    <Section id="projects" animate>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-title mb-6">My Projects</h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            A collection of software projects I've built from the ground up. Each project 
            represents my journey in exploring different technologies and solving real-world problems.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 ${
                  filter === category 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                    : 'glass hover:bg-white/90 dark:hover:bg-zinc-800/90'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card hover animate delay={index * 0.1} className="h-full group">
                  {/* Project Image */}
                  <div className="relative h-48 -m-6 mb-6 overflow-hidden rounded-t-3xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-current" />
                        {getStatusText(project.status)}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{project.category}</span>
                      </div>
                      <h3 className="text-heading group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="inline-flex items-center gap-1 bg-blue-600/10 text-blue-600 text-xs px-2 py-1 rounded-lg border border-blue-600/20"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs px-2 py-1 rounded border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <motion.a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 btn btn-secondary text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </motion.a>
                      
                      {project.demoUrl && (
                        <motion.a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 btn btn-primary text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-600/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <motion.div 
                  className="text-4xl font-bold text-blue-600 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {projects.length}
                </motion.div>
                <div className="text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <motion.div 
                  className="text-4xl font-bold text-blue-600 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {Array.from(new Set(projects.flatMap(p => p.technologies))).length}
                </motion.div>
                <div className="text-muted-foreground">Technologies Used</div>
              </div>
              <div>
                <motion.div 
                  className="text-4xl font-bold text-blue-600 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {projects.filter(p => p.status === 'completed').length}
                </motion.div>
                <div className="text-muted-foreground">Completed Projects</div>
              </div>
            </div>
          </Card>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-body text-muted-foreground mb-6">
            Want to see more of my work or collaborate on something exciting?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="https://github.com/Azyura203" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </motion.a>
            <motion.a 
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Projects;