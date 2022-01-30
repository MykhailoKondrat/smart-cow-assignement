import React from 'react'
import classes from './Login.module.scss'
import AuthBackgroundLogo from '../../../components/AuthBackgroundLogo'
import TextInput from '../../../components/UI/inputs/TextInput'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import SmallButton from '../../../components/UI/buttons/SmallButton'

const LogIn = () => {
  const { handleLogin } = useAuth()
  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin()
  }
  return (
    <>
      <AuthBackgroundLogo />
      <div className={classes.authHeadline}>
        <h2>Sign In</h2>
      </div>
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.signupForm}>
          <TextInput
            label="Email"
            name="email"
            placeholder={'Enter your email'}
            type="email"
            required
          />
          <TextInput
            label="Password"
            name="pass"
            placeholder={'Enter your password'}
            type="password"
            required
          />
          <SmallButton variant="green" type="submit">
            Login
          </SmallButton>
        </form>
      </div>
      <p className={classes.link}>
        New here? <Link to={{ pathname: '/signup' }}>Signup</Link>
      </p>
    </>
  )
}

export default LogIn

LogIn.propTypes = {}
