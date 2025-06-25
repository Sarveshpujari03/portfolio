import React from 'react';
import Footer from '../components/Footer';

const ContactMe = ({ id }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center bg-background z-40 "
      id={id}
    >
      <div className="w-full  flex flex-col items-center gap-10 z-40">
        <h1 className="text-4xl md:text-6xl text-white font-semibold text-center" data-animate>
          Contact Me
        </h1>

        <p className="text-gray-400 text-center max-w-2xl text-sm md:text-base" data-animate>
          Whether you have an idea for a project, want to work together, or just want to say hi —
          I’ll try my best to get back to you!
        </p>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row w-full gap-6 p-6 md:gap-8 justify-center items-center" data-animate>
          {/* Phone */}
          <div className="hover:scale-105 transition-transform duration-500 bg-card w-full md:w-1/3 rounded-xl p-6 text-white font-semibold flex flex-col items-center text-center shadow-lg">
            <i className="ri-phone-fill text-5xl md:text-6xl mb-2 text-orange-400"></i>
            <h2 className="text-lg md:text-xl mb-1">Phone No.</h2>
            <a className="text-orange-300 text-sm md:text-base hover:underline" href="tel:+918180050035">
              +91 81800 50035
            </a>
          </div>

          {/* Email */}
          <div className="hover:scale-105 transition-transform duration-500 bg-card w-full md:w-1/3 rounded-xl p-6 text-white font-semibold flex flex-col items-center text-center shadow-lg">
            <i className="ri-mail-line text-5xl md:text-6xl mb-2 text-orange-400"></i>
            <h2 className="text-lg md:text-xl mb-1">Email</h2>
            <a
              className="text-orange-300 text-sm md:text-base hover:underline"
              href="mailto:sanketpanchal775@gmail.com"
            >
              sanketpanchal775@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="hover:scale-105 transition-transform duration-500 bg-card w-full md:w-1/3 rounded-xl p-6 text-white font-semibold flex flex-col items-center text-center shadow-lg">
            <i className="ri-linkedin-box-fill text-5xl md:text-6xl mb-2 text-orange-400"></i>
            <h2 className="text-lg md:text-xl mb-1">LinkedIn</h2>
            <a
              className="text-orange-300 text-sm md:text-base hover:underline"
              href="https://www.linkedin.com/in/sanket-panchal-785949261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
        </div>

        {/* Optional: Add more contact methods or embed a form in future */}

        <Footer />
      </div>
    </div>
  );
};

export default ContactMe;
