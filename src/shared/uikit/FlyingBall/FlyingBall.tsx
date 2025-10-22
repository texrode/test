"use client"

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import useWindowSize from '@/shared/hooks/useWindowSize';

export const FlyingBall = () => {
  const [visible, setVisible] = useState(true);
  const windowSize = useWindowSize()

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (visible && windowSize > 1200) ? (
    <motion.div
      style={{
        position: 'fixed',
        top: -20,
        left: -20,
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: '#007AFF',
        pointerEvents: 'none',
        opacity: 0.2,
        zIndex: 9999,
        translateX: springX,
        translateY: springY,
      }}
    />
  ) : null;
};