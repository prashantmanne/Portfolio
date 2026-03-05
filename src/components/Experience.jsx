import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaGoogle,
  FaInstagram,
  FaArrowLeft
} from "react-icons/fa";

function Experience() {
  return (

    
    <div className="bgIm min-h-screen flex items-center justify-center px-6 py-4">
         <Link to={'/'}>
          <button className="absolute top-6 left-6 text-2xl border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
                <FaArrowLeft />
         </button>
         </Link>

      <div className="max-w-2xl bg-transparent shadow-lg rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Experience
        </h1>

        <p className="text-lg text-white leading-relaxed">
          I am currently waiting for a better opportunity where I can apply my
          skills and contribute effectively. During this time, I am continuously
          developing myself by learning new technologies, improving my problem
          solving abilities, and working on personal projects to grow both
          technically and professionally.
        </p>

        <div className="mt-6">
          <p className="text-gray-500">
            Learning • Building • Improving 🚀
          </p>
        </div>

        <div>
              <img className="px-16" src="https://i.pinimg.com/originals/e6/10/9e/e6109e32a9ac1a8f2496d7fba78e9c84.gif"alt="skeleton" />
        </div>
      </div>
    </div>
  );
}

export default Experience;