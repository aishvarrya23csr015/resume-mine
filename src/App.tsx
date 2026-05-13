import { useState } from 'react'
import { Hero } from './components/story/Hero'
import { Nav } from './components/story/Nav'
import { Skills } from './components/story/Skills'
import { Projects } from './components/story/Projects'
import { Contact } from './components/story/Contact'
import { Chapter } from './components/story/Chapter'

export default function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'skills' | 'projects' | 'contact' | 'about'>('hero')

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {activeSection === 'hero' && <Hero />}
        {activeSection === 'about' && <Chapter />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  )
}
