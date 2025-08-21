import React from 'react';
import Footer from '../components/Footer';

const Resume= ({ id }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-background z-40 mt-40"
      id={id}
    >
      <div className="w-full flex flex-col items-center gap-10 z-40 px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl text-white font-semibold text-center" data-animate>
          Resume
        </h1>

        <p className="text-gray-400 text-center max-w-2xl text-sm md:text-base" data-animate>
          Want to know more about my work? Feel free to download my resume below!
        </p>

        {/* ✅ Download Resume Section Only */}
        <div className="w-full flex justify-center" data-animate>
          <div className="hover:scale-105 transition-transform duration-500 bg-card w-full md:w-1/3 rounded-xl p-6 text-white font-semibold flex flex-col items-center text-center shadow-lg">
            <i className="ri-download-2-line text-5xl md:text-6xl mb-2 text-orange-400"></i>
            <h2 className="text-lg md:text-xl mb-1">Download Resume</h2>
            <a
              href={`${import.meta.env.BASE_URL}Sarvesh%20Pujari.pdf`} 
              download ="Sarvesh Pujari Resume.pdf"
              className="text-orange-300 text-sm md:text-base hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to download
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Resume;
