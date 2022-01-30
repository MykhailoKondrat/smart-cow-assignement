import React from 'react'
import { useSelectedActor } from '../../../hooks/useSelectedActor'
import ActorTile from '../../../components/UI/ActorTile'
import { actors } from '../../../const/dictionaries'
import classes from './SelectActor.module.scss'
const SelectActor = () => {
  const { selectedActorName, handleSetNewActor } = useSelectedActor()
  return (
    <div className={classes.actorTiles}>
      {Object.values(actors).map((actor) => (
        <ActorTile
          key={actor.name}
          actor={actor.name}
          isSelected={selectedActorName === actor.name}
          handleClick={() => {
            handleSetNewActor(actor.name)
          }}
        />
      ))}
    </div>
  )
}

export default SelectActor

SelectActor.propTypes = {}
