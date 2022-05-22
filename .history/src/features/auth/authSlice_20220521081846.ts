import { createSlice } from '@reduxjs/toolkit'
import { IUser } from 'constants/models/auth.model'

interface State {
  isLogin: boolean
  user: IUser
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
})
