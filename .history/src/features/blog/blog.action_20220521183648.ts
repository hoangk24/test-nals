import { createAsyncThunk } from '@reduxjs/toolkit'
import { register } from 'services/auth.service'
import { getBlogDetail } from 'services/blog.service'

export const getBlogDetailAction = createAsyncThunk(
  'auth/getBlogDetailAction',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await getBlogDetail(id)
      return res
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
export const createBlogAction = createAsyncThunk(
  'auth/createBlogAction',
  async (body: any, { rejectWithValue }) => {
    try {
      const res = await getBlogDetail(id)
      return res
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
