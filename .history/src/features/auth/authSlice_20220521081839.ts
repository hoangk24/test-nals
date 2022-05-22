import { createSlice } from '@reduxjs/toolkit'

interface State {
  isLogin: boolean
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
})
