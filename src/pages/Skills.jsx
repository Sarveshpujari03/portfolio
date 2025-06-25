import React from "react";
import useGsapScrollAnimation from "../Hooks/animationHook";

const Skills = ({ id }) => {
  useGsapScrollAnimation();

  return (
    <section id={id} className="w-full overflow-x-hidden bg-gray-950 text-white z-40">
      <div className="w-full mx-auto flex flex-col bg-gray-950 rounded-xl z-40">
        <div className="w-full mx-auto flex flex-col bg-gray-950 rounded-xl px-4 md:px-6 py-10 z-40">
          
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400 mb-10 z-40" data-animate>
            Skills
          </h1>

          {/* Frontend and Backend */}
          <div className="flex flex-col md:flex-row gap-y-12 md:gap-x-16 mb-12 bg-gray-950">
            
            {/* Frontend */}
            <div data-animate className="w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6">Frontend</h2>
              <div className="flex flex-wrap gap-4 items-center">
                <img src="/icons/003-html-5.png" alt="HTML" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <img src="/icons/003-css-3.png" alt="CSS" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <img src="/icons/009-js.png" alt="JavaScript" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <img src="/icons/002-react.png" alt="React" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </div>
            </div>

            {/* Backend */}
            <div data-animate className="w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6">Backend</h2>
              <div className="flex flex-wrap gap-4 items-center">
                <img src="/icons/004-nodejs.png" alt="Node.js" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <img src="/icons/express-js.png" alt="Express.js" className="h-12 md:h-14 bg-white rounded-full p-1 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <img src="/icons/mongodb.png" alt="MongoDB" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" />
                <img src="/icons/002-global-server.png" alt="API/Server" className="max-w-full h-12 md:h-14 hover:scale-110 transition-transform duration-300 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="mb-12" data-animate>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6">Tools</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <img src="/icons/postman.png" alt="Postman" className="max-w-full h-12 md:h-14 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer" />
              <img src="/icons/vscode.jpg" alt="VS Code" className="max-w-full h-12 md:h-14 bg-white p-1 rounded hover:scale-110 transition-transform duration-300 cursor-pointer" />
              <img src="/icons/github.png" alt="GitHub" className="max-w-full h-12 md:h-14 bg-white p-1 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </div>
          </div>

          {/* DSA Section */}
          <div id="dsa" data-animate>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-8">
              Problem Solving & DSA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-shadow">
                <h3 className="text-xl font-semibold">Recursion & Backtracking</h3>
                <p className="text-sm mt-2 text-gray-400">
                  Solved problems like N-Queens, Sudoku Solver, etc.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-shadow">
                <h3 className="text-xl font-semibold">Greedy Algorithms (C++)</h3>
                <p className="text-sm mt-2 text-gray-400">
                  Implemented N-meetings, Minimum-Maximum Sum, etc.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-shadow">
                <h3 className="text-xl font-semibold">Trees & Binary Trees (C++)</h3>
                <p className="text-sm mt-2 text-gray-400">
                  Recursive logic for traversal, height, diameter, mirror, etc.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
