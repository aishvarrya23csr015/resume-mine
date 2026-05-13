import { Hero } from './components/story/Hero'
import { Nav } from './components/story/Nav'
import { Skills } from './components/story/Skills'
import { Projects } from './components/story/Projects'
import { Contact } from './components/story/Contact'
import { Chapter } from './components/story/Chapter'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      
      <main>
        <section id="hero" className="min-h-screen pt-20">
          <Hero />
        </section>

        <section id="chapter-1" className="min-h-screen py-20">
          <Chapter 
            number="1" 
            eyebrow="My Journey" 
            title="About Me"
            id="chapter-1"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I'm Aishvarrya P R, a passionate developer and technology enthusiast from Kerala. 
              With a strong foundation in both frontend and backend development, I specialize in creating 
              innovative solutions that solve real-world problems.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in tech started with curiosity about how things work. Today, I combine creative thinking 
              with technical expertise to build applications that make a difference. When I'm not coding, 
              you'll find me exploring new technologies or contributing to open-source projects.
            </p>
          </Chapter>
        </section>

        <section id="chapter-2" className="min-h-screen py-20">
          <Chapter 
            number="2" 
            eyebrow="Education" 
            title="Educational Journey"
            id="chapter-2"
          >
            <div className="space-y-8">
              <div className="border border-yellow-400/30 rounded-lg p-6 hover:border-yellow-400/60 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">10th Year</h3>
                <p className="text-yellow-400 mb-2">2020 - 2021</p>
                <p className="text-lg font-semibold text-yellow-400 mb-2">St.Joseph's Matriculation Higher Secondary School</p>
                <p className="text-foreground/70">Foundation in Science and Mathematics</p>
              </div>

              <div className="border border-yellow-400/30 rounded-lg p-6 hover:border-yellow-400/60 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">12th Year</h3>
                <p className="text-yellow-400 mb-2">2022 - 2023</p>
                <p className="text-lg font-semibold text-yellow-400 mb-2">St.Joseph's Matriculation Higher Secondary School</p>
                <p className="text-foreground/70">Advanced Specialization in STEM</p>
              </div>

              <div className="border border-yellow-400/30 rounded-lg p-6 hover:border-yellow-400/60 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">Undergraduate</h3>
                <p className="text-yellow-400 mb-2">2023 - 2027</p>
                <p className="text-lg font-semibold text-yellow-400 mb-2">Kongu Engineering College</p>
                <p className="text-foreground/70">Bachelor's in Computer Science</p>
              </div>
            </div>
          </Chapter>
        </section>

        <section id="chapter-3" className="min-h-screen py-20">
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

        <section id="chapter-4" className="min-h-screen py-20">
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

        <section id="contact" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  )
}
