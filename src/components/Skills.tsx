const skillSections = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["C", "C++", "Python", "JavaScript", "Java"],
  },
  {
    title: "AI / ML Libraries",
    icon: "🧠",
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Pillow",
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    skills: [
      "Communication",
      "Teamwork",
      "Strategic Planning",
      "Adaptability",
      "Leadership",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-20 bg-black text-white">
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-purple-500">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 mt-3">
          A comprehensive toolkit for building intelligent applications
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {skillSections.map((section) => (
          <div
            key={section.title}
            className="border border-gray-800 rounded-2xl p-8 bg-gradient-to-br from-black to-gray-900 hover:border-purple-500 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{section.icon}</span>
              <h3 className="text-xl font-semibold">
                {section.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {section.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 text-sm rounded-full border border-gray-700 text-gray-300 hover:border-purple-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
