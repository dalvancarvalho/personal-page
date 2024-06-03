/* Main/index.jsx */

import useScrollToTop from './hooks/useScrollToTop'

export default function Main({ children }) {
  // Wraps the pages of the application

  useScrollToTop()

  return <main className="overflow-hidden">{children}</main>
}
