import GlobalStyles from './components/GlobalStyles'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { ThemeProvider, ThemeContext } from 'styled-components'
import { useScroll, motion, AnimatePresence } from 'framer-motion'
import './index.css'
import { original, invert } from './components/ThemeStyle'
import Home from './pages/Home'
import React, { useState, useRef, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import ContactMe from './pages/ContactMe'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)
  const [theme, setTheme] = useState('original')

  return (
    <Router>
      <LocomotiveScrollProvider 
        options={{
          smooth: true,
          tablet: {
            smooth: true,
          },
        }}
        watch={[() => ScrollTrigger.update()]}
        containerRef={containerRef}
        
      >
      <main data-scroll-container ref={containerRef}>
        <ToastContainer />
        <GlobalStyles />
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ThemeProvider theme={original}>
            <AnimatePresence>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<ContactMe />} />
              </Routes>
            </AnimatePresence>
          </ThemeProvider>
        </ThemeContext.Provider>
      </main>
      </LocomotiveScrollProvider>
    </Router>
  )
}

export default App
