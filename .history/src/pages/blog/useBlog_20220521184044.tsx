import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch } from 'app/store'
import { ICreateBlogPayload } from 'constants/payloads/blog.payload'
import { createBlogAction } from 'features/blog/blog.action'
import { useLoading } from 'hooks/useLoading'
import React from 'react'

export default function useBlog() {
  const dispatch = useAppDispatch()
  const loading = useLoading()
  const createBlog = (data: ICreateBlogPayload) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    loading.show()
    dispatch(createBlogAction(formData as any))
      .then(unwrapResult)
      .then((res: any) => {
        console.log(res)
      })
  }
  return { createBlog }
}
