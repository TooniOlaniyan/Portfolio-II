import React , {useRef , useEffect} from 'react'
import styled from 'styled-components'
import {Power4} from 'gsap'

function Transition({timeline}) {
    const trans = useRef(null)
    useEffect(() => {
        timeline.to(trans.current, {
            duration:7,
            x:2600,
            ease:Power4.easeOut
        })

    })
  return (
    <Main>
      <div ref={trans} className='transition'></div>
    </Main>
  )
}
const Main = styled.div`
  .transition {
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.textColor};
    position: absolute;
    top: 0;
    width: 100%;
    /* max-width: 100vw; */
    height: 100vh;
    @media screen and (max-width: 640px) {
      display: none;
     overflow: hidden;
    }
  }
`
export default Transition