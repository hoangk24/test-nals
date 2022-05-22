import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICreateBlogPayload } from 'constants/payloads/blog.payload'
import { register } from 'services/auth.service'
import { createBlog, getBlogDetail } from 'services/blog.service'

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
  async (body: ICreateBlogPayload, { rejectWithValue }) => {
    try {
      const res = await createBlog(body)
      return res
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
export const updateBlogAction = createAsyncThunk(
  'auth/updateBlogAction',
  async ({ id, body }: any, { rejectWithValue }) => {
    try {
      const res = await createBlog(id, body)
      return res
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
