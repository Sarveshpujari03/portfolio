 import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="bg-background text-white md:flex py-16 px-6 justify-center w-full h-full">

      <h2 className="text-3xl font-bold text-orange font-poppins mb-10 text-center">Education</h2>
      <VerticalTimeline lineColor="#f97316" className=''>
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          date="2020 - 2024"
          iconStyle={{ background: '#f97316', color: '#fffff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold text-black">Bachelor of Engineering in IT</h3>
          <h4 className="text-orange text-sm">G. H. Raisoni College of Engineering & Management, Pune</h4>
          <p className="text-black">CGPA: 8.2</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: '#f97316', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold text-black">Higher Secondary Education (HSC)</h3>
          <h4 className="text-orange text-sm">Dayanand Science College, Latur</h4>
          <p className="text-black">Percentage: 61%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: '#f97316', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold text-black">Secondary School Certificate (SSC)</h3>
          <h4 className="text-orange text-sm">Keshavaraj Vidyalaya, Latur</h4>
          <p className="text-black">Percentage: 94%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Education;

