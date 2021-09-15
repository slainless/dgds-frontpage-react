import _ from "lodash"
import { useEffect, useRef } from "react"
import React from "react";

export default function useCarousel<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const threshold = 100
  let pos = { x: 0, y: 0, top: 0, left: 0 }

  useEffect(() => {
    if(ref.current == null) return
    const el = ref.current
    el.addEventListener('mousedown', (e) => {
      el.setAttribute('data-is-dragged', '')
      pos = {
        top: el.scrollTop,
        left: el.scrollLeft,
        x: e.clientX,
        y: e.clientY,
      }
    })
    el.addEventListener('mouseup', (e) => {
      el.removeAttribute('data-is-dragged')
      let dx = e.clientX - pos.x
      let dy = e.clientY - pos.y

      dx = dx * 1.5
      dx = dx * 1.5

      el.scrollTop = pos.top - dy
      el.scrollLeft = pos.left - dx
    })
    el.addEventListener('mousemove', (e) => {
      if(el.dataset.isDragged == null) return
    })
  }, [ref])

  return { 
    ref,
    scrollRight: () => { ref.current?.scrollBy(200, 0) },
    scrollLeft: () => { ref.current?.scrollBy(-200, 0) }
  }
}