"use client"

import useWindowSize from "@/shared/hooks/useWindowSize";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  const windowSize = useWindowSize()

  return (
    <motion.div
      initial={{ opacity: 0, y: windowSize > 1024 ? 60: 30 }}
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration:  windowSize > 1024 ? 0.6: 0.4, delay, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}