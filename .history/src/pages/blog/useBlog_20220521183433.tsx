import { useAppDispatch } from 'app/store'
import { ICreateBlogPayload } from 'constants/payloads/blog.payload'
import React from 'react'

export default function useBlog() {
  const dispatch = useAppDispatch()
  const createBlog = (data: ICreateBlogPayload) => {}
  return {}
}
