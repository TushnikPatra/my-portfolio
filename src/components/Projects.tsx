const projects = [
  {
    title: "Travel Planner Agent",
    featured: true,
    description:
      "An intelligent travel planning agent that generates personalized travel plans based on user preferences, budget, and constraints. Integrates maps, weather updates, and scheduling logic.",
    tech: ["AI Agent", "IBM Granite", "APIs", "Automation"],
    github: "#",
    demo: "#",
  },
  {
    title: "Deloitte Australia Cyber Job Simulation",
    featured: true,
    description:
      "Cyber security job simulation involving analysis of web activity logs to identify suspicious user behavior during a simulated breach scenario.",
    tech: ["Cyber Security", "Log Analysis", "Forensics"],
    github: "#",
    demo: "#",
  },
  {
    title: "Ice Cream Sales Data Analysis",
    featured: false,
    description:
      "Data analysis project examining sales trends, seasonal demand patterns, and customer preferences to support data-driven business decisions.",
    tech: ["Python", "Data Analysis", "Visualization"],
    github: "#",
    demo: "#",
  },
  {
    title: "Network Attack Simulation & IDS",
    featured: false,
    description:
      "Simulated network attacks and implemented firewall and intrusion detection systems using Wireshark and Snort. Documented vulnerabilities and mitigation strategies.",
    tech: ["Wireshark", "Snort", "Ethical Hacking"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-20 bg-black text-white">
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-purple-500">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-3">
          Innovative solutions combining AI, data, and cyber security
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-800 rounded-2xl p-8 bg-gradient-to-br from-black to-gray-900 hover:border-purple-500 transition"
          >
            
            {project.featured && (
              <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-purple-600/20 text-purple-400">
                Featured Project
              </span>
            )}

            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 border border-gray-700 rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm hover:border-purple-400 transition"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm hover:border-purple-400 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-16">
        <a
  href="https://github.com/"
  target="_blank"
  className="inline-flex items-center gap-3 px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-purple-400 transition"
>
  {/* GitHub Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 
      5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
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

  <span>View All Projects on GitHub</span>
</a>

      </div>

    </section>
  );
}
