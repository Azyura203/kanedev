import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, GitBranch, Cpu, Monitor, ArrowLeft, Heart, Lightbulb, Zap } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import Card from './ui/Card';

const EchOS: React.FC = () => {
  const features = [
    {
      icon: Terminal,
      title: "GRUB Bootloader",
      description: "Multiboot-compliant assembly bootloader that interfaces with GRUB"
    },
    {
      icon: Code,
      title: "C Kernel",
      description: "Core kernel logic written in C with VGA memory management"
    },
    {
      icon: Monitor,
      title: "Basic Shell",
      description: "Command-line interface with fundamental system commands"
    },
    {
      icon: Cpu,
      title: "Memory Management",
      description: "Custom memory allocator and basic memory management unit"
    }
  ];

  const technicalSpecs = [
    { label: "Architecture", value: "i686 (32-bit x86)" },
    { label: "Bootloader", value: "GRUB + Custom Assembly" },
    { label: "Kernel Language", value: "C + Assembly" },
    { label: "Build System", value: "Custom Makefile" },
    { label: "Cross Compiler", value: "i686-elf-gcc" },
    { label: "Dependencies", value: "Zero (Pure C/Assembly)" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <motion.a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
            window.location.reload();
          }}
          className="inline-flex items-center gap-2 glass rounded-2xl px-4 py-2 text-muted-foreground hover:text-foreground transition-colors focus-ring"
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </motion.a>
      </div>

      {/* Hero Section */}
      <Section size="lg" className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-yellow-500/30"
            >
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">v1.4.0-beta • In Development</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-display mb-8"
            >
              ech<span className="text-red-600">OS</span> 🔧🧠
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-subheading text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              A minimal operating system bootloader and kernel written from scratch in Assembly and C.
              <br />
              <span className="text-red-500 font-semibold">Pure code. Zero dependencies. From bits to boot.</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a 
                href="https://github.com/Azyura203/echOS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GitBranch className="w-5 h-5 mr-2" />
                View Source Code
              </motion.a>
              <motion.a 
                href="https://github.com/Azyura203/echOS/blob/main/README.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Code className="w-5 h-5 mr-2" />
                Documentation
              </motion.a>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Origin Story Section */}
      <Section background="muted" animate>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-yellow-500/30">
              <Lightbulb className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-muted-foreground">The Origin Story</span>
            </div>
            <h2 className="text-title mb-8">The Origin of echOS</h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-r from-red-600/10 to-zinc-700/10 border-red-600/20">
                <div className="space-y-6 text-center">
                  <p className="text-body text-muted-foreground">
                    echOS wasn't born from convenience—it was born from <span className="text-red-500 font-semibold">curiosity</span>.
                  </p>
                  <p className="text-body">
                    In a world ruled by polished interfaces and packaged frameworks, I wanted to touch the <span className="text-red-500 font-semibold">raw pulse</span> of the machine.<br />
                    Not just to use a system... but to <span className="text-red-500 font-semibold">build one</span>. From scratch. From silence. From nothing.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center py-8"
            >
              <p className="text-subheading text-muted-foreground italic">
                No templates. No bootstraps. Just memory, instructions, and a desire to make something that responds.
              </p>
            </motion.div>

            {/* Story Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <Terminal className="w-6 h-6 text-red-500 mt-1" />
                    <h3 className="text-heading">The First Echo</h3>
                  </div>
                  <blockquote className="text-body text-muted-foreground italic">
                    "It started with a hum—<br />
                    a simple boot sector, whispering to the void.<br />
                    A line of Assembly.<br />
                    Then another.<br />
                    Until the first <span className="text-red-500 font-semibold">echo</span> came back: <em>a character on screen</em>."
                  </blockquote>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <Code className="w-6 h-6 text-red-500 mt-1" />
                    <h3 className="text-heading">Speaking to Hardware</h3>
                  </div>
                  <blockquote className="text-body text-muted-foreground italic">
                    "I wasn't just writing code anymore...<br />
                    I was <span className="text-red-500 font-semibold">speaking to the hardware</span>."
                  </blockquote>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <Heart className="w-6 h-6 text-red-500 mt-1" />
                    <h3 className="text-heading">The Echo Chamber</h3>
                  </div>
                  <blockquote className="text-body text-muted-foreground italic">
                    "<span className="text-red-500 font-semibold">echOS</span> became my echo chamber—<br />
                    a system where every command I typed bounced back with clarity, control, and purpose.<br />
                    Like a bat navigating darkness, I built a shell that listens.<br />
                    A kernel that feels.<br />
                    A memory manager that maps the unknown."
                  </blockquote>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <Zap className="w-6 h-6 text-red-500 mt-1" />
                    <h3 className="text-heading">The Language</h3>
                  </div>
                  <blockquote className="text-body text-muted-foreground italic">
                    "<span className="text-red-500 font-semibold">The OS became my language.</span><br />
                    Each key press, a ping.<br />
                    Each function, a frequency.<br />
                    Each update, a louder echo."
                  </blockquote>
                </Card>
              </motion.div>
            </div>

            {/* Final Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center"
            >
              <Card className="bg-gradient-to-r from-red-600 to-zinc-700 text-white">
                <div className="space-y-4">
                  <p className="text-subheading">
                    And soon, it wasn't just a system.
                  </p>
                  <p className="text-heading font-bold">
                    It was <span className="text-red-300">echOS</span>—
                  </p>
                  <p className="text-body italic">
                    A name. A symbol. A feedback loop between creator and creation.<br />
                    An OS that doesn't just <em>run</em>, it <em className="text-red-300">resonates</em>.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Technical Overview */}
      <Section animate>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-title mb-6">Technical Architecture</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Current Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-heading mb-8">✅ Current Features</h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card hover className="flex items-start gap-4">
                      <div className="p-3 bg-red-600/10 rounded-xl">
                        <feature.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Specifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-heading mb-8">⚙️ Specifications</h3>
              <Card>
                <div className="space-y-4">
                  {technicalSpecs.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex justify-between items-center p-3 glass rounded-xl"
                    >
                      <span className="font-medium text-foreground">{spec.label}</span>
                      <span className="text-red-600 font-mono text-sm">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section background="muted" animate>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-title mb-8">🧠 The Philosophy</h2>
            
            <Card className="bg-gradient-to-r from-red-600 to-zinc-700 text-white mb-12">
              <blockquote className="text-subheading mb-6 italic">
                "echOS uses zero dependencies. Pure C and Assembly. From bits to boot. 💥"
              </blockquote>
              <p className="text-body leading-relaxed">
                This isn't just an operating system—it's a journey into the fundamentals of computing. 
                Every line of code is written from scratch, every feature built from first principles. 
                echOS represents the pure essence of what it means to create software at the lowest level, 
                where every byte matters and every instruction counts.
              </p>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Zero Dependencies",
                  description: "Built entirely from scratch using only C and Assembly"
                },
                {
                  icon: Code,
                  title: "Learning Focused",
                  description: "Every feature is an opportunity to understand computing fundamentals"
                },
                {
                  icon: Terminal,
                  title: "Pure Implementation",
                  description: "No copy-paste code, every line written with intention"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card hover className="text-center h-full">
                    <item.icon className="w-8 h-8 text-red-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default EchOS;