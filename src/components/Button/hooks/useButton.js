/* useButton.js */

import { useRef } from 'react'

import buttonVariants from '../constants/buttonVariants'

function useButton(variant, callback, tooltip) {
  // Handles the button logic

  let timeout
  const style = buttonVariants[variant]

  const ref = useRef(null)

  // Button
  function handleClick() {
    if (!callback) return
    callback()
    hide()
  }

  // Tooltip
  function hide() {
    if (!tooltip) return
    clearTimeout(timeout)
    ref.current.classList.remove('tooltip-active')
  }

  function show() {
    if (!tooltip) return
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => ref.current.classList.add('tooltip-active'), 750)
  }

  return { style, handleClick, hide, show, ref }
}

export default useButton
