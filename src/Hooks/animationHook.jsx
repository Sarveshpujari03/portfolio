import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

    const useGsapScrollAnimation = (selector = '[data-animate]') => {
        useEffect(() => {
            gsap.utils.toArray(selector).forEach((el) => {
                gsap.fromTo(
                    el,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 93%',
                            toggleActions: 'restart none restart none', // scroll down + up
                            // markers: true, // Uncomment to debug
                        },
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'sine.in',
                    }
                );
            });
        }, [selector]);
    };

    export default useGsapScrollAnimation