import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider, ThemeContext } from 'styled-components'
import './index.css'
import { original, invert } from './components/ThemeStyle'
import Home from './pages/Home'
import React, { useState, useRef, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import ContactMe from './pages/ContactMe'
import SmoothScroll from './hooks/useScrollToTop'
import Loader from './components/Loader'
import styled from 'styled-components'
import { handleHideLoader } from './utilities/animation'

function App() {
  const [loading, setLoading] = useState(false)
  const containerRef = useRef(null)
  const preloader = useRef(null)
  const [theme, setTheme] = useState('original')

  useEffect(() => {
    setTimeout(() => {
      handleHideLoader(preloader.current)
    }, 4000)
  } , [])

  return (
    <>
      {/* <LocomotiveScrollProvider 
        options={{
          smooth: true,
          tablet: {
            smooth: true,
          },
        }}
        watch={[]}
        containerRef={containerRef}
        
      > */}
      <Router>
        <SmoothScroll />
        <div className='overlay'/>
        <main data-scroll-container ref={containerRef}>
          <div className='preloaderContainer' ref={preloader}>
            <Loader />
          </div>
          <ToastContainer />
          <GlobalStyles />
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={original}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<ContactMe />} />
              </Routes>
            </ThemeProvider>
          </ThemeContext.Provider>
        </main>
      </Router>
      {/* </LocomotiveScrollProvider> */}
    </>
  )
}

export default App
