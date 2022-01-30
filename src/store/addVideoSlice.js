import { actors } from '../const/dictionaries'

const { createSlice } = require('@reduxjs/toolkit')
const addVideoInitState = {
  videoTitle: 'Saying Hi to my customers',
  actor: actors.YoYo.name,
  voice: '',
  alignment: '',
  background: '',
  script: ''
}
const addVideoSlice = createSlice({
  name: 'addVideo',
  initialState: addVideoInitState,
  reducers: {
    setTitle: (state, { payload }) => {
      state.videoTitle = payload
    },
    setActor: (state, { payload }) => {
      state.actor = payload
    },
    setVoice: (state, { payload }) => {
      state.voice = payload
    },
    setAlignment: (state, { payload }) => {
      state.alignement = payload
    },
    setBackground: (state, { payload }) => {
      state.background = payload
    },
    setScript: (state, { payload }) => {
      state.script = payload
    }
  }
})
export const {
  setTitle,
  setActor,
  setVoice,
  setAlignment,
  setBackground,
  setScript
} = addVideoSlice.actions
export default addVideoSlice.reducer
