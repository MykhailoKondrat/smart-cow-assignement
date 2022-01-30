import React from 'react'
import CreateVideoHeader from '../CreateVideoHeader'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import VideoPreview from '../VideoPreview'
import classes from './CreateVideoContainer.module.scss'
import Tab from '../../../components/UI/Tab'

const createVideoTabs = [
  { label: 'Actors', path: 'actor' },
  { label: 'Voice', path: 'voice' },
  { label: 'Alignment', path: 'alignment' },
  { label: 'Background', path: 'background' }
]

const CreateVideoContainer = () => {
  const loacation = useLocation()
  return (
    <>
      <CreateVideoHeader />
      {/* a little trick to redirect to actors on opening this section*/}
      {loacation.pathname.endsWith('create') && <Navigate to={'actor'} />}
      <div className={classes.contentWrap}>
        <VideoPreview />
        <div className={classes.tabbedContentWrap}>
          <div className={classes.tabsWrap}>
            {createVideoTabs.map((tab) => (
              <Tab key={tab.path} path={tab.path}>
                {tab.label}
              </Tab>
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default CreateVideoContainer

CreateVideoContainer.propTypes = {}
