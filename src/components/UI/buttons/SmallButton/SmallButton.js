import React from 'react'
import classes from './SmallButton.module.scss'
import PropTypes from 'prop-types'
const classMap = {
  green: classes.smallGreenButton,
  grey: classes.smallGreyButton
}
const SmallButton = ({ children, variant, ...props }) => {
  return (
    <button
      className={classMap[variant] ?? classes.smallGreenButton}
      {...props}
    >
      {children}
    </button>
  )
}

export default SmallButton

SmallButton.propTypes = {
  variant: PropTypes.oneOf(Object.keys(classMap))
}
