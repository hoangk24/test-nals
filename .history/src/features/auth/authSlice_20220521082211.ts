import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from 'constants/models/auth.model'

interface State {
  isLogin: boolean
  user: IUser
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    user: {} as IUser,
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

export const {} = authSlice.actions
