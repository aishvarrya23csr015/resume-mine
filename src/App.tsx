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
          <div className="max-w-4xl mx-auto px-4">
            <Chapter />
          </div>
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
