import React, { useState } from 'react'
import classes from './TextArea.module.scss'
import SmallButton from '../../buttons/SmallButton'
const TextAreaInput = () => {
  //normally this will go to some form or redux store  to persist state
  const [value, setValue] = useState('')
  return (
    <div className={classes.wrapper}>
      <textarea
        className={classes.textArea}
        placeholder="Type or paste your videoscript here. You can also request a translation of
an English script to any of 27 other languages"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <div className={classes.buttonWrapper}>
        <SmallButton variant="grey"> Listen</SmallButton>
      </div>
      <p className={classes.wordCounter}>{value.length} char</p>
    </div>
  )
}

export default TextAreaInput

TextAreaInput.propTypes = {}
