import React from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <MainHeader>
        <button
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
        </nav>
      </MainHeader>
  )
}

export default MainNavigation