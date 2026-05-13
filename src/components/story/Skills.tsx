import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    category: "Database & Storage",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    category: "Languages Known",
    skills: ["C", "Java", "Python"],
  },
  {
    category: "Soft Skills",
    skills: ["Teamwork", "Time Management", "Leadership", "Responsibility"],
  },
];

export function Skills() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {skillGroups.map((g, i) => (
        <motion.div
          key={g.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          whileHover={{ boxShadow: "0 0 30px rgba(255, 197, 80, 0.2)" }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-900/30 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative p-8 space-y-5">
            <h3 
              className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300" 
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {g.category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {g.skills.map((s, idx) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="text-xs font-semibold px-3.5 py-2 rounded-lg bg-yellow-400/10 text-yellow-300 border border-yellow-400/30 hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
