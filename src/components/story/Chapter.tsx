import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChapterProps {
  number: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  id?: string;
}

export function Chapter({ number, eyebrow, title, children, id }: ChapterProps) {
  return (
    <section id={id} className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-7xl md:text-8xl font-light text-yellow-400/40 leading-none">
              {number}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/60 to-transparent" />
          </div>
          <p className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-3">{eyebrow}</p>
          <h2 
            className="text-4xl md:text-6xl font-black mb-10 text-foreground" 
            style={{ 
              backgroundImage: "linear-gradient(135deg, #ffc550, #ffda75)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-6"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
