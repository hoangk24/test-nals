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
    setLogin: (state, actions) => {},
  },
})
