import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainMenuNavButton.module.scss'

const MainMenuNavButton = ({ children, destination }) => {
  return (
    <NavLink
      to={destination}
      className={({ isActive }) =>
        (isActive ? classes.active : classes.enable) + ' ' + classes.navButton
      }
    >
      {children}
    </NavLink>
  )
}

export default MainMenuNavButton

MainMenuNavButton.propTypes = {}
