import { Hero } from './components/story/Hero'
import { Nav } from './components/story/Nav'
import { Skills } from './components/story/Skills'
import { Projects } from './components/story/Projects'
import { Contact } from './components/story/Contact'
import { Chapter } from './components/story/Chapter'
import { CertificateModal } from './components/story/CertificateModal'
import { EducationJourneyMap } from './components/story/EducationJourneyMap'
import { useState } from 'react'

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      
      <main>
        <section id="hero" className="min-h-screen pt-20">
          <Hero />
        </section>

        <section id="chapter-1">
          <Chapter 
            number="1" 
            eyebrow="My Journey" 
            title="About Me"
            id="chapter-1"
          >
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm Aishvarrya P R, a passionate developer and technology enthusiast from Kerala. 
                With a strong foundation in both frontend and backend development, I specialize in creating 
                innovative solutions that solve real-world problems. I'm currently pursuing my Bachelor's degree 
                in Computer Science at Kongu Engineering College while actively building and shipping projects.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="border border-yellow-400/20 rounded-lg p-4 bg-yellow-400/5 hover:bg-yellow-400/10 transition-colors">
                  <h4 className="font-semibold text-yellow-400 mb-2">What I Do</h4>
                  <p className="text-sm text-foreground/70">
                    I build full-stack web applications with a focus on user experience and performance. 
                    From responsive frontends to scalable backends, I enjoy the entire development lifecycle.
                  </p>
                </div>
                <div className="border border-yellow-400/20 rounded-lg p-4 bg-yellow-400/5 hover:bg-yellow-400/10 transition-colors">
                  <h4 className="font-semibold text-yellow-400 mb-2">My Approach</h4>
                  <p className="text-sm text-foreground/70">
                    I combine creative problem-solving with technical expertise to deliver solutions that matter. 
                    Every project is an opportunity to learn and innovate.
                  </p>
                </div>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in tech started with curiosity about how things work. Today, I bring together clean code, 
                modern technologies, and a user-centric mindset to create applications that make a real difference. 
                I'm passionate about continuous learning, exploring emerging technologies, and contributing to open-source projects.
              </p>

              <div className="border-l-4 border-yellow-400 pl-4 py-2">
                <p className="text-foreground/80 italic">
                  "I believe technology should be accessible, intuitive, and built with purpose. 
                  Every line of code is an opportunity to create value."
                </p>
              </div>

              <p className="text-foreground/70">
                When I'm not coding, you'll find me exploring new frameworks and libraries, reading about tech trends, 
                or collaborating with other developers. I'm always excited to take on new challenges and grow as a developer.
              </p>
            </div>
          </Chapter>
        </section>

        <section id="chapter-2">
          <Chapter 
            number="2" 
            eyebrow="Education" 
            title="Educational Journey"
            id="chapter-2"
          >
            <EducationJourneyMap />
          </Chapter>
        </section>

        <section id="chapter-3">
          <Chapter 
            number="3" 
            eyebrow="Portfolio" 
            title="Projects"
            id="chapter-3"
          >
            <div className="mb-8">
              <Projects />
            </div>
          </Chapter>
        </section>

        <section id="chapter-4">
          <Chapter 
            number="4" 
            eyebrow="Expertise" 
            title="Skills"
            id="chapter-4"
          >
            <div className="mb-8">
              <Skills />
            </div>
          </Chapter>
        </section>

        <section id="chapter-5">
          <Chapter 
            number="5" 
            eyebrow="Professional Recognition" 
            title="Global Certifications"
            id="chapter-5"
          >
            <div className="space-y-6">
              <button
                onClick={() => setSelectedCertificate(0)}
                className="w-full border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 transition-colors cursor-pointer hover:bg-cyan-400/5 text-left"
              >
                <h3 className="text-2xl font-bold text-white mb-2">MongoDB Associate Developer</h3>
                <p className="text-cyan-400 font-semibold">MongoDB University</p>
                <p className="text-foreground/70 mt-2">Certification demonstrating proficiency in MongoDB database development and design patterns</p>
              </button>

              <button
                onClick={() => setSelectedCertificate(1)}
                className="w-full border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 transition-colors cursor-pointer hover:bg-cyan-400/5 text-left"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Java SE 17 Developer</h3>
                <p className="text-cyan-400 font-semibold">Oracle</p>
                <p className="text-foreground/70 mt-2">Certification validating expertise in Java 17 programming and application development</p>
              </button>
            </div>
          </Chapter>
        </section>

        <CertificateModal
          isOpen={selectedCertificate !== null}
          onOpenChange={(open) => !open && setSelectedCertificate(null)}
          certificateIndex={selectedCertificate ?? 0}
        />

        <section id="contact" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  )
}
