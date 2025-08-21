import React from "react";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "../components/PartialsBackground";

const Home = ({ id }) => {
  return (
    <div
      className="w-full h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-10 gap-10 md:gap-0"
      id={`${id}`}
    >
      <ParticlesBackground id={"tsparticles"} />
      {/* Left - Image */}

      {/* Right - Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 items-center text-center md:text-left z-40">
        <div className="flex flex-wrap justify-center md:justify-start text-3xl md:text-5xl font-semibold">
          <h1 className="text-orange">Hello,&nbsp;</h1>
          <h1 className="text-white">My name is Sarvesh!!</h1>
        </div>
        <div className="flex flex-wrap justify-center md:justify-center text-2xl md:text-4xl font-semibold">
          <TypeAnimation
            className="text-orange-light text-center"
            sequence={[
              "I am a Software Engineer.",
              2000,
              "I like clicking pictures.",
              2000,
              "I enjoy editing cinematic videos.",
              2000,
              "I love sketching my thoughts.",
              2000,
              "I like travelling to new places.",
              2000,
              "I get excited by what I don’t understand.",
              2000,
              "I believe in growing every single day.",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            cursor={true}
          />
        </div>

        <h1 className="text-white p-2">
          “I code like I click — focused, curious, and always framing the bigger picture.”
        </h1>

        {/* <button className='text-white bg-card p-3 rounded-xl font-semibold text-md mt-4 hover:bg-gray'>Download Resume</button> */}
      </div>
    </div>
  );
};

export default Home;
