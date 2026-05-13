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

        <section id="chapter-4" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4">
            <Projects />
          </div>
        </section>

        <section id="chapter-5" className="min-h-screen py-20">
          <div className="max-w-4xl mx-auto px-4">
            <Skills />
          </div>
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
