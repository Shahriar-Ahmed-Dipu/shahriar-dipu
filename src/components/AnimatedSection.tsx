
import React from 'react';
import { cn } from '@/lib/utils';
import { useIntersection } from '@/hooks/use-intersection';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in-right' | 'blur-in' | 'scale-in' | 'stagger';
  delay?: number;
  threshold?: number;
  className?: string;
}

export const AnimatedSection = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className,
  ...props
}: AnimatedSectionProps) => {
  const { ref, isIntersecting } = useIntersection<HTMLDivElement>({
    threshold,
    triggerOnce: true,
  });

  const getAnimationClass = () => {
    if (!isIntersecting) return '';
    if (animation === 'stagger') return 'is-visible';
    return `animate-${animation}`;
  };

  const animationClass = getAnimationClass();
  const staggerClass = animation === 'stagger' ? 'stagger-animate' : '';
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={cn(staggerClass, animationClass, className)}
      style={delayStyle}
      {...props}
    >
      {children}
    </div>
  );
};
