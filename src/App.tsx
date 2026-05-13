import { useEffect, useState } from 'react'
import { Hero } from './components/story/Hero'
import { Nav } from './components/story/Nav'
import { Skills } from './components/story/Skills'
import { Projects } from './components/story/Projects'
import { Contact } from './components/story/Contact'
import { Chapter } from './components/story/Chapter'

export default function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'skills' | 'projects' | 'contact' | 'about'>('hero')

  useEffect(() => {
    // Handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Remove #
      if (hash === 'chapter-1' || hash === 'top' || hash === '') {
        setActiveSection('hero')
      } else if (hash === 'chapter-4' || hash === 'projects') {
        setActiveSection('projects')
      } else if (hash === 'chapter-5' || hash === 'skills') {
        setActiveSection('skills')
      } else if (hash === 'contact') {
        setActiveSection('contact')
      } else if (hash === 'about') {
        setActiveSection('about')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Set initial section from URL
    
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      
      <main className="max-w-4xl mx-auto px-4 py-8 pt-24">
        {activeSection === 'hero' && <Hero />}
        {activeSection === 'about' && <Chapter />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  )
}
