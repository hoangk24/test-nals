import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, Token } from 'constants/models/auth.model'

interface State {
  isLogin: boolean
  token: Token
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    token: {} as token,
  } as State,
  reducers: {
    setLogIn: (state, action: PayloadAction<IUser>) => {
      state.isLogin = true
      state.user = action.payload
    },
    setLogOut: (state) => {
      state.isLogin = false
      state.user = {} as IUser
    },
  },
})

export const { setLogIn, setLogOut } = authSlice.actions
export default authSlice.reducer
