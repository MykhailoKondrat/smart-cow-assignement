import React from 'react'
import AddVideo from '../../../assets/icons/AddVideo'
import classes from './MainNav.module.scss'
import Logo from '../../../assets/icons/Logo'
import { BrowseVideos } from '../../../assets/icons'
import MainMenuNavButton from '../../../components/UI/MainMenuNavButton'
import avatar from '../../../assets/images/profileAvata.png'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../../store/selectors'

const MainNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <nav className={classes.mainNavWrapper}>
      <Logo />
      {isLoggedIn && (
        <>
          <div className={classes.mainMenuWrapper}>
            <ul>
              <li>
                <MainMenuNavButton destination="/main/create">
                  <AddVideo />
                </MainMenuNavButton>
              </li>
              <li>
                <MainMenuNavButton destination="/main/browse">
                  <BrowseVideos />
                </MainMenuNavButton>
              </li>
            </ul>
          </div>
          <MainMenuNavButton destination={'/main/profile'}>
            <img src={avatar} alt="profile" />
          </MainMenuNavButton>
        </>
      )}
    </nav>
  )
}

export default MainNav

MainNav.propTypes = {}
