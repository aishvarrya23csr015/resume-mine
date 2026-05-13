import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-32 pb-20">
      {/* Animated background orbs */}
      <motion.div
        aria-hidden
        className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "linear-gradient(135deg, #ffc550, #ffd966)", opacity: 0.15 }}
        animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-20 -right-40 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "#ff6b9d", opacity: 0.12 }}
        animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Profile Photo with Decorative Shapes */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            <div className="relative w-full max-w-lg h-auto aspect-square lg:aspect-auto lg:h-[600px]">
              {/* Top-left golden shape */}
              <motion.div
                className="absolute -top-12 -left-20 w-56 h-56 rounded-3xl blur-2xl"
                style={{ background: "linear-gradient(135deg, #ffc550, #ffd966)" }}
                animate={{ 
                  rotate: [0, 8, 0], 
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Bottom-right coral shape */}
              <motion.div
                className="absolute -bottom-16 -right-16 w-64 h-64 rounded-3xl blur-2xl"
                style={{ background: "#ff6b9d" }}
                animate={{ 
                  rotate: [0, -10, 0], 
                  y: [0, 20, 0],
                  scale: [1, 1.15, 1],
                  opacity: [0.35, 0.65, 0.35]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Main image frame with white border */}
              <motion.div 
                className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-card backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  boxShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 197, 80, 0.2)",
                    "0 0 40px rgba(255, 255, 255, 0.5), 0 0 80px rgba(255, 197, 80, 0.4)",
                    "0 0 60px rgba(255, 255, 255, 0.4), 0 0 100px rgba(255, 197, 80, 0.5)",
                    "0 0 40px rgba(255, 255, 255, 0.5), 0 0 80px rgba(255, 197, 80, 0.4)",
                    "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 197, 80, 0.2)"
                  ]
                }}
                transition={{ 
                  duration: 1, 
                  delay: 0.2, 
                  ease: "easeOut",
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(255, 255, 255, 0.6), 0 30px 60px rgba(255, 197, 80, 0.4)" }}
              >
              
                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  style={{ pointerEvents: "none" }}
                />
                <motion.img
                  src="/AISHVARRYA%20PIC.png"
                  alt="Aishvarrya P R"
                  className="w-full h-full object-cover"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:pl-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xs font-bold tracking-widest text-yellow-400 uppercase letter-spacing-wider"
            >
              A Developer's Story · Prologue
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.div className="flex flex-col gap-2">
                <motion.h1 
                  className="text-5xl md:text-6xl font-black leading-tight text-white" 
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Hi, I'm
                </motion.h1>
                <motion.h1 
                  className="text-6xl md:text-7xl font-black leading-tight"
                  style={{ 
                    backgroundImage: "linear-gradient(135deg, #ffc550, #ffda75)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "'Poppins', sans-serif"
                  }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  Aishvarrya P R
                </motion.h1>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-xl italic text-gray-200 font-light leading-relaxed"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "inline-block" }}
              >
                From curious beginner to building real-world solutions.
              </motion.span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="text-base text-gray-400 leading-relaxed max-w-lg font-light"
            >
              A Computer Science student from India who fell in love with the moment a stubborn
              piece of code finally runs. This is not a résumé — it's the story behind it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-6"
            >
              {[
                { text: "React", delay: 0.6 },
                { text: "TypeScript", delay: 0.65 },
                { text: "TailwindCSS", delay: 0.7 },
                { text: "Node.js", delay: 0.75 }
              ].map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: tech.delay }}
                  whileHover={{ 
                    scale: 1.12, 
                    boxShadow: "0 0 20px rgba(255, 197, 80, 0.6)",
                    backgroundColor: "rgba(255, 197, 80, 0.3)"
                  }}
                  className="px-4 py-2 rounded-full text-sm font-semibold border-2 border-yellow-400 text-foreground bg-yellow-400/15 cursor-pointer transition-all"
                >
                  {tech.text}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 pt-10"
            >
              <motion.a
                href="#chapter-1"
                className="px-8 py-3.5 rounded-full font-bold text-lg text-primary-foreground transition-all relative overflow-hidden group"
                style={{ background: "linear-gradient(135deg, #ffc550, #ffd966)" }}
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: "0 20px 40px rgba(255, 197, 80, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Begin the story</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                  animate={{ x: [-200, 400] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3.5 rounded-full font-bold text-lg border-2 border-gray-400 text-foreground transition-all relative group overflow-hidden"
                whileHover={{ 
                  scale: 1.08,
                  borderColor: "#ffc550",
                  color: "#ffc550",
                  boxShadow: "0 0 20px rgba(255, 197, 80, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Skip to contact</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-xs font-mono text-gray-500 tracking-widest"
          >
            SCROLL ↓
          </motion.div>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center"
            animate={{ borderColor: ["rgba(107, 114, 128, 0.5)", "rgba(255, 197, 80, 0.8)", "rgba(107, 114, 128, 0.5)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-yellow-400 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
