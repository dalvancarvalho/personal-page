/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

import useScreenProps from '../../../hooks/useScreenProps'

export default function useAnimate() {
  // Divider animation

  const scope = useRef(null)
  const { screenSize } = useScreenProps()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        scope.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          delay: 0.5,
          duration: 1.25,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: scope.current,
            start: 'bottom bottom',
          },
        }
      )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [screenSize.lg])

  return { scope }
}
