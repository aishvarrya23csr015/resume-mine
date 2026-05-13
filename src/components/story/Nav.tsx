import { motion, useScroll } from "framer-motion";

export function Nav() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{ background: "linear-gradient(135deg, #ffc550, #ffd966)", scaleX: scrollYProgress }}
      />
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3 rounded-3xl backdrop-blur-xl bg-gray-900/60 border border-white/10 hover:border-yellow-400/30 transition-colors">
          <a 
            href="#top" 
            className="font-bold text-xl text-white hover:text-yellow-400 transition-colors flex items-center gap-1"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span>Aishvarrya P R.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-12 text-sm font-medium">
            <a href="#chapter-1" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Beginning</a>
            <a href="#chapter-4" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Projects</a>
            <a href="#chapter-5" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Skills</a>
            <a href="#chapter-6" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Certifications</a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Contact</a>
          </div>
          
          <motion.div 
            className="flex items-center gap-4"
          >
            <motion.a
              href="/Aishvarrya P R (23CSR015) Resume.pdf"
              download="Aishvarrya P R (23CSR015) Resume.pdf"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-gray-900 transition-all hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #ffc550, #ffd966)" }}
            >
              <span>Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1m-16 0H3m15.364 1.636l.707-.707m-16.97 0l-.707.707m16.97 16.97l-.707-.707m-16.97 0l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
              </svg>
            </motion.button>
          </motion.div>
        </nav>
      </header>
    </>
  );
}
