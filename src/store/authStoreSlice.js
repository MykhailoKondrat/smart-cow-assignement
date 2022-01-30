const { createSlice } = require('@reduxjs/toolkit')
const authInitState = {
  isLoggedIn: true
}
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    }
  }
})
export const { login, logout } = authSlice.actions
export default authSlice.reducer
