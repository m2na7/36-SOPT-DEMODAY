import { ReactNode } from 'react';

import { motion } from 'motion/react';

type AnimationVariant =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'scaleIn'
  | 'scaleInX';

interface Props {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
  variant?: AnimationVariant;
  scale?: number;
}

const FadeIn = ({
  children,
  distance = 30,
  duration = 0.5,
  delay = 0,
  variant = 'fadeInUp',
  scale = 0.95,
  className,
}: Props) => {
  const getInitialState = () => {
    switch (variant) {
      case 'fadeIn':
        return { opacity: 0 };
      case 'fadeInUp':
        return { opacity: 0, y: distance };
      case 'fadeInDown':
        return { opacity: 0, y: -distance };
      case 'fadeInLeft':
        return { opacity: 0, x: -distance };
      case 'fadeInRight':
        return { opacity: 0, x: distance };
      case 'scaleIn':
        return { opacity: 0, scale };
      case 'scaleInX':
        return { opacity: 0, scaleX: 0 };
      default:
        return { opacity: 0 };
    }
  };

  const getAnimateState = () => {
    switch (variant) {
      case 'fadeIn':
        return { opacity: 1 };
      case 'fadeInUp':
      case 'fadeInDown':
        return { opacity: 1, y: 0 };
      case 'fadeInLeft':
      case 'fadeInRight':
        return { opacity: 1, x: 0 };
      case 'scaleIn':
        return { opacity: 1, scale: 1 };
      case 'scaleInX':
        return { opacity: 1, scaleX: 1 };
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialState()}
      animate={getAnimateState()}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
