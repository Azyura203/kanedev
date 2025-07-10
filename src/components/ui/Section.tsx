import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  background?: 'default' | 'muted' | 'glass';
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  size = 'md',
  background = 'default',
  animate = false
}) => {
  const sizeClasses = {
    sm: 'section-sm',
    md: 'section',
    lg: 'py-20 md:py-28 lg:py-36'
  };

  const backgroundClasses = {
    default: '',
    muted: 'bg-zinc-50/50 dark:bg-zinc-900/50',
    glass: 'glass'
  };

  const Component = animate ? motion.section : 'section';
  
  const animationProps = animate ? {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  } : {};

  return (
    <Component 
      className={`${sizeClasses[size]} ${backgroundClasses[background]} ${className}`}
      {...animationProps}
    >
      {children}
    </Component>
  );
};

export default Section;