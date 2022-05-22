import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, Token } from 'constants/models/auth.model'

interface State {
  isLogin: boolean
  token: string
  user: IUser
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
  } as State,
  reducers: {
    setLogIn: (state, action: PayloadAction<Token>) => {
      state.isLogin = true
      state.token = action.payload.token
      localStorage.setItem('token', action.payload.token)
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload
    },
    setLogOut: (state) => {
      state.isLogin = false
      state.token = ''
      localStorage.clear()
    },
  },
})

export const { setLogIn, setLogOut, setUser } = authSlice.actions
export default authSlice.reducer
