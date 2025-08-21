import React from "react";
import { BsHeartFill, BsArrowUp } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full bg-gray-950 px-6 py-10 mt-56 text-white"
    >
      <div className="flex flex-col md:flex-row justify-center items-start gap-12">
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="font-semibold text-xl">About</h1>
          <p className="text-base">
            I would like to interact and collaborate with teams.
          </p>

          <p className="mt-6 font-semibold text-lg">Social Links</p>
          <div className="flex gap-5 text-2xl mt-2">
            <a
              href="https://github.com/Sarveshpujari03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-fill hover:text-orange cursor-pointer"></i>
            </a>
            <a
              href="https://www.instagram.com/_sarveshpujari_03/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-line hover:text-orange cursor-pointer"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sarvesh-pujari-050355276/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-box-fill hover:text-orange cursor-pointer"></i>
            </a>
          </div>
        </div>

        <div className="hidden md:block h-60 border-l border-white/40 mr-20 -ml-48"></div>

        <div className="md:w-1/2 flex flex-col gap-4 text-base">
          <h1 className="font-semibold text-3xl">Contact Me</h1>
          <a
            href="mailto:sarveshpujari07@gmail.com"
            className="hover:text-orange"
          >
            sarveshpujari07@gmail.com
          </a>

          <Link
            to="home"
            smooth={true}
            duration={500}
            className="mt-4 flex items-center gap-2 hover:text-orange cursor-pointer w-fit"
          >
            <BsArrowUp />
            <span>Back to Top</span>
          </Link>

          <div className="mt-6 text-sm text-gray-400">
            <p className="text-xs mt-1">
              &copy; {new Date().getFullYear()} Sarvesh Pujari. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
