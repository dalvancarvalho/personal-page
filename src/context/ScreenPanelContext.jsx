/* ScreenPanelContext.jsx */

import { createContext, useContext, useEffect, useState } from 'react'

import useKeyPress from '../hooks/useKeyPress'
import useLocalStorage from '../hooks/useLocalStorage'
import useScreenProps from '../hooks/useScreenProps'

// Context for the screen panel
const ScreenPanelContext = createContext()

export function ScreenPanelProvider({ children }) {
  const SHORTCUT_KEY = 's'

  const [isPanelOpen, setPanelState] = useLocalStorage('open-screen-panel', false)
  const { isPortraitMode, screenDimensions, screenSize } = useScreenProps()
  useKeyPress(SHORTCUT_KEY, togglePanel)

  const [screen, setScreenSize] = useState(null)
  const { width, height } = screenDimensions
  const orientation = isPortraitMode ? 'Portrait' : 'Landscape'
  const viewportSize = width + ' x ' + height

  useEffect(() => {
    const values = Object.values(screenSize)
    const position = values.lastIndexOf(true)

    switch (position) {
      case -1:
      case 0:
        setScreenSize('sm')
        break
      case 1:
        setScreenSize('md')
        break
      case 2:
        setScreenSize('lg')
        break
      case 3:
        setScreenSize('xl')
        break
      case 4:
        setScreenSize('2xl')
        break
      default:
        setScreenSize('...')
    }
  }, [width])

  function togglePanel() {
    setPanelState((current) => !current)
  }

  return (
    <ScreenPanelContext.Provider
      value={{ isPanelOpen, togglePanel, orientation, viewportSize, screen }}
    >
      {children}
    </ScreenPanelContext.Provider>
  )
}

export default function useScreenPanel() {
  return useContext(ScreenPanelContext)
}
