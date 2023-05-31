import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animationOnScroll = (elementToAnim, start, toggleActions, y, opacity, duration, stagger, delay, scaleX, transformOrigin) => {

  gsap
    .from(
      elementToAnim,
      {
        scrollTrigger: {
          trigger: elementToAnim,
          start: start,
          toggleActions: toggleActions
        },
        y: y,
        opacity: opacity,
        duration: duration,
        stagger: stagger,
        delay: delay,
        scaleX: scaleX,
        transformOrigin: transformOrigin
      }
    )
}

export const underlineAnimation = (underline, start) => {
  gsap
    .from(
      underline,
      {
        scrollTrigger: {
          trigger: underline,
          start: start,
          toggleActions: 'play none none reverse'
        },
        '--underlineWidth': '0px',
        duration: .2
      }
    )
}
