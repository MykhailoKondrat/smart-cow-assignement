import React from 'react'
import classes from './VideoPreview.module.scss'
import { actors } from '../../../const/dictionaries'
import { useSelector } from 'react-redux'
import { selectNewVideoActorName } from '../../../store/selectors'
import TextAreaInput from '../../../components/UI/inputs/TextAreaInput'

const VideoPreview = () => {
  const actor = useSelector(selectNewVideoActorName)
  return (
    <div className={classes.previewWrapper}>
      <div className={classes.previewImageWrap}>
        <img
          className={classes.previewImage}
          src={actors?.[actor]?.image}
          alt="actor-image"
        />
        <p className={classes.previewBadge}>Preview</p>
      </div>
      <TextAreaInput />
    </div>
  )
}

export default VideoPreview

VideoPreview.propTypes = {}
