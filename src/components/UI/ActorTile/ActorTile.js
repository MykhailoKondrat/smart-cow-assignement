import React from 'react'
import classes from './ActorTile.module.scss'
import { actors } from '../../../const/dictionaries'

const ActorTile = ({ actor, handleClick, isSelected }) => {
  const actorData = actors[actor]
  return (
    <div onClick={handleClick} className={classes.actorTileContainer}>
      <img
        className={`${classes.actorImage} ${
          isSelected ? classes.selectedActor : ''
        }`}
        src={actorData.image}
        alt="actor-image"
      />
      <p
        className={`${classes.actorLabel} ${
          isSelected ? classes.selectedLabel : ''
        }`}
      >
        {actorData.name}
      </p>
    </div>
  )
}

export default ActorTile

ActorTile.propTypes = {}
