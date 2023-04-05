import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import gsap , {Power4 , Power1} from 'gsap'
import '../index.css'

function Loader() {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo('.bar' , {
      width:'0'
    } , {
      width:'100%',
      ease:Power4.easeInOut,
      duration:3,
      // opacity:0.5
      
      
      
    } )
    tl.to('.text' , {
      y:-120,
      duration:3,
      skewY:10,
      ease:Power1.easeInOut
      
    })

  

  })

  return (
    <>
      <div className='loader'>
        <div className='loadText'>
          <p className='text'>Loading...</p>
        </div>
        <div className='bar'></div>
      </div>
    </>
  )
}



export default Loader
