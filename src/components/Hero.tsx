import Image from "next/image";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen bg-black text-white flex items-center pt-16"
>

      <div className= "max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 w-full grid lg:grid-cols-2 gap-12 items-center">



        {/* LEFT — TEXT */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]">
              Tushnik Patra
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300">
            Computer Science Student | Data Analyst | Full Stack Developer | Cyber Security Enthusiast
          </p>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            I’m a passionate Computer Science undergraduate with hands-on experience
            in web development, data analytics, and cyber security. I enjoy building
            real-world solutions and learning cutting-edge technologies.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 font-medium hover:opacity-90 transition"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-700 hover:border-purple-400 transition"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-gray-400">
            <a href="https://github.com/tushnikpatra" target="_blank" className="hover:text-white">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/tushnik-patra-21195625a" target="_blank" className="hover:text-white">
              <Linkedin size={22} />
            </a>
            <a href="mailto:tushnikpatra674@gmail.com" className="hover:text-white">
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT — PROFILE IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Tushnik Patra"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
