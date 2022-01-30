import React, { useState } from 'react'
import classes from './TextInput.module.scss'
import PropTypes from 'prop-types'

const TextInput = ({ label, name, type, placeholder, ...props }) => {
  // normally I'd use some library like formik or react-hook-form
  // so this is just as placeholder
  const [value, setValue] = useState('')

  return (
    <div className={classes.inputContainer}>
      <div className={classes.labelWrap}>
        <label htmlFor={name} className={classes.inputLabel}>
          {label}
        </label>
        {type === 'password' && (
          <a href="#" className={classes.passwordOnly}>
            Forgot ?
          </a>
        )}
      </div>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        type={type ?? 'text'}
        className={classes.textInput}
        {...props}
      />
    </div>
  )
}

export default TextInput

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string
}
