import React from 'react'
import AuthBackgroundLogo from '../../../components/AuthBackgroundLogo'
import TextInput from '../../../components/UI/inputs/TextInput'
import { Link } from 'react-router-dom'
import classes from './Signup.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import SmallButton from '../../../components/UI/buttons/SmallButton'
const SignUp = () => {
  const { handleLogin } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin()
  }
  return (
    <>
      <AuthBackgroundLogo />
      <div className={classes.authHeadline}>
        <h2>Create An Account</h2>
      </div>
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.signupForm}>
          <TextInput
            label="Full name"
            name="name"
            placeholder={'Enter your name'}
            required
          />
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
            Create Account
          </SmallButton>
        </form>
      </div>
      <p className={classes.link}>
        Already a user? <Link to={{ pathname: '/login' }}>Login</Link>
      </p>
    </>
  )
}

export default SignUp

SignUp.propTypes = {}
