/* Navbar/index.jsx */

import NavLink from '../NavLink'

import NAV_LINKS from '../../constants/navLinks'

function Navbar({ pathname, t }) {
  // List of navigation links displayed in the header

  return (
    <nav aria-label={t('header.nav.ariaLabel')}>
      <ul className="flex items-center gap-6">
        {NAV_LINKS[pathname] &&
          NAV_LINKS[pathname].map((props) => (
            <NavLink key={props.name} to={props.name}>
              {t(`header.nav.${pathname}.${props.name}`)}
            </NavLink>
          ))}
      </ul>
    </nav>
  )
}

export default Navbar
