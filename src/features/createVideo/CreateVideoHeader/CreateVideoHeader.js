import React from 'react'
import classes from './CreateVideoHeader.module.scss'
import { useSelector } from 'react-redux'
import { selectNewVideoTitle } from '../../../store/selectors'
import { useCreateNewVideo } from '../../../hooks/useCreateNewVideo'
import SmallButton from '../../../components/UI/buttons/SmallButton'
import ArrowDown from '../../../assets/icons/ArrowDown'

const CreateVideoHeader = () => {
  const videoTitle = useSelector(selectNewVideoTitle)
  const { handleSaveNewVideo, handleCancelNewVideo } = useCreateNewVideo()
  return (
    <div className={classes.header}>
      <div className={classes.headlineWrap}>
        <h2>{videoTitle}</h2>
        <ArrowDown />
      </div>
      <div className={classes.headerButtonWrapper}>
        <SmallButton variant="grey" onClick={handleCancelNewVideo}>
          Cancel
        </SmallButton>
        <SmallButton variant="green" onClick={handleSaveNewVideo}>
          Save
        </SmallButton>
      </div>
    </div>
  )
}

export default CreateVideoHeader

CreateVideoHeader.propTypes = {}
