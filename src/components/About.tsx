import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Brain, Lightbulb, Award, Coffee } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import Card from './ui/Card';

const About: React.FC = () => {
  const skills = [
    {
      name: 'Full Stack Development',
      percentage: 80,
      icon: Code,
      description: 'React, Node.js, TypeScript, and modern web technologies',
      color: 'text-blue-600'
    },
    {
      name: 'DevOps & System Programming',
      percentage: 25,
      icon: Server,
      description: 'Learning the fundamentals, building echOS from scratch',
      color: 'text-green-600'
    },
    {
      name: 'Problem Solving',
      percentage: 85,
      icon: Brain,
      description: 'Analytical thinking, debugging, and creative solutions',
      color: 'text-purple-600'
    },
    {
      name: 'Learning & Adaptation',
      percentage: 90,
      icon: Lightbulb,
      description: 'Fast adaptation to new technologies and frameworks',
      color: 'text-yellow-600'
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: 'Fresh Graduate',
      description: 'Bachelor\'s degree with HND, ready to apply knowledge in real-world projects'
    },
    {
      icon: Code,
      title: 'echOS Developer',
      description: 'Building a custom operating system from scratch using Assembly and C'
    },
    {
      icon: Coffee,
      title: 'Debug Enthusiast',
      description: 'I actually enjoy debugging - even when I caused the bug myself!'
    }
  ];

  return (
    <Section id="about" background="muted" animate>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-title mb-6">About Me</h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            I'm a junior developer with a fresh perspective on technology, passionate about 
            building things from the ground up and solving complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <p className="text-body leading-relaxed">
                I'm a junior developer with a fresh Bachelor's degree and previous HND, 
                passionate about all things tech—especially full stack development. My 
                internship experiences have given me a solid foundation, but I'm hungry 
                to learn more and grow in this field.
              </p>
              
              <p className="text-body leading-relaxed">
                While I dream of running my own software company (
                <span className="font-semibold text-blue-600">KANEDEV</span>) someday, 
                right now I'm focused on building my skills through hands-on projects 
                and collaborative work. I'm not trying to oversell—just being real about 
                where I am in my journey.
              </p>
              
              <p className="text-body leading-relaxed">
                Fun fact: I actually enjoy debugging—even when I'm the one who caused 
                the bug! I find the process of solving problems deeply satisfying.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4 pt-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 glass rounded-2xl"
                >
                  <div className="p-2 bg-blue-600/10 rounded-xl">
                    <highlight.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-heading">My Skills</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {skill.percentage}%
                    </span>
                  </div>
                  
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="pt-6"
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default About;