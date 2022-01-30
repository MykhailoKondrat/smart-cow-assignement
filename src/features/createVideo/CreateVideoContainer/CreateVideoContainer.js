import React, { useEffect } from 'react'
import CreateVideoHeader from '../CreateVideoHeader'
import { Outlet, useNavigate } from 'react-router-dom'
import VideoPreview from '../VideoPreview'
import classes from './CreateVideoContainer.module.scss'
import Tab from '../../../components/UI/Tab'

const createVideoTabs = [
  { label: 'Actors', path: 'actors' },
  { label: 'Voice', path: 'voice' },
  { label: 'Alignment', path: 'alignment' },
  { label: 'Background', path: 'background' }
]

const CreateVideoContainer = () => {
  const navigate = useNavigate()
  useEffect(() => {
    // could be used to persist navigation if last opened tab is stored
    navigate('actors')
  }, [navigate])
  return (
    <>
      <CreateVideoHeader />
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
