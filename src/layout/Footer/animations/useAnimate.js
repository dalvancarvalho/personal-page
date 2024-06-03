/* useAnimate.js */

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function useAnimate() {
  // Footer animation

  const tl = useRef(null)
  const scope = useRef(null)
  const top = useRef(null)
  const socials = useRef(null)
  const bottom = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: scope.current,
            start: 'top bottom',
          },
        })
        .fromTo(
          top.current,
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power4.inOut' }
        )
        .fromTo(
          bottom.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power4.inOut' },
          '-=1'
        )
        .fromTo(
          socials.current.children,
          { opacity: 0, scale: 0.75 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'elastic.out(3,0.8)',
            stagger: 0.075,
          },
          '-=0.25'
        )
    }, scope)

    // Context cleanup
    return () => ctx.revert()
  }, [])

  return { scope, top, socials, bottom }
}
