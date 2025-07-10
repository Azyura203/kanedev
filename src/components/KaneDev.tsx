import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Users, BarChart3, Lightbulb, Target, Zap } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import Card from './ui/Card';

const KaneDev: React.FC = () => {
  const visionPoints = [
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored solutions built with cutting-edge technologies',
      color: 'text-blue-600'
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'Creating solutions that push boundaries and solve real problems',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'A team of passionate developers working together',
      color: 'text-green-600'
    },
    {
      icon: BarChart3,
      title: 'Growth Mindset',
      description: 'Continuously learning and adapting to new technologies',
      color: 'text-yellow-600'
    }
  ];

  return (
    <Section id="kanedev" background="muted" animate>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-title mb-6">KANEDEV Vision</h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            My dream of building a software company that creates innovative solutions 
            with a focus on quality, user experience, and technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Vision Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <p className="text-body leading-relaxed">
                While I'm currently focusing on building my skills as a junior developer, 
                I carry a dream of one day running my own software company: 
                <span className="font-semibold text-blue-600"> KANEDEV</span>.
              </p>
              
              <p className="text-body leading-relaxed">
                My vision is to create a company that builds innovative software solutions 
                with a focus on quality, user experience, and technical excellence. A place 
                where creative minds can collaborate to solve real problems.
              </p>
              
              <p className="text-body leading-relaxed">
                This isn't just a distant dream—it's what drives me to learn, grow, and 
                push myself every day. Every project I take on, every skill I develop, and 
                every connection I make is a step toward making KANEDEV a reality.
              </p>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative mt-8"
            >
              <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-600/20">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-600/10 rounded-xl">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <blockquote className="text-lg font-medium text-foreground italic">
                      "Dreams don't work unless you do."
                    </blockquote>
                    <cite className="text-blue-600 font-semibold not-italic">— KANEDEV mantra</cite>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-6"
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Rocket className="w-4 h-4 mr-2" />
                Join The Journey
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Vision Points Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card hover animate delay={0.4 + index * 0.1} className="text-center h-full">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">
                      <point.icon className={`w-8 h-8 ${point.color}`} />
                    </div>
                    <h3 className="text-heading text-lg">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-zinc-900/50 to-blue-900/50 border-zinc-700/50 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-400" />
              <h3 className="text-heading text-white">The Path Forward</h3>
            </div>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Every line of code I write, every problem I solve, and every skill I master 
              brings me closer to the vision of KANEDEV. It's not just about building a company—
              it's about creating something that makes a difference.
            </p>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
};

export default KaneDev;