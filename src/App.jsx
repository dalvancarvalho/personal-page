/* App.jsx */

import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { gsap } from 'gsap'
import { Helmet } from 'react-helmet-async'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { TextPlugin } from 'gsap/TextPlugin'
import { useLocation } from 'react-router-dom'

import useTheme from './context/ThemeContext'

import useConsoleMessage from './hooks/useConsoleMessage'

import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'

import Routes from './routes'

// prettier-ignore
export default function App() {
  // Main component

  const DARK_THEME = '#1a1a1a'          // dark gray
  const LIGHT_THEME = '#f8fafc'         // light slate
  const isDevMode = import.meta.env.DEV // indicates if the app is in development mode

  const { pathname } = useLocation()
  const { theme } = useTheme()
  useConsoleMessage()

  useEffect(() => gsap.registerPlugin(ScrollTrigger, TextPlugin), []) // GSAP plugins

  return (
    <>
      {/* Metadata */}
      <Helmet>
        {isDevMode && (
          // Sets the favicon to a dark version that indicates the app is in development mode
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32_dev.png"
          />
        )}
        <meta name="theme-color" content={theme === 'light' ? LIGHT_THEME : DARK_THEME} />
      </Helmet>

      {/* Presentation */}
      <Header />
      <Main>
        <Routes />
      </Main>
      {pathname !== '/404' && <Footer />}

      {/* Vercel tools */}
      <Analytics />
      <SpeedInsights />
    </>
  )
}
