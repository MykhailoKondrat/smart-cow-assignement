import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Tab.module.scss'

const Tab = ({ path, children }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${classes.tab} ${isActive ? classes.active : ''}`
      }
    >
      {children}
    </NavLink>
  )
}

export default Tab

Tab.propTypes = {}
