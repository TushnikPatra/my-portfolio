export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 lg:px-20 h-16 flex items-center justify-between">

        {/* LEFT — NAME */}
        <h1 className="text-xl font-bold md:text-left text-center w-full md:w-auto">

          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]">
            Tushnik Patra
          </span>
        </h1>

        {/* RIGHT — NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">


          <li>
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>

          <li>
            <a
              href="/resume.pdf"
              className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
            >
              Resume
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}
