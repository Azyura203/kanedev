import React from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  animate = false 
}) => {
  const Component = animate ? motion.div : 'div';
  
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  } : {};

  return (
    <Component 
      className={`container-custom ${className}`}
      {...animationProps}
    >
      {children}
    </Component>
  );
};

export default Container;