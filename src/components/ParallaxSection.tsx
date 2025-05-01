
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '../lib/utils';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
  speed?: number;
  overlayOpacity?: number;
  minHeight?: string;
}

export default function ParallaxSection({
  backgroundImage,
  children,
  className,
  speed = 0.2,
  overlayOpacity = 0.5,
  minHeight = '400px'
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    
    if (!section || !bg) return;
    
    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportBottom = window.scrollY + window.innerHeight;
      const viewportTop = window.scrollY;
      
      // Only animate when the section is visible
      if (viewportBottom > sectionTop && viewportTop < sectionTop + sectionHeight) {
        const sectionProgress = (viewportBottom - sectionTop) / (window.innerHeight + sectionHeight);
        const moveY = (sectionProgress - 0.5) * speed * 100;
        
        bg.style.transform = `translateY(${moveY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <div
      ref={sectionRef}
      className={cn(
        'relative overflow-hidden',
        className
      )}
      style={{ minHeight }}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: 'translateY(0)'
        }}
      />
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }} 
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
