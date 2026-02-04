export default function Footer() {
  return (
    <footer className="bg-black text-white px-20 pt-16 pb-8 border-t border-gray-800">

      {/* Top Footer */}
      <div className="grid md:grid-cols-3 gap-12 mb-12">

        {/* Left — Name & Role */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400">
            Tushnik Patra
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Computer Science Student | Web & Cyber Security Enthusiast
          </p>
        </div>

        {/* Center — Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#experience" className="hover:text-white">Experience</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right — Social Icons */}
        <div>
          <h4 className="text-sm font-semibold mb-4">
            Connect
          </h4>

          <div className="flex gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/tushnikpatra"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-full hover:border-purple-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                -.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729
                1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998
                .108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93
                0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
                0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405
                1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
                3.285-1.23.645 1.653.24 2.873.12 3.176
                .765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92
                .435.375.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286
                0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12
                24 5.37 18.63 0 12 0z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tushnik-patra-21195625a"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-full hover:border-purple-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037
                -1.853 0-2.136 1.445-2.136 2.939v5.667H9.004V9h3.112v1.561h.045
                c.434-.82 1.494-1.684 3.073-1.684 3.286 0 3.89 2.164 3.89 4.977
                v6.598zM5.337 7.433c-1.003 0-1.816-.813-1.816-1.816
                0-1.003.813-1.816 1.816-1.816 1.003 0 1.816.813 1.816 1.816
                0 1.003-.813 1.816-1.816 1.816zM6.956 20.452H3.719V9h3.237v11.452z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:tushnikpatra674@gmail.com"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-full hover:border-purple-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 13.065L.25 6.5V18c0 .825.675 1.5 1.5 1.5h20.5c.825 0 1.5-.675 1.5-1.5V6.5L12 13.065zM12 11L23.5 4.5H.5L12 11z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © 2025 Tushnik Patra. Made with ❤️ and React.
      </div>

    </footer>
  );
}
