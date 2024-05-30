/* NavList/index.jsx */

import NavLink from '../NavLink'
import MenuList from '../MenuList'

import NAV_LINKS from '../../constants/navLinks'

function NavList({ pathname, t }) {
  // List of navigation links (inside menu)

  return (
    <nav aria-label={t('header.nav.ariaLabel')} className="w-5/6">
      <MenuList title={t('header.nav.heading')}>
        {NAV_LINKS[pathname] &&
          NAV_LINKS[pathname].map((props) => (
            <NavLink key={props.name} to={props.name} {...props}>
              {t(`header.nav.${pathname}.${props.name}`)}
            </NavLink>
          ))}
      </MenuList>
    </nav>
  )
}

export default NavList
