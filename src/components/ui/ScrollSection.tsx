'use client';
import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  enableSnap?: boolean;
  fullHeight?: boolean;
}

export default function ScrollSection({ children, className = '', id, enableSnap = true, fullHeight = true }: ScrollSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  return (
    <section 
      ref={ref}
      id={id}
      className={`${fullHeight ? 'min-h-screen' : ''} ${enableSnap ? 'snap-start' : ''} flex items-center pt-6 md:pt-20 ${className}`}
    >
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
} 