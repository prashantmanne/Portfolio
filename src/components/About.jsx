import React from "react";
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white overflow-hidden font-light py-10">
      
      {/* Grain overlay */}
      <div className="grain absolute inset-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-20">
           
        <div className="w-full">
            <Link to={"/"}>
            <span className="w-[30px] h-[30px] bg-white text-black flex items-center justify-center rounded-3xl my-10">
                <GoArrowLeft/>
            </span>
            </Link>
         
          {/* ABOUT tag */}
          <div className="mb-10">
            <span className="bg-[#00d1c7] text-black px-6 py-2 text-4xl md:text-6xl italic font-bold tracking-wide">
              ABOUT
            </span>
          </div>
        <div className="w-full h-[900px] ">
            <img src="public/ppprofile.jpeg" className="w-full h-[900px]" alt="profile pic" />
        </div>
          

          {/* Paragraph */}
{/* Paragraph */}
<p className="text-gray-300 leading-8 text-lg md:text-xl">
  Hey there! I’m <span className="text-[#00d1c7]">Prashant Manne</span>.
</p>

<p className="text-gray-300 mt-6 leading-8 text-lg md:text-xl">
  I’m a passionate <span className="text-red-500">Full Stack Java Developer</span> who loves building scalable,
  high-performance web applications from the ground up. With a strong foundation
  in Java, Spring Boot, REST APIs, and modern frontend technologies, I enjoy
  turning complex problems into clean, efficient, and user-friendly solutions.



</p>

<p className="text-gray-300 mt-6 leading-8 text-lg md:text-xl">
  Currently, I’m focused on strengthening my expertise in system design, backend
  architecture, and cloud-ready applications, while continuously exploring new
  tools and best practices in the ever-evolving tech world.
</p>

<p className="text-gray-300 mt-6 leading-8 text-lg md:text-xl">
  I have a keen interest in backend development, databases, API design, and
  creating seamless end-to-end user experiences. Solving challenging coding
  problems and building production-ready projects is what keeps me motivated
  every day.
</p>

<p className="text-gray-300 mt-6 leading-8 text-lg md:text-xl">
  When I’m not coding, you’ll find me learning new technologies, improving my
  problem-solving skills, or exploring ideas that push me to grow as a developer.
</p>

<p className="text-gray-300 mt-6 leading-8 text-lg md:text-xl">
  I’m always excited to connect, collaborate, and build impactful software.
  Let’s create something amazing together! 🚀
</p>
          {/* Resume */}
          <div className="mt-10">
            <p className="text-gray-300 text-lg">
              ↓ Resume
            </p>
            <p className="text-[#00d1c7] text-sm mt-1">
              ( I Haven't Updated It Yet 😅 )
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 mt-8 text-2xl">
            <FaLinkedin className="hover:text-[#00d1c7] cursor-pointer transition" />
            <FaGithub className="hover:text-[#00d1c7] cursor-pointer transition" />
            <FaInstagram className="hover:text-[#00d1c7] cursor-pointer transition" />
          </div>

        </div>
      </div>
    </div>
  );
}