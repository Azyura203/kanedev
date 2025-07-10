import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      href: "https://github.com/Azyura203",
      icon: Github,
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      href: "https://www.linkedin.com/in/saikyawgaung/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      href: "mailto:saikyawgaung@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-red-600"
    }
  ];

  return (
    <Section className="min-h-screen flex items-center relative overflow-hidden" size="lg">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </motion.div>
              
              <h1 className="text-display">
                Hi, I'm{' '}
                <motion.span
                  className="text-blue-600"
                  animate={{
                    backgroundPosition: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Kyaw Gaung
                </motion.span>
              </h1>
              
              <p className="text-subheading text-muted-foreground">
                AKA <span className="font-semibold text-foreground">Kane</span>
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-body text-muted-foreground max-w-2xl"
            >
              A passionate junior developer exploring the full stack and DevOps world. 
              I'm focused on learning, building, and gaining experience through hands-on 
              work and collaboration. Currently dreaming of running my own software company: 
              <span className="font-semibold text-blue-600"> KANEDEV</span>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                className="btn btn-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                Get In Touch
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass rounded-2xl text-muted-foreground transition-colors focus-ring ${link.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Terminal/Code Preview */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="glass rounded-3xl p-6 shadow-2xl"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-sm text-muted-foreground ml-4 font-mono">
                  kane@portfolio:~
                </div>
              </div>
              
              <div className="font-mono text-sm space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-foreground">whoami</span>
                  </div>
                  <div className="text-muted-foreground ml-6">
                    Kyaw Gaung (Kane) - Junior Developer
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-foreground">cat skills.txt</span>
                  </div>
                  <div className="text-muted-foreground ml-6">
                    Full Stack Development, DevOps,<br />
                    Problem Solving, Creative Thinking
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">$</span>
                    <span className="text-foreground">echo $DREAM</span>
                  </div>
                  <div className="text-blue-600 ml-6 font-semibold">
                    "Building KANEDEV - My future software company"
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-500">$</span>
                  <span className="text-foreground">_</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-foreground"
                  >
                    |
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;