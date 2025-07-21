import { ReactNode, useRef } from 'react';

import { motion, useInView } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
  amount?: number;
}

const FadeInView = ({
  children,
  distance = 30,
  duration = 0.6,
  delay = 0,
  amount = 0.1,
  className,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
