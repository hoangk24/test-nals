import { createAsyncThunk } from '@reduxjs/toolkit'
import { IRegisterPayload } from 'constants/payloads/auth.payload'

// export const loginAction = createAsyncThunk(
//   'auth/login',
//   async (body:, { rejectWithValue }) => {
//     try {
//       const res = await logIn(body)
//       return res.data
//     } catch (error: any) {
//       return rejectWithValue(error?.response.data)
//     }
//   },
// )
export const registerAction = createAsyncThunk(
  'auth/register',
  async (body: IRegisterPayload, { rejectWithValue }) => {
    try {
      const res = await register(body)
      return res.data
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
