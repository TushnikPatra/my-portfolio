const certificates = [
  {
    title: "Career Skills in Data Analytics",
    issuer: "LinkedIn Learning",
    year: "2025",
    icon: "📊",
  },
  {
    title: "Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    year: "2025",
    icon: "🤖",
  },
  {
    title: "Data Analytics & Job Simulation",
    issuer: "Deloitte Australia",
    year: "2025",
    icon: "📈",
  },
  {
    title: "Robotics Science & Cyber Physical Systems",
    issuer: "Workshop Participation",
    year: "2024",
    icon: "🦾",
  },
  {
    title: "Innovative Approach to Machine Learning",
    issuer: "Workshop Participation",
    year: "2023",
    icon: "🧠",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-28 px-20 bg-black text-white"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-purple-500">
          Certifications & Achievements
        </h2>
        <p className="text-gray-400 mt-3">
          Continuous learning through industry-recognized programs
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="relative border border-gray-800 rounded-2xl p-8 bg-gradient-to-br from-black to-gray-900 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-3xl mb-4">
              {cert.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {cert.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {cert.issuer}
            </p>

            <p className="text-gray-500 text-sm mt-1">
              {cert.year}
            </p>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
