import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../store/selectors'

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  if (!isLoggedIn) {
    // Redirect them to the /login page,
    return <Navigate to="/login" replace />
  }

  return children
}
export default PrivateRoute

PrivateRoute.propTypes = {}
