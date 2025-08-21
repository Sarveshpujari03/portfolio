import React, { useEffect, useRef, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // run once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="w-full h-full py-16 px-6 flex justify-center bg-background text-white"
    >
      <div
        className={`w-full max-w-5xl transform transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl font-bold text-orange font-poppins mb-10 text-center">
          Education
        </h2>

        <VerticalTimeline lineColor="#f97316">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - 2026"
            iconStyle={{ background: '#f97316', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-black">
              Bachelor of Engineering in IT
            </h3>
            <h4 className="text-orange text-sm">
              G. H. Raisoni College of Engineering & Management, Pune
            </h4>
            <p className="text-black">CGPA: 8.84</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2022"
            iconStyle={{ background: '#f97316', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-black">
              Pre-University Course (PUC) / Higher Secondary (HSC)
            </h3>
            <h4 className="text-orange text-sm">KLE Independent PU College, Belgavi</h4>
            <p className="text-black">Percentage: 86%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2020"
            iconStyle={{ background: '#f97316', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-black">
              Secondary School Certificate (SSC)
            </h3>
            <h4 className="text-orange text-sm">Mary Matha School, Chiplun</h4>
            <p className="text-black">Percentage: 86.6%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
