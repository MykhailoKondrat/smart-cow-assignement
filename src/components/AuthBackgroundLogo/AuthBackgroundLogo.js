import React from 'react'
import Logo from '../../assets/icons/Logo'
import classes from './AuthBackgroundLogo.module.scss'

const AuthBackgroundLogo = () => {
  return (
    <div className={classes.wrapper}>
      <Logo width={600} height={583} />
    </div>
  )
}

export default AuthBackgroundLogo

AuthBackgroundLogo.propTypes = {}
