import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Hero } from "@/components/story/Hero";
import { Chapter } from "@/components/story/Chapter";
import { Projects } from "@/components/story/Projects";
import { Skills } from "@/components/story/Skills";
import { Contact } from "@/components/story/Contact";
import { Nav } from "@/components/story/Nav";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [selectedCert, setSelectedCert] = useState(null);
  return (
    <main id="top" className="relative">
      <Nav />
      <Hero />

      <Chapter
        id="chapter-1"
        number="01"
        eyebrow="Chapter One"
        title="The Beginning"
      >
        <p>
          I still remember the first time I wrote <code className="font-mono text-primary">printf("Hello, World!");</code> and
          actually saw the output blink back at me on a black terminal. It was a small, almost
          silly moment — but something inside me went, <em>"wait… I just made the computer talk to me."</em>
        </p>
        <p>
          I wasn't a kid with a fancy laptop or a coding class at school. I was just a curious
          student who had heard that "people build apps with code" and wondered how. I started
          with C in college, half-confused, half-fascinated, scribbling syntax in a notebook
          before typing it out.
        </p>
        <p>
          That tiny "Hello, World" was the first chapter of something I didn't fully understand
          yet — but I knew I wanted to keep turning the page.
        </p>
      </Chapter>

      <Chapter
        id="chapter-2"
        number="02"
        eyebrow="Chapter Two"
        title="The Struggle"
      >
        <p>
          Then came DBMS. And honestly? I struggled. A lot.
        </p>
        <p>
          The word <em>normalization</em> sounded like a math punishment. 1NF, 2NF, 3NF — they
          all blurred together. JOINs were the worst. I'd write an INNER JOIN expecting a clean
          result and get back either nothing or 4,000 duplicated rows. I remember staring at my
          screen at 2 AM thinking, <em>"maybe I'm just not built for this."</em>
        </p>
        <p>
          Web development had its own special pain too. Hours lost to a missing semicolon. CSS
          that worked on my laptop but exploded on someone else's. Errors that said
          "undefined is not a function" and gave me zero hints about <em>which</em> undefined
          they meant.
        </p>
        <p>
          There were nights I closed my laptop angry. There were assignments I almost gave up
          on. But every time I quit, something pulled me back the next morning — the same
          stubborn curiosity that started it all.
        </p>
      </Chapter>

      <Chapter
        id="chapter-3"
        number="03"
        eyebrow="Chapter Three"
        title="Educational Journey"
      >
        <div className="relative py-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400/50 via-yellow-400/30 to-yellow-400/10" />
          
          <div className="space-y-16">
            {[
              {
                year: "10th Year",
                period: "2020 - 2021",
                school: "St.Joseph's Matriculation Higher Secondary School",
                detail: "Foundation in Science and Mathematics",
                score: "86.83%",
                side: "left"
              },
              {
                year: "12th Year",
                period: "2022 - 2023",
                school: "St.Joseph's Matriculation Higher Secondary School",
                detail: "Advanced Specialization in STEM",
                score: "86.83%",
                side: "right"
              },
              {
                year: "Undergraduate",
                period: "2023 - 2027",
                school: "Kongu Engineering College",
                detail: "Bachelor's in Computer Science",
                score: "7.92 CGPA",
                side: "left"
              }
            ].map((edu, idx) => (
              <motion.div 
                key={idx}
                className={`flex items-center ${edu.side === "left" ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: edu.side === "left" ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`w-5/12 ${edu.side === "left" ? "text-right pr-8" : "text-left pl-8"}`}
                  whileHover={{ x: edu.side === "left" ? 20 : -20 }}
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-xl">
                    <motion.div 
                      className="flex items-center gap-3 mb-2"
                      style={{ justifyContent: edu.side === "left" ? "flex-end" : "flex-start" }}
                    >
                      <motion.span 
                        className="text-2xl font-bold text-yellow-400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                        whileHover={{ scale: 1.2, textShadow: "0 0 15px rgba(255, 197, 80, 0.8)" }}
                      >
                        {edu.score}
                      </motion.span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-white mb-1" 
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {edu.year}
                    </motion.h3>
                    
                    <p className="text-xs text-gray-400 mb-3">{edu.period}</p>
                    
                    <motion.p 
                      className="text-sm text-yellow-400/90 font-semibold mb-2"
                      animate={{ color: ["#fcd34d", "#ffc550", "#fcd34d"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {edu.school}
                    </motion.p>
                    
                    <p className="text-sm text-gray-300">{edu.detail}</p>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div 
                  className="w-2/12 flex justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.1, type: "spring" }}
                >
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 border-4 border-gray-900 shadow-lg shadow-yellow-400/50"
                    animate={{ 
                      boxShadow: [
                        "0 0 10px rgba(255, 197, 80, 0.4)",
                        "0 0 25px rgba(255, 197, 80, 0.8)",
                        "0 0 10px rgba(255, 197, 80, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Spacer */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </Chapter>

      <Chapter
        id="chapter-4"
        number="04"
        eyebrow="Chapter Four"
        title="Projects I'm Proud Of"
      >
        <p>
          These are the projects where the theory finally turned into something real —
          something I could show a friend, ship to my classmates, or use myself.
        </p>
        <Projects />
      </Chapter>

      <Chapter
        id="chapter-5"
        number="05"
        eyebrow="Chapter Five"
        title="What I Bring to the Table"
      >
        <p>
          Skills aren't just a list — they're the result of late nights, broken builds, and
          small wins. Here's what I'm comfortable with today, and what I'm still sharpening.
        </p>
        <Skills />
      </Chapter>

      <Chapter
        id="chapter-6"
        number="06"
        eyebrow="Chapter Six"
        title="Global Certifications"
      >
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {[
            {
              certification: "MongoDB Associate Developer",
              issuer: "MongoDB",
              status: "Certified",
              color: "from-green-500 to-emerald-600",
              image: "/AISHVARRYV MONGODB.png"
            },
            {
              certification: "Java SE 17 Developer",
              issuer: "Oracle",
              status: "Certified",
              color: "from-blue-500 to-blue-600",
              image: "/JAVA SE17 AISHVARRYA.png"
            }
          ].map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative rounded-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-gray-900/60 to-gray-900/30 cursor-pointer"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 197, 80, 0.15)" }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                  >
                    <h3 
                      className="text-xl font-bold text-white mb-2" 
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {cert.certification}
                    </h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </motion.div>
                  <motion.span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-400/40"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {cert.status}
                  </motion.span>
                </div>
                
                <motion.div
                  className="flex items-center gap-2 pt-4"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-lg"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Chapter>

      <Chapter
        id="chapter-7"
        number="07"
        eyebrow="Chapter Seven"
        title="What's Next"
      >
        <p>
          I want to grow into a strong full-stack developer — someone who can take an idea from
          a rough sketch all the way to a deployed product that real people use.
        </p>
        <p>
          More specifically, I want to deepen my backend and database skills, contribute to an
          open-source project (even a tiny one), and build at least one application that solves
          a genuine problem in my college or community — not just another to-do app.
        </p>
        <p>
          And in the long run? I want to keep being the kind of developer who's never quite done
          learning. The story isn't finished. It's barely past the introduction.
        </p>
      </Chapter>

      <Contact />

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-screen overflow-auto rounded-2xl bg-gray-900 border border-yellow-400/30"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-60 w-10 h-10 rounded-full bg-yellow-400/20 hover:bg-yellow-400/40 text-white text-2xl flex items-center justify-center transition-all"
            >
              ✕
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.certification}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
