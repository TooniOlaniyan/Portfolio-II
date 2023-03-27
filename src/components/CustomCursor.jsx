import React from 'react'
import { useEffect , useState } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'

function CustomCursor() {
    const cursorRef = useRef(null)
    const secondaryCursorRef = useRef(null)
    const [enlarge , setEnlarge] = useState(false)
    const PositonRef = useRef({
      mouseX:0,
      mouseY:0,
      destinationX:0,
      destinationY:0,
      distanceX:0,
      distanceY:0,
      key:-1
    })

    useEffect(() => {
        document.addEventListener('mousemove',(e)=> {
            const {clientX , clientY} = e
            const mouseX = clientX - cursorRef.current.clientWidth/2
            const mouseY = clientY - cursorRef.current.clientHeight/2
            PositonRef.current.mouseX = mouseX - secondaryCursorRef.current.clientWidth/2
            PositonRef.current.mouseY = mouseY - secondaryCursorRef.current.clientHeight/2

            cursorRef.current.style.transform = `translate3d(${mouseX}px , ${mouseY}px , 0)`
        })
    },[])
    useEffect(() => {
      const followMouse = () => {
        PositonRef.current.key = requestAnimationFrame(followMouse)

        const {mouseX , mouseY , destinationX , destinationY , distanceX , distanceY} = PositonRef.current
        if(!destinationX | !destinationY){
          PositonRef.current.destinationX = mouseX
          PositonRef.current.destinationY = mouseY

        }else{
          PositonRef.current.distanceX = (mouseX - destinationX) * 0.02
          PositonRef.current.distanceY = (mouseY - destinationY) * 0.02
          if(Math.abs(PositonRef.current.distanceX) + Math.abs(PositonRef.current.distanceY) < 0.02){
            PositonRef.current.destinationX = mouseX
            PositonRef.current.destinationY = mouseY
          }else{
            PositonRef.current.destinationX += distanceX
            PositonRef.current.destinationY += distanceY
          }
        }
        secondaryCursorRef.current.style.transform = `translate3d(${destinationX}px , ${destinationY}px , 0)`

      }

      followMouse()
    },[])
    useEffect(() => {
        document.addEventListener('mousemove',(e)=> {
            const {clientX , clientY} = e
            const mouseX = clientX - cursorRef.current.clientWidth/2
            const mouseY = clientY - cursorRef.current.clientHeight/2
            PositonRef.current.mouseX = mouseX - secondaryCursorRef.current.clientWidth/2
            PositonRef.current.mouseY = mouseY - secondaryCursorRef.current.clientHeight/2

            cursorRef.current.style.transform = `translate3d(${mouseX}px , ${mouseY}px , 0)`
        })
    })

  return (
    <>
      <Cursor ref={cursorRef}></Cursor>
      <SecondaryCursor ref={secondaryCursorRef}></SecondaryCursor>
    </>
  )
}
const Cursor = styled.div`
  z-index: 100;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;


  @media screen and (max-width: 640px) {
    display: none;
  }
`
const SecondaryCursor = styled.div`
  z-index: 1000;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.textColor};
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  @media screen and (max-width: 640px) {
    display: none;
  }
`

export default CustomCursor