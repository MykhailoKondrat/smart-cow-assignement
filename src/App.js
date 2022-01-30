import classes from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import MainNav from './features/nav/MainNav'
import React from 'react'
import LogIn from './features/auth/LogIn'
import SignUp from './features/auth/SignUp'
import CreateVideoContainer from './features/createVideo/CreateVideoContainer'
import SelectActor from './features/createVideo/SelectActor'
import UserProfileContainer from './features/profile/UserProfile'

function App() {
  return (
    <div className={classes.App}>
      <MainNav />
      <div className={classes.mainContainer}>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="main/*"
            element={
              <PrivateRoute>
                <Routes>
                  <Route path="create/*" element={<CreateVideoContainer />}>
                    <Route path="actor" element={<SelectActor />} />
                    <Route path="voice" element={<p>voice</p>} />
                    <Route path="alignment" element={<p>align</p>} />
                    <Route path="background" element={<p>background</p>} />
                  </Route>

                  <Route path="browse" element={<p>browse</p>} />

                  <Route path={'profile/*'} element={<UserProfileContainer />}>
                    <Route path={'profile'} element={<p>profile</p>} />
                    <Route path={'myPlan'} element={<p>my plans</p>} />
                    <Route path={'billing'} element={<p>billing</p>} />
                  </Route>
                </Routes>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<LogIn />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
