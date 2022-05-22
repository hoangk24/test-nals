import { createAsyncThunk } from '@reduxjs/toolkit'
import { ILoginPayload, IRegisterPayload } from 'constants/payloads/auth.payload'
import { login, register } from 'services/auth.service'

export const loginAction = createAsyncThunk(
  'auth/login',
  async (body: ILoginPayload, { rejectWithValue }) => {
    try {
      const res = await login(body)
      return res.data
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
export const getProfileAction = createAsyncThunk(
  'auth/getProfileAction',
  async ({ rejectWithValue }) => {
    try {
      const res = await login(body)
      return res.data
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
export const registerAction = createAsyncThunk(
  'auth/register',
  async (body: any, { rejectWithValue }) => {
    try {
      const res = await register(body)
      return res
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
