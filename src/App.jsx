import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Achievements from './components/Achievements'
import Certificates from './components/Certificates'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-paper-50 dark:bg-ink-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Achievements />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
