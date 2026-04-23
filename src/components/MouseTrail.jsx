import { useEffect, useRef } from 'react'

export default function MouseTrail() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        dotRef.current.style.opacity = '1'
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = '1'
      }
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', move, { passive: true })
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="mouse-ring" />
      <div ref={dotRef} className="mouse-dot" />
    </>
  )
}
