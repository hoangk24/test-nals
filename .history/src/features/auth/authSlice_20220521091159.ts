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
    token: {} as Token,
  } as State,
  reducers: {
    setLogIn: (state, action: PayloadAction<Token>) => {
      state.isLogin = true
      state.token = action.payload
    },
    setLogOut: (state) => {
      state.isLogin = false
      state.token = {} as Token
    },
  },
})

export const { setLogIn, setLogOut } = authSlice.actions
export default authSlice.reducer