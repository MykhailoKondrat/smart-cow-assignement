import { combineReducers, configureStore } from '@reduxjs/toolkit'
import auth from './authStoreSlice'
import addVideo from './addVideoSlice'
export const rootReducer = combineReducers({
  auth,
  addVideo
})

const store = configureStore({
  reducer: rootReducer
})
export default store
