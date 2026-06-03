'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/** Scroll-spy: marks the TOC entry for the section currently on screen. */
export function TocScrollHighlight() {
  const pathname = usePathname()

  useEffect(() => {
    let raf = 0
    let cleanup: (() => void) | undefined

    const timer = window.setTimeout(() => {
      const toc = document.querySelector('.nextra-toc ul')
      if (!toc) return

      const links = Array.from(toc.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
      const headings = links
        .map((link) => {
          const id = decodeURIComponent(link.hash.slice(1))
          return document.getElementById(id)
        })
        .filter((el): el is HTMLElement => el != null)

      if (!headings.length) return

      const navbarOffset = 72

      const updateActive = () => {
        let activeId = headings[0].id

        for (const heading of headings) {
          if (heading.getBoundingClientRect().top <= navbarOffset) {
            activeId = heading.id
          }
        }

        links.forEach((link) => {
          const id = decodeURIComponent(link.hash.slice(1))
          link.dataset.active = id === activeId ? 'true' : 'false'
        })
      }

      const onScroll = () => {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(updateActive)
      }

      updateActive()
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })

      cleanup = () => {
        cancelAnimationFrame(raf)
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }, 50)

    return () => {
      window.clearTimeout(timer)
      cleanup?.()
    }
  }, [pathname])

  return null
}
