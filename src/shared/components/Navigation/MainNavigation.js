import React, {useState} from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import './MainNavigation.css';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawer = () => {
    setDrawerIsOpen(true)
  }
  const closeDrawer = () => {
    setDrawerIsOpen(false)
  }

  return (
    <React.Fragment>
      {drawerIsOpen && <SideDrawer>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>}
      <MainHeader>
        <button
        onClick={openDrawer}
          className="main-navigation__menu-btn"
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation
