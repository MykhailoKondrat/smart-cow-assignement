import { useDispatch } from 'react-redux'
import { login, logout } from '../store/authStoreSlice'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = () => {
    // in real app this should be async function
    //await this
    dispatch(login())
    //then if received token  - redirect.
    navigate('/main/create')

    //error handling should be done in a API layer
  }
  const handleLogout = () => {
    dispatch(logout())
  }
  return { handleLogin, handleLogout }
}
