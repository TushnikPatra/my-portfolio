export default function About() {
  return (
    <section id="about" className="py-28 px-20 bg-black text-white">
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-purple-500">About Me</h2>
        <p className="text-gray-400 mt-3">
          Computer Science student with a passion for technology and problem solving
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT — SUMMARY */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Summary</h3>

          <p className="text-gray-400 leading-relaxed mb-4">
            Driven and passionate B.Tech Computer Science 3rd-year student with
            strong foundations in web technologies, front-end development,
            data-driven systems, and cyber security.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I enjoy building real-world applications, solving complex problems,
            and continuously learning new technologies to improve my technical
            skill set.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Currently seeking opportunities to apply my technical knowledge and
            creative problem-solving abilities in a fast-paced, forward-thinking
            organization.
          </p>
        </div>

        {/* RIGHT — EDUCATION & TRAINING */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Education & Training
          </h3>

          <div className="space-y-6">

            {/* Education Card */}
            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-black to-gray-900">
              <h4 className="text-lg font-semibold mb-1">
                Bachelor of Technology — Computer Science & Engineering
              </h4>
              <p className="text-blue-400 text-sm">
                Brainware University
              </p>
              <p className="text-gray-500 text-sm mt-1">
                2022 – 2026
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Specialization: Data Science
              </p>
            </div>

            {/* Training Card */}
            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-black to-gray-900">
              <h4 className="text-lg font-semibold mb-1">
                Cyber Security & Ethical Hacking
              </h4>
              <p className="text-purple-400 text-sm">
                Euphoria Genx
              </p>
              <p className="text-gray-500 text-sm mt-1">
                June 2025 – October 2025
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Network Security, Web Application Security, Kali Linux, IDS
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
