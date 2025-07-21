import { ReactNode } from 'react';

import { motion, AnimatePresence } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
  duration?: number;
  animationKey?: string;
}

const FadeInTransition = ({
  children,
  duration = 0.3,
  animationKey,
  className,
}: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={animationKey}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeInTransition;
