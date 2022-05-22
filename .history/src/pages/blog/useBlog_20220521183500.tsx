import { useAppDispatch } from 'app/store'
import { ICreateBlogPayload } from 'constants/payloads/blog.payload'
import { useLoading } from 'hooks/useLoading'
import React from 'react'

export default function useBlog() {
  const dispatch = useAppDispatch()
  const loading = useLoading()
  const createBlog = (data: ICreateBlogPayload) => {}
  return { createBlog }
}
