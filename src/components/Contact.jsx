import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaGoogle,
  FaInstagram,
  FaArrowLeft
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative min-h-screen bgIm flex items-center justify-center text-white">

      {/* Grain Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Back Button */}
      <Link to="/">
        <button className="absolute top-6 left-6 text-2xl border border-white rounded-full p-2 hover:bg-white hover:text-black transition">
          <FaArrowLeft />
        </button>
      </Link>

      {/* Social Icons */}
      <div className="flex gap-12 text-4xl z-10">

        <a
          href="https://github.com/prashantmanne"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/prashantmanne"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 text-orange-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:prashantmanne16@gmail.com"
          className="hover:scale-125 text-cyan-400 transition"
        >
          <FaGoogle />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 p-2 rounded-lg transition"
        >
          <FaInstagram />
        </a>

      </div>

    </div>
  );
}