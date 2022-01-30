import React from 'react'
import { Outlet } from 'react-router-dom'
import Tab from '../../../components/UI/Tab'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/authStoreSlice'

const tabs = [
  { label: 'Profile', path: 'profile' },
  { label: 'My Plan', path: 'myPlan' },
  { label: 'Billing', path: 'billing' }
]
const UserProfileContainer = () => {
  const dispatch = useDispatch()
  return (
    <div>
      {tabs.map((tab) => (
        <Tab key={tab.path} path={tab.path}>
          {tab.label}
        </Tab>
      ))}
      <button
        onClick={() => {
          dispatch(logout())
        }}
      >
        logout
      </button>
      <Outlet />
    </div>
  )
}

export default UserProfileContainer

UserProfileContainer.propTypes = {}
