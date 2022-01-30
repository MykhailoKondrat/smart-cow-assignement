import { useDispatch, useSelector } from 'react-redux'
import { selectNewVideoActorName } from '../store/selectors'
import { setActor } from '../store/addVideoSlice'

export const useSelectedActor = () => {
  const dispatch = useDispatch()
  const selectedActorName = useSelector(selectNewVideoActorName)
  const handleSetNewActor = (actorName) => {
    dispatch(setActor(actorName))
  }
  return { selectedActorName, handleSetNewActor }
}
