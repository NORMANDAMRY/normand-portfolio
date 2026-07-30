import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import Header from './components/Header'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import BlogList from './components/blog/BlogList'
import BlogPost from './components/blog/BlogPost'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  )
}

export default function App() {
  const [splashDone, setSplashDone] = useState(() => {
    return sessionStorage.getItem('splashDone') === 'true'
  })

  const handleSplashFinish = () => {
    setSplashDone(true)
    sessionStorage.setItem('splashDone', 'true')
  }

  return (
    <ThemeProvider>
      {!splashDone && <SplashScreen onFinish={handleSplashFinish} />}
      <Router>
        <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0a0a0f] text-[#0f172a] dark:text-[#f1f5f9] transition-colors">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}
