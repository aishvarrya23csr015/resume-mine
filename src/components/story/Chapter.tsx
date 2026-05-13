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
    <section 
      id={id} 
      className="relative px-6 md:px-10 py-16 md:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(88, 28, 135, 0.3) 0%, rgba(139, 34, 139, 0.2) 25%, rgba(20, 100, 140, 0.3) 75%, rgba(0, 150, 150, 0.2) 100%)",
        backgroundColor: "#0f1419"
      }}
    >
      {/* Animated gradient orbs background */}
      <motion.div
        aria-hidden
        className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "linear-gradient(135deg, #8b228b, #551a8b)", opacity: 0.15 }}
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-20 -right-40 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "linear-gradient(135deg, #1a6b6b, #0d4d4d)", opacity: 0.12 }}
        animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-2">
            <span className="font-mono text-7xl md:text-8xl font-light text-purple-400/60 leading-none">
              {number}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-400/60 to-cyan-400/20" />
          </div>
          <p className="text-xs font-bold tracking-widest text-purple-300 uppercase mb-0 opacity-80">CHAPTER {number} — {eyebrow}</p>
          <h2 
            className="text-5xl md:text-7xl font-black mb-10 text-white leading-tight" 
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.02em"
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
