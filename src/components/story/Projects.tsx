import { motion } from "framer-motion";

const projects = [
  {
    name: "Blind Life Companion",
    tagline: "A smart IoT walking stick for visually impaired people with real-time obstacle detection.",
    problem:
      "Visually impaired individuals face constant challenges navigating through obstacles. Manual assistance is not always available, limiting independence.",
    tech: ["Arduino IDE", "Ultrasonic Sensor", "Buzzer", "IoT"],
    outcome:
      "Successfully developed a hardware project that detects obstacles and sends real-time alerts. The device provides independence and safety for visually impaired users.",
  },
  {
    name: "Coastal Guard Web Application",
    tagline: "A real-time weather alert system for tourists with location-based notifications.",
    problem:
      "Tourists were unaware of dangerous weather conditions, leading to safety risks. Traditional alerts came too late or were not location-specific.",
    tech: ["React", "Vite", "JavaScript", "Node.js", "MongoDB"],
    outcome:
      "Built a real-time web application that sends instant weather alerts to tourists based on their location. Improved safety awareness significantly.",
  },
  {
    name: "Employee Management System",
    tagline: "A comprehensive inventory and warehouse management system for employee tracking and stock management.",
    problem:
      "Manual inventory tracking led to errors, stock discrepancies, and inefficient warehouse management. Real-time visibility was missing.",
    tech: ["React", "Vite", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB"],
    outcome:
      "Developed a full-stack system that streamlines employee management, inventory tracking, and warehouse operations. Reduced errors by 90% and improved efficiency.",
  },
];

export function Projects() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      {projects.map((p, i) => (
        <motion.article
          key={p.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group relative rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative p-7 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-bold text-yellow-400">0{i + 1}</span>
              <h3 className="text-lg font-bold text-foreground group-hover:text-yellow-400 transition-colors duration-200">
                {p.name}
              </h3>
            </div>
            
            <p className="text-sm text-gray-300 italic font-light">{p.tagline}</p>

            <div className="space-y-4 text-sm py-4 border-y border-yellow-400/20">
              <div>
                <p className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-2">The problem</p>
                <p className="text-gray-400 leading-relaxed">{p.problem}</p>
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-2">Outcome</p>
                <p className="text-gray-400 leading-relaxed">{p.outcome}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 hover:bg-yellow-400/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
