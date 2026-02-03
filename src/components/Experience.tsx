const experiences = [
  {
    title: "Project Trainee",
    org: "Ragilly Technologies",
    location: "India",
    period: "2025 – Present",
    current: true,
    points: [
      "Assisted in understanding system requirements and project workflows",
      "Performed basic debugging, functional testing, and documentation",
      "Collaborated with technical teams during structured probationary training",
      "Contributed to cybersecurity-related operations",
    ],
    tags: ["Cyber Security", "Testing", "Documentation"],
    side: "left",
  },
  {
    title: "Cyber Security & Ethical Hacking Trainee",
    org: "Euphoria Genx",
    location: "India",
    period: "Jun 2025 – Oct 2025",
    current: false,
    points: [
      "Worked on wireless network security and Wi-Fi hacking",
      "Performed web application security testing using Burp Suite & OWASP ZAP",
      "Hands-on experience with Kali Linux tools and penetration testing",
    ],
    tags: ["Ethical Hacking", "Wireshark", "Snort", "Kali Linux"],
    side: "right",
  },
];

export default function Experience() {
  return (
    <section id="experience" 
    className="py-28 px-6 lg:px-20 bg-black text-white relative">
      
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-24">
        <h2 className="text-4xl font-bold text-purple-500">
          Work & Training Experience
        </h2>
        <p className="text-gray-400 mt-3">
          Applying technical knowledge in real-world and professional environments
        </p>
      </div>

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-[280px] bottom-20 w-px bg-gradient-to-b from-purple-500/40 to-blue-500/40"></div>

      {/* Timeline Items */}
      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex ${
              exp.side === "left" ? "justify-start" : "justify-end"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 bg-purple-500 rounded-full"></div>

            {/* Card */}
            <div className="w-[46%] border border-gray-800 rounded-2xl p-6 bg-gradient-to-br from-black to-gray-900">
              
              {exp.current && (
                <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-blue-600/20 text-blue-400">
                  Current Position
                </span>
              )}

              <h3 className="text-lg font-semibold">
                {exp.title}
              </h3>
              <p className="text-blue-400 text-sm">
                {exp.org}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                {exp.location} · {exp.period}
              </p>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-gray-700 rounded-full text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
