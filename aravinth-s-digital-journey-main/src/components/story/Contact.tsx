import { motion } from "framer-motion";

const links = [
  { 
    label: "Email", 
    value: "praishvarrya@gmail.com", 
    href: "mailto:praishvarrya@gmail.com",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  { 
    label: "GitHub", 
    value: "https://github.com/aishvarrya23csr015", 
    href: "https://github.com/aishvarrya23csr015",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    )
  },
  { 
    label: "LinkedIn", 
    value: "https://www.linkedin.com/in/aishvarrya-p-r-b938aa375/", 
    href: "https://www.linkedin.com/in/aishvarrya-p-r-b938aa375/",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    )
  },
  { 
    label: "LeetCode", 
    value: "https://leetcode.com/u/Aishvarrya_pr/", 
    href: "https://leetcode.com/u/Aishvarrya_pr/",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.102c-4.666 0-8.409 3.295-8.409 7.362 0 4.067 3.743 7.362 8.409 7.362s8.409-3.295 8.409-7.362c0-4.067-3.743-7.362-8.409-7.362zM16.102 20.005c-2.211 0-4.006-1.789-4.006-3.996s1.895-3.996 4.009-3.996c2.108 0 3.909 1.789 4.009 3.996 0 2.207-1.894 3.996-4.009 3.996z"/><path d="M8.863 0c-1.425 0-2.426 1.2-2.426 2.611v11.13c0 .572-.572.868-1.144.577l-5.29-3.04c-.572-.358-1.431-.572-2.146 0-.429.429-.429 1.144 0 1.573l5.29 3.04c1.717 1.003 3.574 0 3.574-2.005V2.612c0-1.411 1.001-2.611 2.426-2.611z"/>
      </svg>
    )
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-6"
        >
          Epilogue · The story continues
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-8 leading-tight"
          style={{ 
            backgroundImage: "linear-gradient(135deg, #ffc550, #ffda75)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          Let's build something meaningful together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-300 mb-14 max-w-xl mx-auto"
        >
          I'm always open to internships, collaborations, or just a friendly chat about
          databases, side projects, or that one bug that wouldn't go away.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 bg-gray-900/40 hover:bg-gray-900/60 hover:-translate-y-1 transition-all group backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-yellow-400 mb-4 flex justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {l.icon}
              </motion.div>
              <p className="text-xs font-bold tracking-widest text-yellow-400 uppercase mb-2">{l.label}</p>
              <p className="text-sm font-mono text-foreground/90 group-hover:text-yellow-400 transition-colors break-all">
                {l.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 mb-8"
        >
          Or connect with me on social
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-8"
        >
          {links.map((l, i) => (
            <motion.a
              key={`icon-${l.label}`}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-yellow-400/70 hover:text-yellow-400 transition-colors w-8 h-8"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {l.icon}
            </motion.a>
          ))}
        </motion.div>

        <p className="mt-20 text-xs font-mono text-gray-500/60">
          © {new Date().getFullYear()} Aishvarrya P R · Crafted with curiosity, caffeine, and a few stubborn bugs.
        </p>
      </div>
    </section>
  );
}
