import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICreateBlogPayload } from 'constants/payloads/blog.payload'
import { CreateCommentPayload, GetCommentPayload } from 'constants/payloads/comment.payload'
import { register } from 'services/auth.service'
import { createBlog, deleteBlog, getBlogDetail, updateBlog } from 'services/blog.service'
import { createComment, getComment } from 'services/comment.service'

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
  async ({ id, body }: { id: string; body: any }, { rejectWithValue }) => {
    try {
      const res = await updateBlog(id, body)
      return res
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
export const deleteBlogAction = createAsyncThunk(
  'auth/deleteBlogAction',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await deleteBlog(id)
      return res
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
export const getCommentsAction = createAsyncThunk(
  'auth/getCommentsAction',
  async ({ id, data }: { id: string; data: GetCommentPayload }, { rejectWithValue }) => {
    try {
      const res = await getComment(id, data)
      return res
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
export const createCommentsAction = createAsyncThunk(
  'auth/createCommentsAction',
  async ({ id, data }: { id: string; data: CreateCommentPayload }, { rejectWithValue }) => {
    try {
      const res = await createComment(id, data)
      return res
    } catch (error: any) {
      return rejectWithValue(error?.response.data)
    }
  },
)
