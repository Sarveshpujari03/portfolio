import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useGsapScrollAnimation = (selector = '[data-animate]') => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    if (!elements.length) return; // ⛔ Skip if no matching elements

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 93%',
            toggleActions: 'restart none restart none',
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'sine.in',
        }
      );
    });

    return () => {
      // Optional cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector]);
};

export default useGsapScrollAnimation;
